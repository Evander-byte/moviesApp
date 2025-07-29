import { View, Text, ActivityIndicator } from "react-native"


const FullscreenLoader = () => {

  return (
    <View style={{flex: 1, justifyContent: "center", alignContent: "center"}}>
      <ActivityIndicator size={"large"} color={"indigo"}/>
    </View>
  )
}

export default FullscreenLoader