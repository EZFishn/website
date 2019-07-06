import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators ,FormsModule,NgForm, FormGroupDirective } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-ice-port',
  templateUrl: './ice-port.component.html',
  styleUrls: ['./ice-port.component.scss']
})
export class IcePortComponent implements OnInit {
  title = 'Order Form';
  regiForm: FormGroup;  
  FirstName:string='';  
  LastName:string='';  
  Address:string='';  
  DOB:Date=null;  
  Contact:string='';  
  Product:string='';  
  Email:string='';  
  Phone:string=''; 
  IsAccepted:number=0;  



    constructor(private fb: FormBuilder, private http: HttpClient, private _snackBar: MatSnackBar ) {   

    // To initialize FormGroup  
    this.regiForm = fb.group({  
      'FirstName' : [null, Validators.required],  
      'LastName' : [null, Validators.required],  
      'Address' : [null],  
      'DOB' : [null, Validators.required],  
      'Contact':[null, Validators.required],  
      'Product':[null, Validators.required],  
      'Email':[null, Validators.compose([Validators.required,Validators.email])], 
      'Phone': [null],
      'IsAccepted':[null]  
    });  
  
  } 

  ngOnInit() {

  }

    // On Change event of Toggle Button  
    onChange(event:any)  
    {  
      if (event.checked == true) {  
        this.IsAccepted = 1;  
      } else {  
        this.IsAccepted = 0;  
      }  
    }


  onFormSubmit(form: NgForm, formDirective: FormGroupDirective) {
    this.openSnackBar('Thanks from all of us at Ezfishn.com');
    formDirective.resetForm();
    this.reset();
  }  

  public sendMail() {
    let article = {
      name: 'test', _replyto: 'test@test.com',
      message: 'Java 8'
    };

    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let options = {
      headers: httpHeaders
    };

    console.log("send");


    return this.http.post("https://formspree.io/brian.hurley119911@gmail.com", article, options
    ).subscribe(res => console.log('res.json()'));
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, 'Success', {
      duration: 2000,
    });
  }

  reset() {
    this.regiForm.reset();
  }

}
