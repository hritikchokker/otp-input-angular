import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { OtpInputModule } from "./otp-input/otp-input.module";

import { AppComponent } from "./app.component";

@NgModule({
  imports: [BrowserModule, OtpInputModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
