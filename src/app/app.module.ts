import { registerLocaleData } from '@angular/common';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import es from '@angular/common/locales/es';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TotalPipe } from './total.pipe';
import { ExchangePipe } from './exchange.pipe';
import { ItemListComponent } from './item-list/item-list.component';
import { FormsModule } from '@angular/forms';
import { ItemListServices } from './item-list/item-list.services';
import { HttpClientModule } from '@angular/common/http';
import { ItemComponent } from './item/item.component';
import { ItemNewComponent } from './item-new/item-new.component';
import { ItemEditComponent } from './item-edit/item-edit.component';
import { ItemFormComponent } from './item-form/item-form.component';
import { OrderComponent } from './order/order.component';
import { CartService } from './cart.service';
import { DetailCartComponent } from './detail-cart/detail-cart.component';
import { ShippingComponent } from './shipping/shipping.component';

@NgModule({
  declarations: [
    AppComponent,
    TotalPipe,
    ExchangePipe,
    ItemFormComponent,
    ItemListComponent,
    ItemComponent,
    ItemNewComponent,
    ItemEditComponent,
    OrderComponent,
    DetailCartComponent,
    ShippingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ItemListServices,CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
registerLocaleData(es);