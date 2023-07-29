import { Component, OnInit } from '@angular/core';
import { IkeyValuePair } from '../interfaces/form-array-model';
import { LocalstorageService } from '../services/localstorage.service';

@Component({
  selector: 'app-tagview',
  templateUrl: './tagview.component.html',
  styleUrls: ['./tagview.component.css']
})
export class TagviewComponent implements OnInit {

  constructor(private localStorage : LocalstorageService) { }

  formData!: {
    keyValuePairArray: Array<IkeyValuePair>;
  };

  ngOnInit(): void {
    this.formData = this.localStorage.getData();
  }
}
