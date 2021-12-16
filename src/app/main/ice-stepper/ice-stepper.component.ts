import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-ice-stepper',
  templateUrl: './ice-stepper.component.html',
  styleUrls: ['./ice-stepper.component.scss']
})
export class IceStepperComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  title = 'DJ';
  
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {}

}
