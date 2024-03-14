import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { User } from 'src/app/shared/interfaces/user';
import { UserService } from 'src/app/shared/interfaces/user.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignuppageComponent implements OnInit {
  signupForm!: FormGroup;

  constructor(private us: UserService) { }

  ngOnInit(): void {
    this.signupForm= new FormGroup(
      {
        firstname: new FormControl('', [Validators.required]),
        lname: new FormControl('', [Validators.required]),
        gender: new FormControl('', [Validators.required]),
        roleType: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required]),
        mobile: new FormArray([
          new FormControl(null, [Validators.required]),
        ]),

        address: new FormGroup({
          street: new FormControl(null, [Validators.required]),
          city: new FormControl(null, [Validators.required]),
          state: new FormControl(null, [Validators.required]),
          pincode: new FormControl(null, [Validators.required]),
        }),
        password: new FormControl(null, [
          Validators.required,
          // this.createPasswordStrengthValidator,
        ]),
        confirmPassword: new FormControl(null, [Validators.required]),
      },
      {
        // validators: this.CompareFields('pwd', 'cpwd'),
      }
    );

  }

  get fname() {
    return this.signupForm.controls['fname'];
  }

  createPasswordStrengthValidator(): Validators {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      if (!value) {
        return null;
      }

      const hasUpperCase = /[A-Z]+/.test(value);

      const hasLowerCase = /[a-z]+/.test(value);

      const hasNumeriCase = /[0-9]+/.test(value);

      const passwordValid = hasUpperCase && hasLowerCase && hasNumeriCase;

      return !passwordValid ? { passwordStrength: true } : null;
    };
  }

  //  mobile numbers
  get mobilenNums(): FormArray {
    return this.signupForm.controls['mobilenums'] as FormArray;
  }
  // adding mobile number from control
  addMobileNum() {
    let mn = this.signupForm.controls['mobileNums'] as FormArray;
    mn.push(new FormControl(null, [Validators.required]));
  }

  // removing mobile number from control basedonn index
  removeMobileNum(index: number): void {
    let mn = this.signupForm.get('mobileNums') as FormArray;
    mn.removeAt(index);
  }
  // validating from array
  getValidity(i: number): any {
    let mn = this.signupForm.get('mobileNums') as FormArray;
    return mn.controls[i].invalid;
  }

  compareFields(controlName: string, matchingControl: string): any {
    return (fg: FormGroup) => {
      const c = fg.controls[controlName];
      const mc = fg.controls[matchingControl];
      if (mc.errors && !mc?.errors['match']) {
        return;
      }

      if (c.value !== mc.value) {
        return mc.setErrors({ match: true });
      } else {
        return mc.setErrors(null);
      }
    };
  }

  addressForm(): any {
    return this.signupForm.controls.address as FormGroup;
  }

  submit() {
    console.log(this.signupForm.value);

    let user: User = {
      fname: this.signupForm.value.fname,
      lname: this.signupForm.value.fname,
      fullname: this.signupForm.value.fname,
      gender: this.signupForm.value.fname,
      roleType: this.signupForm.value.fname,
      email: this.signupForm.value.fname,
      mobile: this.signupForm.value.fname,
      password: this.signupForm.value.fname,
      address: this.signupForm.value.fname,
    };

    console.log('new user:', user)

    let abc = { a: 'abc' }

    this.us.addUser(user).subscribe((res: any) => { console.log("added succesfully") }, (err: any) => { console.log("added succesfully") },)
  }
}
