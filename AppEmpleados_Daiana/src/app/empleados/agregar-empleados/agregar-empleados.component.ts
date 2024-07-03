import { Component } from '@angular/core';
import { Iempleado } from '../interfaces/empleado';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-agregar-empleados',
  templateUrl: './agregar-empleados.component.html',
  styleUrl: './agregar-empleados.component.css',
})
export class AgregarEmpleadosComponent {
  nuevo: Iempleado = {
    nombre: '',
    correo: '',
    telefono: 0,
    fechaNacimiento: '',
    sexo: '',
  };

  constructor(private empleadoService: EmpleadosService) {}

  agregarEmpleado() {
    if (this.nuevo.nombre.trim().length === 0) return;
    if (this.nuevo.correo.trim().length === 0) return;
    if (this.nuevo.telefono === 0) return;
    if (this.nuevo.fechaNacimiento.trim().length === 0) return;
    if (this.nuevo.sexo.trim().length === 0) return;

    this.empleadoService.agregarEmpleado(this.nuevo);

    console.log(this.nuevo);

    this.nuevo = {
      nombre: '',
      correo: '',
      telefono: 0,
      fechaNacimiento: '',
      sexo: '',
    };
  }
}
