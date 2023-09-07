import { Component } from '@angular/core';
import { AuthService } from '../users/auth.service';

@Component({
  templateUrl: './home.component.html'
})
export class HomeComponent {
  constructor(private auth: AuthService) {}

  signOut() {
    this.auth.signOut().subscribe();
  }
}
