import { Injectable } from '@angular/core';
import {AbstractControl} from '@angular/forms';

@Injectable()
export class ValidationService {

  constructor() { }
  static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
    let config = {
      'required': 'Required',
      'maxlength': `Maxmimum length ${validatorValue.requiredLength}`,
      'invalidCodeNumber': 'Is invalid Code Number.Should\'ve 2 letters followed by 2 numbers.',
      'invalidEmailAddress': 'Invalid email address',
      'invalidPassword': 'Invalid password. Password must be at least 6 characters long, and contain a number.',
      'minlength': `Minimum length ${validatorValue.requiredLength}`
    };

    return config[validatorName];
  }

  static codeNumberValidator(control :  AbstractControl) {
    // Visa, MasterCard, American Express, Diners Club, Discover, JCB
    if (control.value.match(/[a-zA-Z]{2}\d{2}/)) {
      return null;
    } else {
      return { 'invalidCodeNumber': true };
    }
  }
}
