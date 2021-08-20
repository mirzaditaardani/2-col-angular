import { Component, OnInit } from '@angular/core';
import {PeopleService} from '../../service/people.service';

@Component({
  selector: 'app-main-videos',
  templateUrl: './main-videos.component.html',
  styleUrls: ['./main-videos.component.css']
})
export class MainVideosComponent implements OnInit {

  
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