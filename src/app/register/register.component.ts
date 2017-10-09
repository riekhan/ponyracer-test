import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pr-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formBuilder: FormBuilder;
  userForm: FormGroup;
  loginCtrl: FormControl;
  birthYearCtrl: FormControl;
  passwordForm: FormGroup;
  passwordCtrl: FormControl;
  confirmPasswordCtrl: FormControl;

  constructor(fb: FormBuilder) {}

   static passwordMatch(control: FormGroup) {
    const password = control.get('password').value;
    const confirmPassword = control.get('confirmPassword').value;
    return password !== confirmPassword ? { matchingError: true } : null;
  }

  static validYear(year) {
    const currentYear = new Date().getFullYear();
    return year > currentYear && year < 1900 ? {invalidYear: true} : null;
  }

  ngOnInit() {
    this.loginCtrl = this.formBuilder.control('', [Validators.required, Validators.minLength(3)]);
    this.birthYearCtrl = this.formBuilder.control('', [Validators.required, RegisterComponent.validYear]);
    this.passwordCtrl = this.formBuilder.control('', Validators.required);
    this.confirmPasswordCtrl = this.formBuilder.control('', Validators.required);

    this.passwordForm = this.formBuilder.group({
      password: this.passwordCtrl,
      confirmPassword: this.confirmPasswordCtrl
    }, {validator: RegisterComponent.passwordMatch});

    this.userForm = this.formBuilder.group({
      login: this.loginCtrl,
      password: this.passwordForm,
      birthYear: this.birthYearCtrl
    });
  }

  register() {

  }
}
