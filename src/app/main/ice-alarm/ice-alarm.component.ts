import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-ice-alarm',
  templateUrl: './ice-alarm.component.html',
  styleUrls: ['./ice-alarm.component.scss']
})
export class IceAlarmComponent implements OnInit {
  title = 'Ice Alarm';
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

 constructor(private _formBuilder: FormBuilder) { }


 ngOnInit() {
  this.firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required]
  });
  this.secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required]
  });
}

}
