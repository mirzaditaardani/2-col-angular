import { Component, OnInit } from '@angular/core';
import {PeopleService} from '../../service/people.service';

@Component({
  selector: 'app-main-document',
  templateUrl: './main-document.component.html',
  styleUrls: ['./main-document.component.css']
})
export class MainDocumentComponent implements OnInit {


  listUser: any;
  constructor(public peopleService: PeopleService) { }

  ngOnInit(): void {
    this.getRandomUser();
  }

  getRandomUser(){
    this.peopleService.getUser()
      .toPromise()
      .then(value => {
        this.listUser = value;
      });
  }
}
