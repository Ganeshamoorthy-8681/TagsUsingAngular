import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './layout/page-not-found/page-not-found.component';
import { FormsComponent } from './tags-dynamic-form/forms/forms.component';
import { SubmittedDataComponent } from './tags-dynamic-form/submitted-data/submitted-data.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'forms',
    pathMatch: 'full',
  },

  {
    path: 'forms',
    component: FormsComponent

  },

  {
    path: 'data',
    component:SubmittedDataComponent
  },

  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
