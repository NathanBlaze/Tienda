import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from './cart.service';
import { Item } from './item-list/item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Tienda';
  Today: number = Date.now();
  cartAmountItems: number = 0;
   
  constructor(private router: Router, private cartService: CartService) { }
  
  ngOnInit(): void {   
    this.cartService.amountObservable$.subscribe(data => {
      console.log(data);
      this.cartAmountItems = data;
    } ) 
  }

  navigateToNewItem() {
    this.router.navigate(['/item-new']);
  }

  navigateToOrder() {
    this.router.navigate(['/order']);
  }

 


}


