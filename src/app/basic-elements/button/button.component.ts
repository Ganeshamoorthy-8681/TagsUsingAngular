import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent  {
  
  @Input() buttonType  = "button";
  @Input() buttonMode = "Default"
  @Input() isValid: boolean = true ;
  @Input() buttonColor  = "primary"
  @Output() clickEvent = new EventEmitter<MouseEvent>();

  clickEventEmit(event: MouseEvent) {
    this.clickEvent.emit(event)
  }
}
