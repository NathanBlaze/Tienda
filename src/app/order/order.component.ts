import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from '../cart.model';
import { CartService } from '../cart.service';
import { Shipping } from '../shipping.model';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  cart: Cart;

  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
    console.log(this.cart);
  }

  emitCancelClicked() {
    this.router.navigate(['home/']);
  }

  receiveOrder(shipping: Shipping): void {
    shipping.items = this.cart.items;
    console.log(shipping);
  }

}
