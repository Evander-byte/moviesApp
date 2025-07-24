import { HttpAdapter } from "../../../config/adapters/http/http.adapter"
import { MovieDBMoviesResponse } from "../../../infrastructure/interfaces/movie-db.responses"
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper"


export const moviesUpcomingUseCase = async (fetcher: HttpAdapter) => {
  try {
    const upcoming = await fetcher.get<MovieDBMoviesResponse>("/upcoming")

    return upcoming.results.map(MovieMapper.fromMovieDbResultToEntity)
  } catch (error) {
    console.log(error)
    throw new Error("Error fetching movies - Upcoming")
  }
}