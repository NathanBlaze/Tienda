import { Component, OnInit } from '@angular/core';
import { ItemListServices } from './item-list.services';
import { Item } from './item.model';
import { ITEMS } from './mocks';
import { Observable } from 'rxjs/internal/Observable';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  myItems: Item[];
  newItem: Item;
  showNewItemPanel = false;

  constructor(private service: ItemListServices, private router: Router) { }

  addNewItem() {
    this.service.addItem(this.newItem)
      .subscribe(data => this.loadItems());
    this.showNewItemPanel = false;
  }

  noShowItemPanel() {
    this.showNewItemPanel = false;
  }
  ngOnInit() {
    this.service.getItemList()
      .subscribe((data: Item[]) => this.myItems = data);
  }

  loadItems() {
    this.service.getItemList()
      .subscribe((data: Item[]) => {
        this.myItems = data;
        console.log('mis items dentro:' + this.myItems);
      });
    console.log('mis items fuera:' + this.myItems);
  }

  totalItems() {
    return this.myItems.reduce((acumulado, myItem) => acumulado + myItem.stock, 0);
  }

  modoEdicion(item: Item) {
    item.editDescription = true;
  }  

  showNewItemPanelWork() {
    this.showNewItemPanel = true;
    this.newItem = new Item();
    this.newItem.stock = 20;
    this.newItem.price = 0;
  }

  updateItem(item: Item) {
    item.editDescription = false;
    this.service.updateItem(item).subscribe();
  }

  deleteItem(id: number) {
    this.service.deleteItem(id)
      .subscribe(
        data => { // data es lo que devuelve el array y el elemento del array
          this.myItems = this.myItems.filter(el => { return el.id !== id })
        }
      );
  }



}


