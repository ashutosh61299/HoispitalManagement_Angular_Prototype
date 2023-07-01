import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { SharedRoutingModule } from './shared-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import {
  loginReducer,
  loginReducerFeatureKey,
} from './pages/login/store/login.reducer';

@NgModule({
  declarations: [LoginComponent, NavbarComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature(loginReducerFeatureKey, loginReducer),
  ],
})
export class SharedModule {}
