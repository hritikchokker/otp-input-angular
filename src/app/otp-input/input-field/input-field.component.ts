import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  QueryList,
  ViewChild,
  ViewChildren
} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css']
})
export class InputFieldComponent implements OnInit, AfterViewInit {

  // form!:FormGroup;
  @Input() otpList: any[] = []
  @Input() isOnlyNumbers = true;
  form!: FormGroup;
  finalValues: any;
  @ViewChildren('inp') inputRef: QueryList<ElementRef<HTMLInputElement>> | undefined;

  constructor(private _fb: FormBuilder) {

  }
  ngOnInit() {
    this.form = this._fb.group({});
    for (let i = 0; i <= this.otpList.length; i++) {

      const name: string = this.otpList[i];
      this.form.addControl(name, this._fb.control('', [Validators.required, Validators.maxLength(1)]))
      if (i > 0) {
        this.f[name].disable();
      }
    }
  }
  get f() { return this.form.controls };

  ngAfterViewInit() {
    this.inputRef?.forEach((el, index) => {

      // el.nativeElement.value =''
    })
    this.inputRef?.first.nativeElement.focus();
    this.formValueChanges();
  }
  handleUserInput(event: KeyboardEvent, item: string, input: HTMLInputElement, index: number) {
    const regex= /^[0-9]*$/
    console.log(regex.test(input.value),'input value')
    // if(!regex.test(input.value)){

    //   return;
    // }

    if (event.code === 'Backspace') {
      const el = this.inputRef?.find(element => element.nativeElement.name === this.otpList[index - 1]);
      if (index >= 1) {
        this.f[item].reset();
        this.f[item].disable();
        this.f[this.otpList[index - 1]].enable();
        el?.nativeElement.focus();
      }
    } else {
      if (!this.f[item].value || !this.f[item].value.trim()) {
        return;
      }
      this.form.patchValue({
        item: input.value
      })

      if (index === this.otpList.length - 1) {
        this.onSubmit();
        return;
      }
      const el = this.inputRef?.find(element => element.nativeElement.name === this.otpList[index + 1]);
      if (index !== this.otpList.length - 1) {
        this.f[item].disable();
      }
      this.f[this.otpList[index + 1]].enable();
      el?.nativeElement.focus();
    }
  }

  onSubmit() {
    this.finalValues = this.form.value;
    let finalresult = '';
    this.inputRef?.forEach(el=>{
      finalresult+=el.nativeElement.value;
    })

    this.finalValues = finalresult;
  }

  formValueChanges() {

  }


}
