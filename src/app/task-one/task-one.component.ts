import { Component, OnInit } from '@angular/core';
import { UsersService } from '../Service/users.service';
import { Data } from '../Model/data.interface';

@Component({
  selector: 'app-task-one',
  templateUrl: './task-one.component.html',
  styleUrls: ['./task-one.component.scss'],
  providers: [UsersService],
})
export class TaskOneComponent implements OnInit {
  constructor(private usersService: UsersService) {}
  showLoading = false;
  users: Data[] | undefined;
  showEmpty = true;

  ngOnInit(): void {}

  async buttonState() {
    this.showEmpty = false;
    this.showLoading = true;
    await new Promise((resolve) => setTimeout(resolve, 3000)).then(
      () => (this.users = this.usersService.getUsers())
    );
    this.showLoading = false;
  }
}
