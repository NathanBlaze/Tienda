import { Injectable } from '@angular/core';
import { Subject, takeWhile } from 'rxjs';
import { Cart } from './cart.model';
import { Item } from './item-list/item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Cart;
  public amountObservable$: Subject<number>;

  constructor() {
    this.cart = new Cart();
    this.cart.items = [];
    this.amountObservable$ = new Subject<number>();
  }

  findItemIndex(id: number): number {
    return this.cart.items.findIndex((el) => el.id == id);
  }

  addItem(item: Item) {
    // let coincidencia = this.cart.items.find(data => data.id == item.id)
    // console.log(coincidencia)
    // if (typeof coincidencia === 'undefined') {
    //   this.cart.items.push(item);
    // } else {
    //   coincidencia.quantity += item.quantity
    // }   
    const itemIndex = this.findItemIndex(item.id);
    if (itemIndex === -1) {
      this.cart.items.push(item);
    }else {
      this.cart.items[itemIndex].quantity += item.quantity;
    }
    this.amountObservable$.next(this.cart.items.reduce((acumulado, data) => acumulado + data.quantity, 0));
  }

  getAmountItems(): number {
    if (this.cart.items === undefined) {
      return -1;
    }
    return this.cart.items.reduce((acumulado, item) => acumulado + item.quantity, 0);
  }

  getCart(): Cart {
    return this.cart;
  }

  deleteItemCart(item: Item): boolean {
    let resultado = false;
    let index = this.cart.items.findIndex(data => data.id == item.id);
    if (index !== -1) {
      this.cart.items.splice(index, 1); 
      resultado = true;     
    }     
    this.amountObservable$.next(this.cart.items.reduce((acumulado, data) => acumulado + data.quantity, 0));
    return resultado;
  }
}