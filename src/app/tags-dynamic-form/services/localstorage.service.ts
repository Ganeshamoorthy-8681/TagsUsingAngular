import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }

  setData(value: object) {
    localStorage.setItem("resultJson", JSON.stringify(value));
  }
  
  getData() {
    let data = localStorage.getItem("resultJson");

    if (data) {
      return JSON.parse( data );
    } 
    else
      return null;
  }
}
