import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IkeyValueControlPair } from '../interfaces/form-array-model';
import { ValidationErrors } from '@angular/forms';
import { CustomerrormessageService } from '../services/customerrormessage.service';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent {

  constructor(private customErrorService: CustomerrormessageService) { }

  @Input() controls!: IkeyValueControlPair;
  @Output() inputChangeEventForKeyField = new EventEmitter<InputEvent>();

  errorMessages = this.customErrorService.getCustomErrorMessage();

  //Bindin in template
  customErrorMessage: string = this.errorMessages.required;

  onInputChange(event: InputEvent) {
    this.inputChangeEventForKeyField.emit(event);
    this.customErrorMessage = this.getTypeOfErrorMessage(this.controls.key.errors);
  }

  getTypeOfErrorMessage(errors: ValidationErrors | null): string {

    if (errors?.['minlength'])
      return this.errorMessages.minlength;

    else if (errors?.['pattern'])
      return this.errorMessages.pattern;

    else if (errors?.['unique'])
      return this.errorMessages.unique;

    else
      return this.errorMessages.required;
  }
}