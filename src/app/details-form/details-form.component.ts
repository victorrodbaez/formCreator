import { Component, Input, OnInit } from '@angular/core';
import { FORMS } from "../mocks/datas";
import {
  NgIf,
  NgFor,
  UpperCasePipe,
} from '@angular/common';
import {FormSpecial} from './interface/FORMDATA';
import { Console } from 'console';
import { ModalComponent } from "./modal/modal.component";


@Component({
    selector: 'app-details-form',
    standalone: true,
    templateUrl: './details-form.component.html',
    styleUrl: './details-form.component.scss',
    imports: [
        NgIf,
        NgFor,
        UpperCasePipe,
        ModalComponent
    ]
})

export class DetailsFormComponent implements OnInit {
  console = console.log("Pepe")
  formSpecial = FORMS;
  selectedForm?: FormSpecial;
  constructor() { 

  }
  getID(id:number){
    let value = 'input_'+id;
    return value;
  }
  onSelect(fS: FormSpecial): void {
    this.selectedForm = fS;
    
  }
  ngOnInit() {

  }
}
