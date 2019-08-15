import { Component, Input,DoCheck } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ValidationService } from '../../validation.service';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent implements  DoCheck {

errorMessage: string;
 @Input() control: FormControl;
  constructor() { }


  ngDoCheck() {
    console.log('DoCheck..........');
    this.errorMessage = this.getErrorMessage();
  }

    getErrorMessage() {
    for (const propertyName in this.control.errors) {
    //  console.log('-------'+propertyName);
      if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
        console.log('??' + ValidationService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]));
        return ValidationService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
      }
    }
    return null;
  }

}
