import { Component, OnInit } from '@angular/core';
import { ApiService } from '../question.service';
import { Router } from '@angular/router';
import { Question } from '../question';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  testQuestions: Array<Question>;
  
  constructor(private _api: ApiService, private _router: Router) { }

  ngOnInit() {
    this.getQuestions();
  }

  getQuestions() {
    this._api.retrieveAll()
    .then((questions) => {
      this.testQuestions = questions;})
    .catch((err) => {console.log(err)});
  }

  submitTest() {
    console.log("Submitted answers")
  }
}
