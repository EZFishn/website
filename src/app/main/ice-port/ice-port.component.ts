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
  Address:string='';  
  DOB:Date=null;  
  Contact:string='';  
  Product:string='';  
  Email:string='';  
  Phone:string=''; 
  IsAccepted:number=0;  



    constructor(private fb: FormBuilder, private http: HttpClient, private _snackBar: MatSnackBar ) {   

    // // To initialize FormGroup  
    // this.regiForm = fb.group({  
    //   'FirstName' : [null, Validators.required],  
    //   'LastName' : [null, Validators.required],  
    //   'Address' : [null],  
    //   'DOB' : [null, Validators.required],  
    //   'Contact':[null, Validators.required],  
    //   'Product':[null, Validators.required],  
    //   'Email':[null, Validators.compose([Validators.required,Validators.email])], 
    //   'Phone': [null],
    //   'IsAccepted':[null]  
    // });  

    this.regiForm = fb.group({  
      'FirstName' : [null],  
      'LastName' : [null],  
      'Address' : [null],  
      'DOB' : [null], 
      'Contact':[null],
      'Product':[null], 
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
    this.sendMail();
    this.openSnackBar('Thanks from all of us at Ezfishn.com');
    formDirective.resetForm();
    this.reset();
  }  

  public sendMail() {
    var firstNameValue = this.regiForm.value.FirstName;
    var lastNameValue = this.regiForm.value.LastName;
    var addressValue = this.regiForm.value.Address;
    var dOBValue = this.regiForm.value.DOB;
    var contactValue = this.regiForm.value.Contact;
    var productValue = this.regiForm.value.Product;
    var emailValue = this.regiForm.value.Email;
    var phoneValue = this.regiForm.value.Phone;
    var isAcceptedValue = this.regiForm.value.IsAccepted;
    var isAcceptedValueText = null

    if (isAcceptedValue) {
      isAcceptedValueText = 'Interested To Make Purchase!'
    }  else {
      isAcceptedValueText = 'Not Interested To Make Purchase.'
    }

    var html = '<html><body>'
    html += '<h1> ' + 'Name: ' + ' </h1><p> ' + firstNameValue + ' ' + lastNameValue + ' </p>'
    html += '<h1> ' + 'Address: ' + ' </h1><p> ' + addressValue + ' </p>'
    html += '<h1> ' + 'Date: ' + ' </h1><p> ' + dOBValue + ' </p>'
    html += '<h1> ' + 'Product: ' + ' </h1><p> ' + productValue + ' </p>'
    html += '<h1> ' + 'Contact Via: ' + ' </h1><p> ' + contactValue + ' </p>'
    html += '<h1> ' + 'Phone: ' + ' </h1><p> ' + phoneValue + ' </p>'
    html += '<h1> ' + 'Email Address: ' + ' </h1><p> ' + emailValue + ' </p>'
    html += '<h1> ' + 'Interested To Buy: ' + ' </h1><p> ' + isAcceptedValueText + ' </p>'
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
