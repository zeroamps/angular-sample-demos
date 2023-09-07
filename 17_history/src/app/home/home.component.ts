import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  private _id!: number;
  constructor(private _route: ActivatedRoute, private _router: Router, private _location: Location) {
    this._route.params.subscribe((params) => {
      this._id = +params['id'];
      console.log(this._id);
    });
  }

  forward() {
    this._router.navigate(['/home', ++this._id]);
  }

  back() {
    this._location.back();
  }
}
