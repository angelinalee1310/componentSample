import { Component, OnInit } from '@angular/core';
import { Users } from '../shared/users';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users = Users;
  constructor() { }

  ngOnInit(): void {
  }

}
