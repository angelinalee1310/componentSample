import { Component, OnInit, ViewChild } from '@angular/core';
import { Users } from '../shared/users';
import { UserDetailComponent } from '../user-detail/user-detail.component';
//import { ResetRatingsComponent } from '../reset-ratings/reset-ratings.component';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  @ViewChild(UserDetailComponent)
  private userDetailComponent: UserDetailComponent;
  users = Users;
  positiveRating: number = 0;
  negativeRating: number = 0;
  onVoted(n){
    n ? this.positiveRating++ : this.negativeRating++;
  }
  ngOnInit(): void {
  }

  resetRatings() {
    this.userDetailComponent.resetRatings();
    this.positiveRating = 0;
    this.negativeRating = 0;
  }

}
