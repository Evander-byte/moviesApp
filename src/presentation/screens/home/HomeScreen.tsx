import { View, Text } from "react-native"
import { useMovies } from "../../hooks/useMovies"
import { ScrollView } from "react-native-gesture-handler"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import PosterCarousel from "../../components/movies/PosterCarousel"
import HorizontalCarousel from "../../components/movies/HorizontalCarousel"

const HomeScreen = () => {

  const { top } = useSafeAreaInsets()

  const {isLoading, nowPlaying, popular, topRated, upcoming, popularNextPage} = useMovies()

  if(isLoading) {
    return (<Text>Loading...</Text>)
  }

  return (
    <ScrollView>
      <View style={{marginTop: top + 20, paddingBottom: 30}}>
        {/* Main */}
        <PosterCarousel 
          movies={nowPlaying}
        />
        {/* Popular */}
        <HorizontalCarousel 
          movies={popular}
          title="Popular movies"
          loadNextPage={popularNextPage}
        />
        {/* TopRated */}
        <HorizontalCarousel 
          movies={topRated}
          title="Top-rated movies"
        />
        {/* Upcoming */}
        <HorizontalCarousel 
          movies={upcoming}
          title="Upcoming movies"
        />
      </View>
    </ScrollView>
  )
}

export default HomeScreen