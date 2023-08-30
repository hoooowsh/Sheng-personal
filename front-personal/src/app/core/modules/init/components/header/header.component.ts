import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(
    private authService: AuthService,
    private userService: UserService
  ) {}

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
}
