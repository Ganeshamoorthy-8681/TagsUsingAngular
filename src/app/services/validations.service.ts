import { Injectable } from "@angular/core";
import { FormArray, FormGroup } from "@angular/forms";

@Injectable()

export class ValidationsService {

  //properties used for validations
  currentValue!: string;
  formGroupList: FormGroup[] = [];
  currentIndex: number = 0;
  errorFormGroupList!: FormGroup[];
  formElement!: FormGroup;
  unique!: boolean
  
  //method that check the uniqueness of key and  set and remove errors accordingly
  validate(
    formElement: FormGroup,
    event: Event,
    currentIndex: number, 
    errorFormGroupList: FormGroup[]
  ) {
    this.currentValue = (event.target as HTMLInputElement).value;
    this.formGroupList = (formElement.controls["keyValueArr"] as FormArray)
      .controls as FormGroup[];
    this.errorFormGroupList = errorFormGroupList;
    this.currentIndex = currentIndex;
    this.formGroupList;
    this.formElement = formElement;
    this.isUnique();
  }

  //checks the unique of key
  isUnique(): void {

    let noOfOccurence: number = 0;

    for (let formGroup of this.formGroupList) {
      if (formGroup.value.key == this.currentValue) {
        noOfOccurence++;
      }
    }

    if (noOfOccurence <= 1) 
      this.removeCustomError();
    else 
      this.setCustomError();
    
  }

  //adds the error code to the form group
  setCustomError() {
      let errorFormGroup: FormGroup = (
        this.formElement.controls["keyValueArr"] as FormArray<FormGroup>
      ).controls[this.currentIndex];
      errorFormGroup.controls['key'].setErrors({ unique: true });
      this.errorFormGroupList.push(errorFormGroup); 
}

  //removes the error code if the error is resolved
  removeCustomError() {
    let noOfOccurence: number = 0;
    
    if (this.errorFormGroupList) {
      for (let errorFormGroup of this.errorFormGroupList) {
        for (let formGroup of this.formGroupList) {
          if (errorFormGroup.value.key === formGroup.value.key) {
            noOfOccurence++;
          }
          // console.log(formGroup, errorFormGroup);
        }
        if ( noOfOccurence <= 1 ) errorFormGroup.controls['key'].setErrors(null);
        noOfOccurence = 0;
      }
    }
  }
}