import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { IkeyValueControlPair } from '../interfaces/form-array-model';
import { ValidationsService } from '../services/validations.service';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css'],
})
export class FormArrayComponent implements OnInit {
  constructor(private validations: ValidationsService) { }

  @Input() array!: FormArray;

  ngOnInit(): void {
    this.addFormGroup();
  }

  get arrayControls() {
    return this.array.controls as FormGroup<IkeyValueControlPair>[];
  }

  onInputChange(event: InputEvent, currentIndex: number) {
    if (
      !(
        this.arrayControls[currentIndex].controls.key.errors?.['required'] ||
        this.arrayControls[currentIndex].controls.key.errors?.['minlength'] ||
        this.arrayControls[currentIndex].controls.key.errors?.['pattern']
      )
    ) {
      this.validations.validate(this.arrayControls, event, currentIndex);
    }

  }

  createKeyValuePair(): FormGroup {
    return new FormGroup({
      key: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern('[A-Za-z0-9]+'),
      ]),
      value: new FormControl(null, [Validators.required]),
    });
  }

  addFormGroup() {
    this.array.push(this.createKeyValuePair());
  }

  removeKeyValuePair(event: MouseEvent, currentIndex: number) {
    this.array.removeAt(currentIndex);
    this.validations.removeCustomError();
  }
}
