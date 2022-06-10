import { Component, Injectable, OnInit } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service';

@Component({
  selector: 'app-director',
  templateUrl: './director.component.html',
  styleUrls: ['./director.component.scss']
})
export class DirectorComponent {
  director: any[] = [];

  constructor(public fetchApiData: FetchApiDataService) { }

  ngOnInit(): void {
    this.getDirector();
  }
 

  getDirector(): void {
    this.fetchApiData.getDirector().subscribe((resp: any) => {
      this.director = resp;
      console.log(this.director);
      return this.director;
    });
  }
}
