import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemListServices } from '../item-list/item-list.services';
import { Item } from '../item-list/item.model';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.css']
})
export class ItemEditComponent implements OnInit {
  item: Item;
  
  constructor(private service: ItemListServices, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(data => {
      const id = <number>data['id'];
      if (id !== null) {
        this.service.getItem(id).subscribe(data => this.item = data);
      }
    });
  }

  navigateToItemList() {
    this.router.navigate(['/home']);
  }

  updateItem() {
    this.service.updateItem(this.item).subscribe()
    this.navigateToItemList();
  }
}
