import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Formulario01Component } from './components/formulario01/formulario01.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { TablaComponent } from './components/tabla/tabla.component';



@NgModule({
  declarations: [
    Formulario01Component,
    AccordionComponent,
    TablaComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[ Formulario01Component, AccordionComponent,TablaComponent]
})
export class SharedModule { }
