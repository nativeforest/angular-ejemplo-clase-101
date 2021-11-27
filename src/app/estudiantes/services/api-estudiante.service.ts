import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiEstudianteService {

  constructor(private http:HttpClient) { }
  getEstudiantesPosts(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts')



  }
}
