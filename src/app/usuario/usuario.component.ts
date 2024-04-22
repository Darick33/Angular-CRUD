import { Component, OnInit, inject } from '@angular/core';

import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { Usuario, UsuarioResponse } from './usuario.interface';
import { UsuarioService } from '../services/usuario.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [AsyncPipe, UsuarioComponent, RouterModule, ],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export default class UsuarioComponent implements OnInit {
  public usuarioList$!: Observable<UsuarioResponse>;
  constructor( private usuarioService: UsuarioService){
    
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
