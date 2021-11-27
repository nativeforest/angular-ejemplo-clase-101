import { Component, OnInit } from '@angular/core';
import { ApiGenericService } from 'src/app/shared/services/api-generic.service';
import {ApiEstudianteService} from 'src/app/estudiantes/services/api-estudiante.service'

@Component({
  selector: 'app-pagina-estudiante',
  templateUrl: './pagina-estudiante.component.html',
  styleUrls: ['./pagina-estudiante.component.scss']
})
export class PaginaEstudianteComponent implements OnInit {
  data=[];
  constructor(private apiEstudiantes:ApiEstudianteService) { }

  ngOnInit(): void {
   this.apiEstudiantes.getEstudiantesPosts().subscribe((data:any)=>{
     this.data = data
   })
  }

}
