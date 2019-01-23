import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';
import { MovieService } from '../movie.service';

//import { fakeMovies } from '../fake-movies';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  //Property binding
  title = 'Movie finder';

  movie: Movie = {
    id: 1,
    name: "Star Wars",
    releaseYear: 1977
  }

  //movies = fakeMovies;
  movies: Movie[];
  constructor(private movieService: MovieService) { }

  getMoviesFromServices(): void{
    this.movies = this.movieService.getMovies();
  }

  ngOnInit() {
    this.getMoviesFromServices();
  }

  selectedMovie: Movie;
  onSelect(movie: Movie): void{
    this.selectedMovie = movie;
    console.log(`A kiválasztott film = ${JSON.stringify(this.selectedMovie)}`);
  }


}
