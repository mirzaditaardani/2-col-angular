import { Component, OnInit } from '@angular/core';
import {PeopleService} from '../../service/people.service';

@Component({
  selector: 'app-main-people',
  templateUrl: './main-people.component.html',
  styleUrls: ['./main-people.component.css']
})
export class MainPeopleComponent implements OnInit {

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

class UserModel {
  photo: any;
  name: any;
}
