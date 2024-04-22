import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario, UsuarioResponse, UsuarioResponseOne } from '../usuario/usuario.interface';
import { environment } from '../../environments/environment.development';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  getPokemonList(): Observable<UsuarioResponse> {
    return this.http.get<UsuarioResponse>(`${environment.apiUrlBase}`, {headers: this.getHeaders()});
  }
  get(id: string): Observable<Usuario> {
    return this.http.get<Usuario>(`${environment.apiUrlBase}/${id}`, {headers: this.getHeaders()});
  }
  create(usuario: Usuario) :  Observable<Usuario> {
    return this.http.post<Usuario>(`${environment.apiUrlBase}`, usuario, {headers: this.getHeaders()});
  };
  update(id: string, usuario: Usuario) {
    return this.http.put<Usuario>(`${environment.apiUrlBase}`, usuario, {headers: this.getHeaders()});
  };
  delete(id: string) {
    return this.http.delete(`${environment.apiUrlBase}/${id}`, {headers: this.getHeaders()});
  };
  private jwtToken: string | null = null;

  setToken(token: string) {
    this.jwtToken = token;
  }
  private getHeaders(): HttpHeaders {
    this.jwtToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhcHBneW0iLCJzdWIiOiJzZWJvbGluMjAwNEBnbWFpbC5jb20iLCJpZCI6IjkzZDZhZWE3LWFmYmYtNDNmZC1iMGU2LTQyNWY5NjM4OTY0MSIsInJvbCI6IkFETUlOSVNUUkFET1IiLCJleHAiOjE3MTM3NTc0MTZ9.YLKmqsjO8wLm5txN0OybBDX44Mx2tiUo3llXoTZ7R5M";
    let headers = new HttpHeaders();
    if (this.jwtToken) {
      headers = headers.set('Authorization', `Bearer ${this.jwtToken}`);
    }
    return headers;
  }
}
