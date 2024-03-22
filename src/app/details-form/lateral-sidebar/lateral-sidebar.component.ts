import { Component, ElementRef, ViewChild, Output, EventEmitter  } from '@angular/core';
import {
  NgIf,
  NgFor,
  UpperCasePipe,
} from '@angular/common';
import {FormSpecial} from '../../interface/FORMDATA'; 
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-lateral-sidebar',
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    UpperCasePipe,
    FormsModule
  ],
  templateUrl: './lateral-sidebar.component.html',
  styleUrl: './lateral-sidebar.component.scss'
})
export class LateralSidebarComponent {

    @ViewChild('dropdownLateral',{static:false}) dropdown?:ElementRef;

    @Output() formEvent = new EventEmitter<any>();

    title:string = "Select a choose";

    type = [
      {name:'Open this select menu',value:0,slct:"selected"},
      {name:'button',value:1,slct:""},
      {name:'checkbox',value:2,slct:""},
      {name:'color',value:3,slct:""},
      {name:'date',value:4,slct:""},
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
      {name:'week',value:21,slct:""},
      {name:'datetime-local',value:22,slct:""}
    ]

    selectValue? :any;

  constructor(){

  }
  
  mdSelection(){
    this.selectValue = parseInt(this.dropdown?.nativeElement.value); 
    let elem = this.type.find((e)=> e.value === this.selectValue);
    if(elem === undefined) {}
    else if(elem.value === 0) {
      return
    } 
    //{ id:2, name: 'Boton', values:'',type:'button' }
    let resp: FormSpecial ={ id:0, name: '', values:'',type:elem === undefined ? '' : elem.name } ;
    console.log("Pulsado",this.selectValue, elem);
    this.formEvent.emit(resp);
    const offcanvasElementList:NodeListOf<HTMLElement> = document.querySelectorAll('.offcanvas');
    if(offcanvasElementList === null){
      console.log("empty element")
    } else{
      let element: HTMLElement = offcanvasElementList[0].querySelector('button.btn-close') as HTMLElement;
          element.click();
    }
  }
}
