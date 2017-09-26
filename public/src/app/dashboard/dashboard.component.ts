import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { ApiService } from '../question.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  searchStr: string = '';
  ruser: User = new User();

  constructor(private _api: ApiService, private _router: Router) { }

  ngOnInit() {
    var person = prompt("Please enter your name:");
  }

  validateReg() {
    this._api.registerUser(this.ruser)
    .then(() => {this._router.navigate(['/dashboard']); })
    .catch((err) => { console.log('There was an error') });
  }
}
