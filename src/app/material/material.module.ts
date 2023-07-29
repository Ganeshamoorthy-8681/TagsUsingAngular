import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button'
const material = [
  MatInputModule,
  MatButtonModule
]

@NgModule({
  exports: [
    material
  ]
  
})
export class MaterialModule { }
