import { CommonModule } from '@angular/common';
import { InputFieldComponent } from './input-field/input-field.component';
import { NgModule } from '@angular/core';
import { OtpInputComponent } from './otp-input.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [OtpInputComponent, InputFieldComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ], exports: [OtpInputComponent]
})
export class OtpInputModule { }
