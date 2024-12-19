import { Component, OnInit } from '@angular/core';
import { ClientesService } from './services/clientes.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'mi-pryecto-PLG';

  clientes: any[] = [];
  cargando = true;

  constructor(private clientesService: ClientesService) {}


  ngOnInit(): void {
    
    this.clientesService.obtenerClientes().subscribe({
      next: (data) => {
        console.log(data);
        this.clientes = data.Result.Clients;
        this.cargando = false;
      },
      error: (err) => {
        console.error('Error al obtener clientes', err);
        this.cargando = false;
      }
    });

  }
  
}



