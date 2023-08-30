import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { FirebaseApp } from '@angular/fire/app';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // auth: Auth;
  // user: User | null | undefined;

  constructor(private auth: Auth) {}

  async googleSignIn() {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(this.auth, provider);
      console.log(result);
      return result;
    } catch (error) {
      console.error('Error during Google sign in:', error);
      throw error;
    }
  }

  async getUserRegisterDetails() {
    const user = this.auth.currentUser;

    if (user) {
      const { displayName } = user;
      const name = displayName;
      return {
        name: name,
      };
    }
    throw new Error('User not authenticated');
  }

  async getUserToken() {
    const user = this.auth.currentUser;
    if (user) {
      return await user.getIdToken();
    }
    throw new Error('User not authenticated');
  }
}
