import { HttpAdapter } from "../../../config/adapters/http/http.adapter"
import { MovieDBMoviesResponse } from "../../../infrastructure/interfaces/movie-db.responses"
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper"

export const moviesTopRateUseCase = async (fetcher: HttpAdapter) => {
  try {
    const topRated = await fetcher.get<MovieDBMoviesResponse>("/top_rated")

    return topRated.results.map(MovieMapper.fromMovieDbResultToEntity)
  } catch (error) {
    console.log(error)
    throw new Error("Error fetching movies - Top Rated")
  }
}