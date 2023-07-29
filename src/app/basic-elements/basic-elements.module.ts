import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ButtonComponent, InputComponent],

  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
  exports:[ButtonComponent, InputComponent]
})
export class BasicElementsModule {}
