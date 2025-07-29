import { StackScreenProps } from "@react-navigation/stack"
import { ScrollView, Text } from "react-native"
import { RootStackParams } from "../../navigation/StackNavigator"
import { useMovie } from "../../hooks/useMovie"
import MovieHeader from "../../components/movie/MovieHeader"
import MovieDetails from "../../components/movie/MovieDetails"
import FullscreenLoader from "../../components/loaders/FullscreenLoader"

interface Props extends StackScreenProps<RootStackParams, "Details">{}

const DetailsScreen = ({ route}: Props) => {

  const { movieId } = route.params
  const { isLoading, movie, cast} = useMovie(movieId)

  if(isLoading) {
    return <FullscreenLoader />
  }

  return (
    <ScrollView>
      <MovieHeader 
        originalTitle={movie!.originalTitle}
        title={movie!.title}
        poster={movie!.poster}
      />
      <MovieDetails 
        rating={movie!.rating}
        description={movie!.description}
        generers={movie!.generes}
        budget={movie!.budget}
        cast={cast!}
      />
    </ScrollView>
  )
}

export default DetailsScreen