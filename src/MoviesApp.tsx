import { NavigationContainer } from "@react-navigation/native"
import { StackNavigator } from "./presentation/navigation/StackNavigator"

const MoviesApp = () => {

  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  )
}

export default MoviesApp