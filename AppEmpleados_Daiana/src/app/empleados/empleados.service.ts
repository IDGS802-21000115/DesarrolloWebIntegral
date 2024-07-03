import { Injectable } from '@angular/core';
import { Iempleado } from './interfaces/empleado';

@Injectable({
  providedIn: 'root',
})
export class EmpleadosService {
  private _empleados: Iempleado[] = [];

  agregarEmpleado(empleado: Iempleado) {
    this._empleados.push(empleado);
  }

  get empleados(): Iempleado[] {
    return this._empleados;
  }

  constructor() {}
}
