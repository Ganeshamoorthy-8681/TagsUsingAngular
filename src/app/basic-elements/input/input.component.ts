import { Component, Input, EventEmitter, Output } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {

  @Input() label: string = "Input"
  @Input() errorMessage: string = ""
  @Input() control!: FormControl;
  @Input() customError = "Please provide a valid Data";
  @Output() inputEvent = new EventEmitter<InputEvent>();

  formcontrol = new FormControl();

  inputEventEmit(event: Event) {
    this.inputEvent.emit((event as InputEvent));
  }
  
}
