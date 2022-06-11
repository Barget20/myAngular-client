import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.scss']
})
export class GenreComponent implements OnInit {
  genres: any;

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
