import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { MovieDBMovie } from "../../../infrastructure/interfaces/movie.responses";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import { FullMovie } from "../../entities/movie.entity";

export const getMovieByIdUseCase = async (fetcher: HttpAdapter, movieId: number): Promise<FullMovie> => {
  try {
    //fetcher
    const movie = await fetcher.get<MovieDBMovie>(`/${movieId}`)
    //mapping 
    const fullMovie = MovieMapper.fromMovieDBToEntity(movie)
    return fullMovie
  } catch (error) {
    throw new Error("Error fetching movie - MovieDetails")
  }
}