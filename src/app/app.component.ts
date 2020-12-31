import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;
  otpInput = 5;
  showComp = true;
  setNewInput(num: any) {
    if (+num % 1 !== 0) {
      return;
    }
    this.showComp = false;
    this.otpInput = parseInt(num);
    setTimeout(() => {
      this.showComp = true;
    });
  }
}
