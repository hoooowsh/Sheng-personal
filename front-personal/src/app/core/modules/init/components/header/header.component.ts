import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  user: any = null;

  constructor(
    private authService: AuthService,
    private userService: UserService
  ) {
    this.authService.userState.subscribe((user) => {
      this.user = user;
    });
  }

  async signInWithGoogle() {
    try {
      const result = await this.authService.googleSignIn();
      console.log('Successfully signed in with Google:', result);

      (await this.userService.signinUser()).subscribe(
        (response) => {
          console.log('User registered successfully:', response);
        },
        (error) => {
          console.error('Error during user registration:', error);
        }
      );
    } catch (error) {
      console.error('Error during sign in:', error);
    }
  }

  async signOutWithGoogle() {
    try {
      await this.authService.googleSignOut();
      this.user = null;
    } catch (error) {
      console.error('Error during sign in:', error);
    }
  }

  async test() {
    console.log(this.user);
  }
}
