// usuario.interface.ts
export interface Usuario {
  id: string;
  nombre: string;
  apellido: string;
  rol: string;
  email: string;
  estado: string;
  }

  export interface UsuarioResponse {
    content:  Usuario[]
    pageable: {}
     
    last: boolean
    totalElements: number,
    totalPages: number,
    size: number,
    number: number,
    sort: {},
    first: boolean,
    numberOfElements: number,
    empty: boolean
  }
  export interface UsuarioResponseOne {
    content:  Usuario
    pageable: {}
     
    last: boolean
    totalElements: number,
    totalPages: number,
    size: number,
    number: number,
    sort: {},
    first: boolean,
    numberOfElements: number,
    empty: boolean
  }
  