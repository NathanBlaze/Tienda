import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemListServices } from '../item-list/item-list.services';
import { Item } from '../item-list/item.model';

@Component({
  selector: 'app-item-new',
  templateUrl: './item-new.component.html',
  styleUrls: ['./item-new.component.css']
})
export class ItemNewComponent implements OnInit {
  newItem: Item;
 
  constructor(private service: ItemListServices, private route: ActivatedRoute, private router: Router) {
    this.newItem = new Item();
    this.newItem.stock = 0;
    this.newItem.price = 0;
    this.newItem.quantity = 0;
  }

  ngOnInit(): void {    
  }

  navigateToItemList() {
    this.router.navigate(['home/']);
  }

  addItem() {
    this.service.addItem(this.newItem).subscribe();
    this.navigateToItemList();
  }
}
