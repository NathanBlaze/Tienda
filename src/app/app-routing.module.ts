import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemEditComponent } from './item-edit/item-edit.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemNewComponent } from './item-new/item-new.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: ItemListComponent },
  { path: 'item-new', component: ItemNewComponent },
  { path: 'item/:id', component: ItemEditComponent },
  { path: 'order', component: OrderComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

