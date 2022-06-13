import { Component, Inject, OnInit } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-director',
  templateUrl: './director.component.html',
  styleUrls: ['./director.component.scss']
})
export class DirectorComponent {
  director: any;

  constructor(
      @Inject(MAT_DIALOG_DATA)
      public data: {
        Name: string,
        Birth: Date,
        PopTitles: string,
      })
     { }


  ngOnInit(): void {
  }
 
}
