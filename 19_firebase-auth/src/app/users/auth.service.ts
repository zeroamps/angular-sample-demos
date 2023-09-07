import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { from, tap } from 'rxjs';

import {
  ApplicationVerifier,
  Auth,
  ConfirmationResult,
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
  OAuthProvider,
  RecaptchaVerifier,
  signInAnonymously,
  signInWithEmailAndPassword,
  signInWithPhoneNumber,
  signInWithPopup,
  signOut,
  TwitterAuthProvider
} from '@angular/fire/auth';

export const redirectUnauthorizedToSignIn = () => redirectUnauthorizedTo(['/signin']);

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly homeRoute = '/home';
  constructor(private auth: Auth, private router: Router) {}

  signInAnonymously() {
    return from(signInAnonymously(this.auth)).pipe(tap(() => this.router.navigate([this.homeRoute])));
  }

  signInWithEmailAndPassword(email: string, password: string) {
    return from(signInWithEmailAndPassword(this.auth, email, password)).pipe(
      tap(() => this.router.navigate([this.homeRoute]))
    );
  }

  createRecaptchaVerifier() {
    return new RecaptchaVerifier('recaptcha', { size: 'invisible' }, this.auth);
  }

  signInWithPhoneNumber(phoneNumber: string, appVerifier: ApplicationVerifier) {
    return from(signInWithPhoneNumber(this.auth, phoneNumber, appVerifier));
  }

  confirmPhoneNumber(confirmationResult: ConfirmationResult, code: string) {
    return from(confirmationResult.confirm(code)).pipe(tap(() => this.router.navigate([this.homeRoute])));
  }

  signInWithFacebook() {
    return from(signInWithPopup(this.auth, new FacebookAuthProvider())).pipe(
      tap(() => this.router.navigate([this.homeRoute]))
    );
  }

  signInWithGoogle() {
    return from(signInWithPopup(this.auth, new GoogleAuthProvider())).pipe(
      tap(() => this.router.navigate([this.homeRoute]))
    );
  }

  signInWithMicrosoft() {
    return from(signInWithPopup(this.auth, new OAuthProvider('microsoft.com'))).pipe(
      tap(() => this.router.navigate([this.homeRoute]))
    );
  }

  signInWithGithub() {
    return from(signInWithPopup(this.auth, new GithubAuthProvider())).pipe(
      tap(() => this.router.navigate([this.homeRoute]))
    );
  }

  signInWithTwitter() {
    return from(signInWithPopup(this.auth, new TwitterAuthProvider())).pipe(
      tap(() => this.router.navigate([this.homeRoute]))
    );
  }

  signUp(email: string, password: string) {
    return from(createUserWithEmailAndPassword(this.auth, email, password)).pipe(
      tap(() => this.router.navigate([this.homeRoute]))
    );
  }

  signOut() {
    return from(signOut(this.auth)).pipe(tap(() => this.router.navigate([''])));
  }
}
