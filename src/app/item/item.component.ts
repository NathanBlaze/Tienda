import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ItemListServices } from '../item-list/item-list.services';
import { Item } from '../item-list/item.model';
import { Router } from '@angular/router';
import { Cart } from '../cart.model';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() item: Item; 
  @Output() descriptionChanged: EventEmitter<Item> = new EventEmitter<Item>();
  @Output() deleteClick: EventEmitter<number> = new EventEmitter<number>();
  
  constructor(private service: ItemListServices, private router: Router, private cartService: CartService) { }

  ngOnInit(): void {
  }

  modoEdicion(item: Item) {
    item.editDescription = true;
  }

  isSelected(item: Item) {
    item.selected = !item.selected;
  }

  checkQuantity(item: Item) {

    if (item.quantity > item.stock) {
      item.quantity = item.stock;
    } else if (item.quantity < 0) {
      item.quantity = 0;
    }
    item.stock -= item.quantity;
  }

  upQuantity(item: Item) {
    console.log("You called upQuantity()");
    if (item.stock > 0) {
      item.quantity++;
      item.stock--;
    }
  }

  downQuantity(item: Item) {
    console.log("You called downQuantity()");
    if (item.stock >= 0 && item.quantity > 0) {
      item.quantity--;
      item.stock++;
    }
  }

  emitDescriptionChanged(item: Item) {
    this.descriptionChanged.emit(item);
  }

  buttonDeleteClicked(item: Item) {
    this.deleteClick.emit(item.id);
  }

  navigateToNewItem() {
    this.router.navigate(['/item-new']);
  }

  navigateToEditItem() {
    this.router.navigate(['/item/:id']);
  }

  addToCart(item: Item) {
    console.log("You called addToCarrito()");
     this.cartService.addItem(item);    
    }
  }


