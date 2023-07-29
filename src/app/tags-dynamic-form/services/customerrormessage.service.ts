import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
  
export class CustomerrormessageService {

   private customErrorMessages = {
    required: "Field Cannot Be Empty",
    minlength: "Key must be greater than Three Characters",
    pattern: "Only Alpha Numeric Characters are allowed",
    unique: "Please Provide Unique Value",
  }

  getCustomErrorMessage = () => {
    return this.customErrorMessages;
 }
}
