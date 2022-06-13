import { Component, OnInit } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service';
import { GenreComponent } from '../genre/genre.component';
import { DirectorComponent } from '../director/director.component';
import { SynopsisComponent } from '../synopsis/synopsis.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent {
  user: any = {};
  movies: any[] = [];
  currentUser: any= null;
  currentFavs: any[] = [];
 
  constructor(
    public fetchApiData: FetchApiDataService,
    public dialog: MatDialog
    ) { }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(): void {
    this.fetchApiData.getAllMovies().subscribe((resp: any) => {
      this.movies = resp;
      console.log(this.movies);
      return this.movies;
    });
  }

  getUser(): void {
    const username = localStorage.getItem('user');
    this.fetchApiData.getUser(username).subscribe((resp: any) => {
    this.currentUser = resp.Username;
    this.currentFavs = resp.FavoriteMovies 
    });
  }

  addFavorite(id: string): void {
    const token = localStorage.getItem('token');
    this.fetchApiData.addFavoriteMovies(id).subscribe((resp: any) => {
      this.ngOnInit();
    });
  }

  isFav(id: string): boolean {
    return this.currentFavs.includes(id);
  }

  removeFavorite(id: string): void {
    const token = localStorage.getItem('token');
    this.fetchApiData.removeFavoriteMovie(id).subscribe((resp: any) => {
      this.ngOnInit();
    });
  }

  openGenreDialog(name: string, description: string): void {
    this.dialog.open(GenreComponent, {
      data: { name, description },
      width: '500px',
    })
  }

  openDirectorDialog(name: string, bio: string, birth: string): void {
    this.dialog.open(DirectorComponent, {
      data: { name, bio, birth },
      width: '500px',
    })
  }

  openSynopsisDialog(
    title: string,
    director: string,
    description: string ): void {
      this.dialog.open(SynopsisComponent, {
        data: { title, director, description },
        width: '500px',
      });
    }


}
