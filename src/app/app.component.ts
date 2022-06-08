import { Component } from '@angular/core';
import { UserRegistrationFormComponent } from './user-registration-form/user-registration-form.component';
import { MatDialog } from '@angular/material/dialog';
import { UserLoginFormComponent } from './user-login-form/user-login-form.component';
import { MovieCardComponent } from './movie-card/movie-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myAngular-client';

}

  //No longer need in 6.4 HW

//   constructor(public dialog: MatDialog) { }
//   // this is the function that will open the dialog when the signup button is clicked
//   openUserRegistrationDialog(): void {
//     this.dialog.open(UserRegistrationFormComponent, {
//       width: '280px'
//     });
//   }

//   openUserLoginDialog(): void {
//     this.dialog.open(UserLoginFormComponent, {
//       width: '280px'
//     });
//   }

//   openMovieDialog(): void {
//     this.dialog.open(MovieCardComponent, {
//       width: '500px'
//     });
//   }
// }
