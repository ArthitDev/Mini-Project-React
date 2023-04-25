export interface Movie {
    Search: SearchMovieData[]
    totalResults: string
    Response: string
  }
  
  export interface SearchMovieData {
    Title: string
    Year: string
    imdbID: string
    Type: Type
    Poster: string
  }
  
  export enum Type {
    Movie = 'movie',
  }