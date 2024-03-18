import { Component, ElementRef, ViewChild } from '@angular/core';
import {
  NgIf,
  NgFor,
  UpperCasePipe,
} from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    UpperCasePipe,
    ModalComponent,
    FormsModule
],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
    @ViewChild('dropdown',{static:false}) dropdown?:ElementRef;

    title:string = "Select a choose";
    type = [
      {name:'Open this select menu',value:0,slct:"selected"},
      {name:'button',value:1,slct:""},
      {name:'checkbox',value:2,slct:""},
      {name:'color',value:3,slct:""},
      {name:'date',value:4,slct:""},
      {name:'datetime-local',value:4,slct:""},
      {name:'email',value:5,slct:""},
      {name:'file',value:6,slct:""},
      {name:'hidden',value:7,slct:""},
      {name:'image',value:8,slct:""},
      {name:'month',value:9,slct:""},
      {name:'number',value:10,slct:""},
      {name:'password',value:11,slct:""},
      {name:'radio',value:12,slct:""},
      {name:'range',value:13,slct:""},
      {name:'reset',value:14,slct:""},
      {name:'search',value:15,slct:""},
      {name:'submit',value:16,slct:""},
      {name:'tel',value:17,slct:""},
      {name:'text',value:18,slct:""},
      {name:'time',value:19,slct:""},
      {name:'url',value:20,slct:""},
      {name:'week',value:21,slct:""}
    ]
    selectValue? :any;

  constructor(){

  }
   
  mdSelection(){
    this.selectValue = this.dropdown?.nativeElement.value; 
      console.log("Pulsado",this.selectValue);
  }
}
