import { View, Text } from "react-native"
import { useMovies } from "../../hooks/useMovies"

const HomeScreen = () => {

  const {} = useMovies()

  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  )
}

export default HomeScreen