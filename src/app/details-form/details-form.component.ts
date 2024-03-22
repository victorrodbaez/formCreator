import { Component, Input, OnInit } from '@angular/core';
import { FormServiceService } from "../services/form-service.service";
/* import { FORMS } from "../mocks/datas"; */
import {
  NgIf,
  NgFor,
  UpperCasePipe,
} from '@angular/common';
import {FormSpecial} from '../interface/FORMDATA'; 
import { Console } from 'console';
import { ModalComponent } from "./modal/modal.component";
import { LateralSidebarComponent } from "./lateral-sidebar/lateral-sidebar.component";

@Component({
    selector: 'app-details-form',
    standalone: true,
    templateUrl: './details-form.component.html',
    styleUrl: './details-form.component.scss',
    imports: [
        NgIf,
        NgFor,
        UpperCasePipe,
        ModalComponent,
        LateralSidebarComponent
    ]
})

export class DetailsFormComponent implements OnInit {
  console = console.log("Pepe");
  forms: FormSpecial[] = [];
  selectedForm: FormSpecial | undefined;

  constructor(private FormServiceService: FormServiceService) { 
  }
  getID(id:number){
    let value = 'input_'+id;
    return value;
  }
  onSelect(fS: FormSpecial): void {
    this.selectedForm = fS;
    
  }
  addForms(obj?:FormSpecial){
    if(obj === null){
      return console.log("Error");
    } else{
      let id_ = 0;
       this.forms.forEach(e=>{if(e.id>=id_){id_ = e.id + 1;}})
      let elem = { id:id_, 
        name: obj === undefined ? '' : obj.name, 
        values: obj=== undefined ? '' : obj.values, 
        type:obj=== undefined ? '' : obj.type };
      this.forms.push(elem)
      console.log(this.forms);

    }
  }
  getForms(): void {
    this.FormServiceService.getForms()
        .subscribe(i => this.forms = i);
  }
  ngOnInit() {
    this.getForms();
  }
  sendForm(event:any){
    console.log("elemento",event);
    this.addForms(event)
    //return event;
  }
}
