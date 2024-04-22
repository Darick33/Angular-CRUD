import { Component, OnInit, inject, ViewChild, ElementRef  } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';
import { Usuario } from '../usuario/usuario.interface';
import UsuarioComponent from '../usuario/usuario.component';

@Component({
  selector: 'app-usuario-form',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, UsuarioComponent],
  templateUrl: './usuario-form.component.html',
  styleUrl: '../app.component.css'
})
export default class UsuarioFormComponent  implements OnInit{
  private fb = inject(FormBuilder);
  private usuarioService = inject(UsuarioService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  form?: FormGroup;
  usuario?: Usuario;
  
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    const role = {"sdsds": "Dssds"};
    if(id){
      this.usuarioService.get(id).subscribe(usuario =>{
        this.usuario = usuario;
        this.form = this.fb.group({
            id: [usuario.id],
            nombre: [usuario.nombre, [Validators.required]],
            apellido: [usuario.apellido,[ Validators.required]],
            rol: [
              usuario.rol[0].toString],
            email: [usuario.email,[Validators.email, Validators.required]],
        })
        
        console.log(usuario.rol[0]);
        console.log()
      })
    } else{
      this.form = this.fb.group({
        nombre: ["", [Validators.required]],
        apellido: ["",[ Validators.required]],
        rol: ["ENTRENADOR"],
        email: ["",[Validators.email, Validators.required]],
        clave: ["",[ Validators.required]],
      })
    }
  }

  

  save(){
    const caloresUsuario = this.form!.value;
    if(this.usuario){
      this.usuarioService.update(this.usuario.id, caloresUsuario)
      .subscribe(()=>{
        // this.router.navigate(['/']);
      })
    }else{
      this.usuarioService.create(caloresUsuario)
      .subscribe(()=>{
        // this.router.navigate(['/']);
      })

    }
  }

  @ViewChild('myModal') myModal: ElementRef | any;
  constructor() { }

  openModal() {
    this.myModal.nativeElement.style.display = 'block';
  }
  closeModal() {
    this.myModal.nativeElement.style.display = 'none';
  }
 
}


