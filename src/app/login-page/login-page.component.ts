import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginResponse, PHONE_REGEX } from './login-page';
import { LoginService } from './login-page.service';
import { Globals } from '../common/globals';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  phoneNumber: string = '';
  username: string = '';
  errorMessage: string = '';
  successMessage: string = '';
  type: string = '';

  constructor(private router: Router, private service: LoginService) {
  }

  onPhoneChange(event: any) {
    this.phoneNumber = event.target.value;
  }

  onNameChange(event: any) {
    this.username = event.target.value;
  }

  onTypeChange(event: any) {
    this.type = event.target.value;
  }

  registerAction(event: any) {
    event.preventDefault();

    // phone validate
    if (this.phoneNumber == '' || this.phoneNumber == undefined) {
      this.errorMessage = 'lg_page_phone_required';
      return;
    }

    let regexTest = new RegExp(PHONE_REGEX);
    if (!regexTest.test(this.phoneNumber)) {
      this.errorMessage = 'lg_page_invalid_phone';
      return;
    }

    // case register, name & type is required
    if (this.username == '' || this.username == undefined) {
      this.errorMessage = 'lg_page_name_required';
      return;
    }

    if (this.type == '' || this.type == undefined) {
      this.errorMessage = 'lg_page_type_required';
      return;
    }

    // reset error message
    this.errorMessage = '';

    let body = this.buildRequestJson();

    this.service.register(body).subscribe(data => {
      this.handleRegisterResponse(data);
    });
  }

  handleRegisterResponse(data: any) {
    console.log(data);

    if(data.error) {
      this.errorMessage = data.message;
      return;
    }

    this.successMessage = 'lg_page_register_success';
    return;
  }

  loginAction(event: any) {
    event.preventDefault();

    // phone validate
    if (this.phoneNumber == '' || this.phoneNumber == undefined) {
      this.errorMessage = 'lg_page_phone_required';
      return;
    }

    let regexTest = new RegExp(PHONE_REGEX);
    if (!regexTest.test(this.phoneNumber)) {
      this.errorMessage = 'lg_page_invalid_phone';
      return;
    }
    
    // reset error message
    this.errorMessage = '';

    let body = this.buildRequestJson();
    this.service.login(body).subscribe(data => {
      this.handleLoginResponse(data);
    });
    
  }

  handleLoginResponse(data: any) {
    let res = new LoginResponse(data);

    if(res.getError) {
      this.errorMessage = res.getMessage;
      return;
    }

    Globals.loginResponse = res;

    if(res.getUserType == 'STORE') {
      Globals.isStoreLogin = true;
      this.router.navigate([`store`]);
    }
    else {
      Globals.isUserLogin = true;
      this.router.navigate([`user`]);
    }
  }

  buildRequestJson() {

    return {
      "phoneNumber": this.phoneNumber,
      "username": this.username,
      "userType": this.type
    }
  }
}
