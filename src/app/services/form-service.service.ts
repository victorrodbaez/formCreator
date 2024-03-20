import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { FormSpecial } from "../interface/FORMDATA";
import { FORMS } from "../mocks/datas";

@Injectable({
  providedIn: 'root'
})

export class FormServiceService {

  constructor() { }
  
  getForms(): Observable<FormSpecial[]> {
    return of(FORMS);
  }
}
