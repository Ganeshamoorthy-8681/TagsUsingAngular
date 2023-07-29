import { Injectable } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { IkeyValueControlPair } from '../interfaces/form-array-model';

@Injectable({
  providedIn: 'root',
})
export class ValidationsService {
  //properties used for validations
  currentValue!: string;
  formGroupList: FormGroup[] = [];
  currentIndex: number = 0;
  errorFormGroupList: FormGroup[] = [];
  formElement!: FormGroup;
  unique!: boolean;

  //method that check the uniqueness of key and  set and remove errors accordingly
  validate(
    formElement: FormGroup<IkeyValueControlPair>[],
    event: Event,
    currentIndex: number
  ) {
    this.currentValue = (event.target as HTMLInputElement).value;
    this.formGroupList = formElement;
    this.currentIndex = currentIndex;
    this.formGroupList;
    this.unique = this.isUnique();
    this.setCustomError();
    this.removeCustomError();
  }

  //checks the unique of key
  isUnique(): boolean {
    let noOfOccurence: number = 0;
    for (let formGroup of this.formGroupList) {
      if (formGroup.value.key == this.currentValue) {
        noOfOccurence++;
      }
    }
    if (noOfOccurence <= 1) return true
    else return false
  }

  //adds the error code to the form group
  setCustomError() {
    if (!this.unique) {
      let errorFormGroup = this.formGroupList[this.currentIndex];
      errorFormGroup.controls['key'].setErrors({ unique: true });
      this.errorFormGroupList.push(errorFormGroup);
    }
  }

  //removes the error code if the error is resolved
  removeCustomError() {
    let noOfOccurence: number = 0;
    if (this.errorFormGroupList && this.currentValue) {
      for (let errorFormGroup of this.errorFormGroupList) {
        for (let formGroup of this.formGroupList) {
          if (errorFormGroup.value.key === formGroup.value.key) {
            noOfOccurence++;
          }
          // console.log(formGroup, errorFormGroup);
        }
        if (noOfOccurence <= 1) errorFormGroup.controls['key'].setErrors(null);
        noOfOccurence = 0;
      }
    }
  }
}
