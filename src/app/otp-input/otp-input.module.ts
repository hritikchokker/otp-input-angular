import { CommonModule } from "@angular/common";

import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { InputFieldComponent } from "./input-field/input-field.component";
import { OtpInputComponent } from "./otp-input.component";

@NgModule({
  declarations: [OtpInputComponent, InputFieldComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [OtpInputComponent]
})
export class OtpInputModule {}
