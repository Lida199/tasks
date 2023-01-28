import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Output() wasClicked = new EventEmitter();
  clicked: boolean = false;
  constructor() {}

  ngOnInit(): void {}
  loadUsers() {
    if (!this.clicked) {
      this.clicked = true;
      this.wasClicked.emit();
    }
  }
}
