import { Component, OnInit } from "@angular/core";
import {
  FormArray,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { ValidationsService } from "../services/validations.service";
import { RouterService } from "../services/router.service";
import { LocalstorageService } from "../services/localstorage.service";
@Component({
  selector: "app-forms",
  templateUrl: "./forms.component.html",
  styleUrls: ["./forms.component.css"],
  providers: [ValidationsService]
})
export class FormsComponent implements OnInit {

  formElement!: FormGroup;
  errorFormGroupList: FormGroup[] = [];
  isFormValid!: boolean;

  //dependency injecting (calling validation logic as service here)
  constructor(private Validations: ValidationsService, private route: RouterService , private localStorage:LocalstorageService ) { }

  //getter used in template to get the form array
  get keyValueArray() {
    return this.formElement.get("keyValueArr") as FormArray;
  }

  //method is called on change event
  onInputChange(event: Event, currentIndex: number) {

    if (!( (this.keyValueArray.controls[currentIndex] as FormGroup).controls['key'].errors?.['minlength'] ||
           (this.keyValueArray.controls[currentIndex] as FormGroup).controls['key'].errors?.['pattern'] || 
           (this.keyValueArray.controls[currentIndex] as FormGroup).controls["key"].errors?.['required'])
       )
    {
     this.Validations.validate(
        this.formElement,
        event,
        currentIndex,
        this.errorFormGroupList
      );
    }

    //update the status of form 
    this.isFormValid = this.formElement.valid;
    // console.log(this.isFormValid, this.formElement)
  }

  // formelement is initialized
  ngOnInit(): void {
    this.formElement = new FormGroup({
      keyValueArr: new FormArray([this.createKeyValuePair()]),
    });
  }

  // method creates the new form group
  createKeyValuePair(): FormGroup {
    return new FormGroup({
      key: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.pattern("[A-Za-z0-9]+")]),
      value: new FormControl(null,[Validators.required]),
    });
  }

  //method adds the form group
  addKeyValuePair() {
    if (this.formElement.valid) {
      (<FormArray>this.formElement.controls["keyValueArr"]).push(
        this.createKeyValuePair()
      );
    }
  }

  //method  removes the form group
  removeKeyValuePair(index: number) {
    this.keyValueArray.removeAt(index);
    this.Validations.removeCustomError();

    //update the form status
    this.isFormValid = this.formElement.valid;
  }

  //method  called when submitted
  onSubmit() {
    console.log(this.formElement.value);
    this.localStorage.setData(this.formElement.value);
    this.formElement.reset();
    this.route.navigateToPath("submitted-data");
  }
}


//using observables
// let formGroup = this.formElement.get('keyValueArr') as FormArray;
// formGroup.controls.forEach((control, index) => {
// control.valueChanges.subscribe((val) => {
// console.log(val, index);
// })
