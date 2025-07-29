import { View, Text } from "react-native"
import { Formatter } from "../../../config/helpers/formatter"
import { Cast } from "../../../core/entities/cast.entity"
import { FlatList } from "react-native-gesture-handler"
import CastActor from "../cast/CastActor"

interface Props {
  description: string
  rating: number
  generers: string[]
  budget: number,
  cast: Cast[]
}

const MovieDetails = ({description, rating, generers, budget, cast}: Props) => {

  return (
    <>
      <View style={{marginHorizontal: 20}}>
        <View style={{flexDirection: "row"}}>
          <Text>{rating}</Text>
          <Text style={{marginLeft: 5}}>- {generers.join(", ")}</Text>
        </View>
      <Text style={{fontSize: 23, marginTop: 10, fontWeight: "bold"}}>
        Description
      </Text>
      <Text style={{fontSize: 20}}>{description}</Text>
      <Text style={{fontSize: 23, marginTop: 10, fontWeight: "bold"}}>Budget Production</Text>
      <Text style={{fontSize: 18}}>{Formatter.currency(budget)}</Text>
      </View>
      {/* Casting */}
      <View style={{marginTop: 10, marginBottom: 50}}>
        <Text style={{
          fontSize: 23,
          marginVertical: 10,
          fontWeight: "bold",
          marginHorizontal: 20
        }}>Actors and actress</Text>
        <FlatList 
          data={cast}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => <CastActor actor={item} />}
        />
      </View>
    </>
  )
}

export default MovieDetails