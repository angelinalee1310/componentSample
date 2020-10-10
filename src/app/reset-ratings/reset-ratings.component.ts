import { Component, OnInit } from '@angular/core';
import { Users } from '../shared/users';
import { User } from '../shared/user';
@Component({
  selector: 'app-reset-ratings',
  templateUrl: './reset-ratings.component.html',
  styleUrls: ['./reset-ratings.component.css']
})
export class ResetRatingsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  users: User;
  resetRatings(){
    for(let n=0; n>=this.users.id; n++) this.users.rating = 0;
  }
}
