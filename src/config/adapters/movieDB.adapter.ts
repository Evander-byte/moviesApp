import { MOVIE_DB_URL, THE_MOVIE_DB_KEY } from "@env";
import { AxiosAdapter } from "./http/axios.adapter";

export const movieDBFetcher = new AxiosAdapter({
  baseUrl: MOVIE_DB_URL,
  params: {
    api_key: THE_MOVIE_DB_KEY,
    language: "es"
  }
})