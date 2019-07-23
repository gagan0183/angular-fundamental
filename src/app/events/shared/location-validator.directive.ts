import { Directive } from '@angular/core';
import { Validator, FormGroup } from '@angular/forms';

@Directive({
  selector: '[validateLocation]'
})
export class LocationValidate implements Validator {
  validate(formGroup: FormGroup) {
    let addressControl = formGroup.controls['address'];
    let cityControl = formGroup.controls['city'];
    let countryControl = formGroup.controls['country'];
    let onlineurlControl = (<FormGroup>formGroup.root).controls['onlineUrl'];
    if (
      (addressControl &&
        addressControl.value &&
        cityControl &&
        cityControl.value &&
        countryControl &&
        countryControl.value) ||
      (onlineurlControl && onlineurlControl.value)
    ) {
      return null;
    } else {
      return { validateLocation: false };
    }
  }
}
