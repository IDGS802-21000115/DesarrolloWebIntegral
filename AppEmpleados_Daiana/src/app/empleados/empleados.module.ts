import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaInicioComponent } from './pagina-inicio/pagina-inicio.component';
import { AgregarEmpleadosComponent } from './agregar-empleados/agregar-empleados.component';
import { ListadoEmpleadosComponent } from './listado-empleados/listado-empleados.component';
import { EmpleadosService } from './empleados.service';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    PaginaInicioComponent,
    AgregarEmpleadosComponent,
    ListadoEmpleadosComponent,
    HeaderComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [PaginaInicioComponent],
  providers: [EmpleadosService],
})
export class EmpleadosModule {}
