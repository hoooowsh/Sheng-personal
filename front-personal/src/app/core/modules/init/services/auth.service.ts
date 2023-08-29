import { Injectable } from '@angular/core';
import {
  Auth,
  // getAuth,
  // User,
  // signInWithEmailAndPassword,
  // signOut,
  // createUserWithEmailAndPassword,
} from '@angular/fire/auth';
import { FirebaseApp } from '@angular/fire/app';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // auth: Auth;
  // user: User | null | undefined;

  constructor(private afApp: FirebaseApp, private auth: Auth) {
    // this.auth = getAuth(this.afApp);
  }

  async googleSignIn() {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(this.auth, provider);
      return result;
    } catch (error) {
      console.error('Error during Google sign in:', error);
      throw error;
    }
  }

  // Get current user
  // getCurrentUser(): User | null | undefined {
  //   return this.user;
  // }
}
