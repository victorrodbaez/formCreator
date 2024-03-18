import { Routes } from '@angular/router';
import { DetailsFormComponent } from './details-form/details-form.component'; 

/* export const routes: Routes = []; */
export const routes: Routes = [
    { path: '', redirectTo: '/mainForm', pathMatch: 'full' },
    { path: 'mainForm', component: DetailsFormComponent }
  ];