import { Component, Input, OnInit } from '@angular/core';
import { Cart } from '../cart.model';
import { CartService } from '../cart.service';
import { Item } from '../item-list/item.model';

@Component({
  selector: 'app-detail-cart',
  templateUrl: './detail-cart.component.html',
  styleUrls: ['./detail-cart.component.css']
})
export class DetailCartComponent implements OnInit {
@Input() cart: Cart;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  deleteItem(item: Item): void {
    let restuladoBorrado = this.cartService.deleteItemCart(item);
    console.log(restuladoBorrado);
  }
    
}
