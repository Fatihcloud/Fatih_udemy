import { Component, Input, OnInit } from '@angular/core';
import { Customer } from './customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customers: Customer[] = [];
  selectedCustomer:Customer | undefined;
  @Input() city:string | undefined;

  ngOnInit(): void {
    this.customers = [
      { id: 1, firstName: "Fatih", lastName: "Bulut", age: 33 },
      { id: 2, firstName: "ahmet", lastName: "Bulut", age: 33 },
      { id: 3, firstName: "reis", lastName: "Bulut", age: 33 },
      { id: 4, firstName: "efe", lastName: "Bulut", age: 33 }
    ]
  }

  selectCustomer(customer: Customer) {
    this.selectedCustomer = customer
  }
}