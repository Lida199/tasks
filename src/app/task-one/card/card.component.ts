import { Component, Input, OnInit } from '@angular/core';
import { Data } from '../../Model/data.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() users: Data[] | undefined;

  constructor() {}

  ngOnInit(): void {}
}
