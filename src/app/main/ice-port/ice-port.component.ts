import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators ,FormsModule,NgForm, FormGroupDirective } from '@angular/forms';
import { HttpClient, HttpHeaders,HttpResponse, HttpRequest } from '@angular/common/http';
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
  Contact:string='';  
  Product:string='';  
  Email:string='';  
  Phone:string=''; 
  IsAccepted:number=0;  



    constructor(private fb: FormBuilder, private http: HttpClient, private _snackBar: MatSnackBar ) {   

    this.regiForm = fb.group({  
      'FirstName' : [null, Validators.compose([Validators.required,Validators.required])],  
      'LastName' : [null],  
      'Contact':[null],
      'Product':[null], 
      'Email':[null], 
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
    this.sendMail();
    this.openSnackBar('Thanks from all of us at JayParkerProductions.com');
    formDirective.resetForm();
    this.reset();
  }  

  public sendMail() {
    var firstNameValue = this.regiForm.value.FirstName;
    var lastNameValue = this.regiForm.value.LastName;
    var contactValue = this.regiForm.value.Contact;
    var productValue = this.regiForm.value.Product;
    var emailValue = this.regiForm.value.Email;
    var phoneValue = this.regiForm.value.Phone;
    var isAcceptedValue = this.regiForm.value.IsAccepted;
    var isAcceptedValueText = null

    if (isAcceptedValue) {
      isAcceptedValueText = 'Interested To Hire!'
    }  else {
      isAcceptedValueText = 'Not Interested To Hire.'
    }

    var html = '<html><body>'
    html += '<h1> ' + 'Name: ' + ' </h1><p> ' + firstNameValue + ' ' + lastNameValue + ' </p>'
    html += '<h1> ' + 'Product: ' + ' </h1><p> ' + productValue + ' </p>'
    html += '<h1> ' + 'Contact Via: ' + ' </h1><p> ' + contactValue + ' </p>'
    html += '<h1> ' + 'Phone: ' + ' </h1><p> ' + phoneValue + ' </p>'
    html += '<h1> ' + 'Email Address: ' + ' </h1><p> ' + emailValue + ' </p>'
    html += '<h1> ' + 'Interested To Hire: ' + ' </h1><p> ' + isAcceptedValueText + ' </p>'
    html += '</body></html>'

    let data = JSON.stringify({
      'description': html
  })

    let Corsheaders = new HttpHeaders({
      'Content-Type': 'application/json' });
  let options = { headers: Corsheaders };
  

    return this.http.post("https://h94cybnya3.execute-api.us-west-2.amazonaws.com/SandBox/", data, options
    ).subscribe(res => console.log('Secnod'));
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, 'Success', {
      duration: 5000,
    });
  }

  reset() {
    this.regiForm.reset();
  }

}
