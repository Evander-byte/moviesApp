import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { MovieDBMoviesResponse } from "../../../infrastructure/interfaces/movie-db.responses";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";


export const moviesPopularUseCase = async (fetcher: HttpAdapter) => {
  try {
    const popular = await fetcher.get<MovieDBMoviesResponse>("/popular")

    return popular.results.map(MovieMapper.fromMovieDbResultToEntity)
  } catch (error) {
    console.log(error)
    throw new Error("Error fetching movies - Popular")
  }
}