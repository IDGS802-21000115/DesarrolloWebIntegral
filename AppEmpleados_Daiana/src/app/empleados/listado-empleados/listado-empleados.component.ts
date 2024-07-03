import { Component } from '@angular/core';
import { EmpleadosService } from '../empleados.service';
import { Iempleado } from '../interfaces/empleado';

@Component({
  selector: 'app-listado-empleados',
  templateUrl: './listado-empleados.component.html',
  styleUrl: './listado-empleados.component.css',
})
export class ListadoEmpleadosComponent {
  constructor(private empleadoService: EmpleadosService) {}

  get empleados(): Iempleado[] {
    return this.empleadoService.empleados;
  }

  eliminar(empleado: Iempleado) {
    let elemento = this.empleados.indexOf(empleado);
    console.log(elemento);
    this.empleados.splice(elemento, 1);
  }
}
