import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Shipping } from '../shipping.model';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
public shipping: Shipping;
@Output() sendShipping: EventEmitter<Shipping> = new EventEmitter<Shipping>();

  constructor() { }

  ngOnInit(): void {
    this.shipping = new Shipping();
  }

  confirmOrder(): void {
    this.sendShipping.emit(this.shipping);
  }

}
