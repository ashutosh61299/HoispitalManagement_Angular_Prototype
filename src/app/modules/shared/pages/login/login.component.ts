import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Users, checkLogin } from './loginDummyData';
import { Store } from '@ngrx/store';
import { login } from './store/login.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
  constructor(private store: Store<Users>) {}

  ngOnInit(): void {}

  login(event: Event) {
    event.preventDefault();
    console.log('login');
    this.store.dispatch(login());
    console.log(
      checkLogin(
        this.loginForm.controls['email'].value,
        this.loginForm.controls['password'].value
      )
    );
  }
}
