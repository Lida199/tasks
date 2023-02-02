import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-two',
  templateUrl: './task-two.component.html',
  styleUrls: ['./task-two.component.scss'],
})
export class TaskTwoComponent implements OnInit {
  amounts = Array(49);

  constructor() {}

  ngOnInit(): void {}
}
