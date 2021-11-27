import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { PaginaEstudianteComponent } from './pages/pagina-estudiante/pagina-estudiante.component';


const estudiantesRoutes: Routes = [
  {
    path: '', component: PaginaEstudianteComponent,

  },

];

@NgModule({
  imports: [
    RouterModule.forChild(estudiantesRoutes)
  ],
  exports: [
    RouterModule,

  ],
  providers: []
})

export class EstudiantesRoutingModule {
}
