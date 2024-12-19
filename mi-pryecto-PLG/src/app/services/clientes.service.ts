import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Cliente {
  nombre: string;
  correo: string;
  telefono: string;
  pais: string;
}

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor() {}

  obtenerClientes(): Observable<Cliente[]> {
    // Simulando los datos de la API
    const clientesSimulados: Cliente[] = [
      { nombre: 'Juan Pérez', correo: 'juan.perez@gmail.com', telefono: '56912345678', pais: 'Chile' },
      { nombre: 'Ana Gómez', correo: 'ana.gomez@yahoo.com', telefono: '56987654321', pais: 'Argentina' },
      { nombre: 'Carlos Rivera', correo: 'carlos.rivera@hotmail.com', telefono: '56911223344', pais: 'México' },
      { nombre: 'Sofía Martínez', correo: 'sofia.martinez@gmail.com', telefono: '56999887766', pais: 'Perú' },
      { nombre: 'Luis García', correo: 'luis.garcia@gmail.com', telefono: '56944556677', pais: 'España' },
      { nombre: 'María López', correo: 'maria.lopez@gmail.com', telefono: '56922334455', pais: 'Colombia' },
      { nombre: 'Pedro Sánchez', correo: 'pedro.sanchez@gmail.com', telefono: '56966778899', pais: 'Chile' },
      { nombre: 'Laura Torres', correo: 'laura.torres@gmail.com', telefono: '56977889900', pais: 'Venezuela' },
      { nombre: 'Andrés Herrera', correo: 'andres.herrera@gmail.com', telefono: '56933445566', pais: 'Uruguay' },
      { nombre: 'Gabriela Castro', correo: 'gabriela.castro@gmail.com', telefono: '56955667788', pais: 'Bolivia' },
    ];

    // Retorna los datos como un Observable
    return of(clientesSimulados);
  }
}
