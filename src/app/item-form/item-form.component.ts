import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Item } from '../item-list/item.model';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent implements OnInit {
  @Input() item: Item;
  @Input() saveLabel: string;
  @Output() saveClicked: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() cancelClicked: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
    if (this.saveLabel === undefined) {
      this.saveLabel = 'Save';
    }
  }

  emitSaveClicked() {
    this.saveClicked.emit(true);
  }

  emitCancelClicked() {
    this.cancelClicked.emit(true);
  }
}
