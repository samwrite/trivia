import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Question } from '../question';
import { ApiService } from '../question.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  question = new Question();

  constructor(private _api: ApiService, private _router: Router) {}

  ngOnInit() {
  }

  addQuestion() {
    this._api.create(this.question)
    .then(() => {this._router.navigate(['/'])})
    .catch((err) => {console.log(err)});
  }
}