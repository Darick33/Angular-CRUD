import { Component, OnInit, inject } from '@angular/core';

import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { Usuario, UsuarioResponse } from './usuario.interface';
import { UsuarioService } from '../services/usuario.service';
import { RouterModule } from '@angular/router';
import UsuarioFormComponent from '../usuario-form/usuario-form.component';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [AsyncPipe, UsuarioComponent, RouterModule, UsuarioFormComponent],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export default class UsuarioComponent implements OnInit {
  public usuarioList$!: Observable<UsuarioResponse>;
  constructor( private usuarioService: UsuarioService,
    // private usuarioFormComponent: UsuarioFormComponent
  ){
    
  }
  openModal() {
    // this.usuarioFormComponent.openModal();
  }

  ngOnInit(): void {
    this.loadAll();
  }
  loadAll(){
    this.usuarioList$ = this.usuarioService.getPokemonList();
  }

  deleteUsuario(usuario : Usuario){
    this.usuarioService.delete(usuario.id)
    .subscribe(() => {
      this.loadAll();
    })
  }
  
}
