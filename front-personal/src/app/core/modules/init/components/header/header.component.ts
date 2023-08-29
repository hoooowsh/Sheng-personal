import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private authService: AuthService) {}

  signInWithGoogle() {
    this.authService
      .googleSignIn()
      .then((result) => {
        console.log('Successfully signed in with Google:', result);
        // Handle the signed-in user here.
      })
      .catch((error) => {
        console.error('Error during sign in:', error);
      });
  }
}
