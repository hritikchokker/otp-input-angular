import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { InputFieldComponent } from './input-field/input-field.component';

@Component({
  selector: 'app-otp-input',
  templateUrl: './otp-input.component.html',
  styleUrls: ['./otp-input.component.css']
})
export class OtpInputComponent implements OnInit, AfterViewInit {


  totalFields = 5;
  @Input() set totalDigits(num: number) {
    for (let i = 0; i < num; i++) {
      this.loopTo.push(this.makeid(5))
    }

  };
  loopTo: any[] = []
  @Input() isOnlyNumbers = true;

  createForm() {

    // this.form = this._fb.group({});
  }
  controlsNameArr: string[] = [];


  handleValueChanges() {


  }
  ngOnInit(): void {
  }

  makeid(length: any) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  ngAfterViewInit() {
  }


}
