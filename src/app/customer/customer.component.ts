import { Component, OnInit } from '@angular/core';
import { CustomerService  } from "../shared/customer.service";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

constructor(private customerService: CustomerService) { }
  submitted: boolean;
  formControls = this.customerService.form.controls;
  
  ngOnInit() {
  }

  
  onSubmit(){
    // here we said that if the value of the hidden input is null and it's by default null we will insert a new customer and when the $key value is not null we will update an existing data
            if(this.customerService.form.get("$key").value == null ){
                    // insert
            } else {
                    //update
            }
    }

}
