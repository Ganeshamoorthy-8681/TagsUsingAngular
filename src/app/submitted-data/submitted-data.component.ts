import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-submitted-data',
  templateUrl: './submitted-data.component.html',
  styleUrls: ['./submitted-data.component.css']
})
export class SubmittedDataComponent implements OnInit {

 
  formData!: {
    keyValueArr: Array<{key:string,value:string}>;
  }; 
  
  ngOnInit(): void {
    let data = localStorage.getItem('resultJson');
    if (data)
      this.formData = JSON.parse(data);
  }


  

  

}
