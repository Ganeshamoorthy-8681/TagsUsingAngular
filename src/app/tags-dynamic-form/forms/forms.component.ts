import { Component, OnInit } from "@angular/core";
import {
  FormArray,
  FormGroup,
} from "@angular/forms";
import { ValidationsService } from "../services/validations.service";
import { RouterService } from "../services/router.service";
import { LocalstorageService } from "../services/localstorage.service";
import { IkeyValuePair } from "../interfaces/form-array-model";

@Component({
  selector: "app-forms",
  templateUrl: "./forms.component.html",
  styleUrls: ["./forms.component.css"],
  providers: [ValidationsService]
})

export class FormsComponent implements OnInit {


  constructor(private router: RouterService, private localstorage: LocalstorageService) { }

  formElement!: FormGroup<any>;

  ngOnInit(): void {
    this.formElement = new FormGroup({
      keyValuePairArray: new FormArray([])
    })
  }

  get keyvalueArray() {
    return (this.formElement.get('keyValuePairArray') as FormArray)
  }

  get localStoredData() {
    return this.localstorage.getData();
  }

  onsubmit() {
    this.localstorage.setData(this.formElement.value);
    this.formElement.reset();
    this.router.navigateToPath("data");
  }

}