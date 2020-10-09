import {Component, Input, OnInit} from '@angular/core';
import { User } from '../shared/user';
import { Users } from '../shared/users';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  // styleUrls: ['./user-detail.component.css']
  styles: ['h4 { font-weight: bold }']
})
export class UserDetailComponent implements OnInit {
  @Input()
  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }
  // tslint:disable-next-line:variable-name
  private _id = 0;

  @Input() user: User;

  constructor() {  }

  ngOnInit(): void {
  }

  increaseRating(): void {
    this.user.rating++;
  }
}
