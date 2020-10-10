import {Component, EventEmitter, Input, Output, OnInit} from '@angular/core';
import { User } from '../shared/user';
import { Users } from '../shared/users';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
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
  n: boolean;
  @Input() user: User;
  @Output() voted = new EventEmitter<boolean>();

  ngOnInit(): void {
  }
  increaseRating(): void {
    this.user.rating++;
    this.n = true;
    this.voted.emit(this.n);
  }
  decreaseRating(): void {
    this.user.rating--;
    this.n = false;
    this.voted.emit(this.n);
  }
  resetRatings(){
    this.user.rating = 0;
  }
}
