import { Item } from "./item.model";

export const ITEMS: Item[] = [{
    'id': 1,
    'name': 'Producto 1',
    'description': 'Descpricion del producto',
    'stock': 0,
    'price': 100,
    'image': '../assets/loboFeroz.png',
    'selected': false,
    'quantity': 0,
    'editDescription': false
   },
   {
    'id': 2,
    'name': 'Producto 2',
    'description': 'Descpricion del producto 2',
    'stock': 5,
    'price': 1258.00,
    'image': '../assets/niña.png',
    'selected': true,
    'quantity': 0,
    'editDescription': false
   },
   {
    'id': 3,
    'name': 'Producto 3',
    'description': 'Descpricion del producto 3',    
    'stock': 10,
    'price': 0.25,
    'image': '../assets/vidente.png',
    'selected': false,
    'quantity': 0,
    'editDescription': false
   },
   {
    'id': 4,
    'name': 'Producto 4',
    'description': 'Descpricion del producto 3',    
    'stock': 10,
    'price': 0.25,
    'image': '../assets/cazador.png',
    'selected': false,
    'quantity': 0,
    'editDescription': false
   }];