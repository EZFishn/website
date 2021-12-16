import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-ice-alarm',
  templateUrl: './ice-alarm.component.html',
  styleUrls: ['./ice-alarm.component.scss']
})
export class IceAlarmComponent implements OnInit {
  title = 'Producer';
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

 constructor(private _formBuilder: FormBuilder) { }


  
 links : Array<string>;

 ngOnInit(){}

}
