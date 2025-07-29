import { StackScreenProps } from "@react-navigation/stack"
import { View, Text } from "react-native"
import { RootStackParams } from "../../navigation/StackNavigator"
import { useMovie } from "../../hooks/useMovie"
import MovieHeader from "../../components/movie/MovieHeader"

interface Props extends StackScreenProps<RootStackParams, "Details">{}

const DetailsScreen = ({ route}: Props) => {

  const { movieId } = route.params
  const { isLoading, movie} = useMovie(movieId)

  if(isLoading) {
    return (<Text>Loading...</Text>)
  }

  return (
    <View>
      <MovieHeader 
        originalTitle={movie!.originalTitle}
        title={movie!.title}
        poster={movie!.poster}
      />
    </View>
  )
}

export default DetailsScreen