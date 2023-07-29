import { NgModule } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { FormArrayComponent } from './form-array/form-array.component';
import { FormsComponent } from './forms/forms.component';
import { TagComponent } from './tag/tag.component';
import { TagviewComponent } from './tagview/tagview.component';
import { SubmittedDataComponent } from './submitted-data/submitted-data.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BasicElementsModule } from '../basic-elements/basic-elements.module';

@NgModule({
  declarations: [
    FormArrayComponent,
    FormsComponent,
    TagComponent,
    TagviewComponent,
    SubmittedDataComponent

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BasicElementsModule,
  ]
})
export class TagsDynamicFormModule { }
