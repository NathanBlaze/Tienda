import { Item } from "./item-list/item.model";

export class Shipping {
    id: number;
    name: string;    
    address: string;
    email: string;
    items: Array<Item>
}