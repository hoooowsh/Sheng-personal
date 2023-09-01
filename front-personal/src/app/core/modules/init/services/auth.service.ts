import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { FirebaseApp } from '@angular/fire/app';
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // auth: Auth;
  // user: User | null | undefined;
  public userState = new BehaviorSubject<any | null>(null);

  constructor(private auth: Auth) {
    this.auth.onAuthStateChanged((user) => {
      this.userState.next(user);
    });
  }

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

  async googleSignOut() {
    try {
      await signOut(this.auth);
      console.log('Successfully signed out from Firebase');
    } catch (error) {
      console.error('Error signing out:', error);
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

  async getUser() {
    return this.auth.currentUser;
  }
}
