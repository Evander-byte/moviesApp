import { useEffect, useState } from "react"
import { Movie } from "../../core/entities/movie.entity"

import * as UseCases from "../../core/use-cases"
import { movieDBFetcher } from "../../config/adapters/movieDB.adapter"

let popularPageNumber = 1;

export const useMovies = () => {

  const [isLoading, setIsLoading] = useState(true)
  const [nowPlaying, setNowPlaying] = useState<Movie[]>([])
  const [upcoming, setUpcoming] = useState<Movie[]>([])
  const [popular, setPopular] = useState<Movie[]>([])
  const [topRated, setTopRated] = useState<Movie[]>([])

  useEffect(() => {
    initialLoad()
  }, [])

  const initialLoad = async () => {
    const nowPlayingPromise = UseCases.moviesNowPlayingUseCase(movieDBFetcher)
    const upcomingPromise = UseCases.moviesUpcomingUseCase(movieDBFetcher)
    const popularPromise = UseCases.moviesPopularUseCase(movieDBFetcher)
    const topRatedPromise = UseCases.moviesTopRateUseCase(movieDBFetcher)

    const [
      nowPlayingMovies,
      upcomingMovies,
      popularMovies,
      topRatedMovies
    ] = await Promise.all([
      nowPlayingPromise,
      upcomingPromise,
      popularPromise,
      topRatedPromise
    ])

    setNowPlaying(nowPlayingMovies)
    setUpcoming(upcomingMovies)
    setPopular(popularMovies)
    setTopRated(topRatedMovies)

    setIsLoading(false)
  }
  

  return {
    isLoading,
    nowPlaying,
    upcoming,
    popular,
    topRated,
    popularNextPage: async() => {
      popularPageNumber++
      const popularMovies = await UseCases.moviesPopularUseCase(movieDBFetcher, {
        page: popularPageNumber
      })
      setPopular(prev => [...prev, ...popularMovies])
    }
  }
}