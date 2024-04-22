import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import UsuarioComponent from './usuario/usuario.component';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UsuarioComponent, MatDialogModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CRUD';
}
