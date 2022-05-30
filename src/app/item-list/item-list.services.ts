import { HttpClient, HttpHeaders,} from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Item } from "./item.model";
import { ITEMS } from "./mocks";

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
    })
};

@Injectable()
export class ItemListServices {
    URL_BASE = 'http://localhost:3000/item-lisT'
  
    constructor(private http: HttpClient) {}
    
    getItemList(): Observable<Item[]> {
        return this.http.get<Item[]>('http://localhost:3000/item-list');
    }   

    addItem (item: Item): Observable<Item> {
        return this.http.post<Item>(this.URL_BASE, item, httpOptions);
    }

    updateItem (item:Item): Observable<Item> {
        const url = `${this.URL_BASE}/${item.id}`;
        return this.http.put<Item>(url, item, httpOptions);
    }

    deleteItem(id: number): Observable<{}> {
        const url = `${this.URL_BASE}/${id}`;
        return this.http.delete<Item>(url, httpOptions);
    }

    getItem(id: number): Observable<Item> {
        const url = `${this.URL_BASE}/${id}`;
        return this.http.get<Item>(url);
    }
}