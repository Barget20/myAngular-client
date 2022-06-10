import { Component, OnInit, Inject } from '@angular/core';
import { inject } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-synopsis',
  templateUrl: './synopsis.component.html',
  styleUrls: ['./synopsis.component.scss']
})
export class SynopsisComponent implements OnInit {

  constructor(
    @Inject(MatDialog)
    public data: {
      Title: string,
      Description: string,
    })
   { }

  ngOnInit(): void {
  }

}
