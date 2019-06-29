import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators ,FormsModule,NgForm } from '@angular/forms';


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

    constructor(private fb: FormBuilder) {   
  
  
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

      // Executed When Form Is Submitted  
  onFormSubmit(form:NgForm)  
  {  
    console.log(form);  
  }  

}
