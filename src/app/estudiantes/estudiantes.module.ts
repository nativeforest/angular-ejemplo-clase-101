import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardEstudianteComponent } from './components/card-estudiante/card-estudiante.component';
import { PaginaEstudianteComponent } from './pages/pagina-estudiante/pagina-estudiante.component';
import { SharedModule } from '../shared/shared.module';
import { EstudiantesRoutingModule } from './estudiantes-routing.module';



@NgModule({
  declarations: [
    CardEstudianteComponent,
    PaginaEstudianteComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    EstudiantesRoutingModule
  ],
  exports:[]
})
export class EstudiantesModule { }
