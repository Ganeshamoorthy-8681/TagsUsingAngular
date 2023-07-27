import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }

  setData(value: object) {
    localStorage.setItem("resultJson", JSON.stringify(value));
  }
  
}
