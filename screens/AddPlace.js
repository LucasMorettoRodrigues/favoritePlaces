import { View } from "react-native";
import PlaceForm from "../components/Places/PlaceForm";
import { insertPlace } from "../util/database";

export default AddPlace = ({ navigation }) => {
  async function createPlaceHandler(place) {
    await insertPlace(place);
    navigation.navigate("AllPlaces");
  }

  return (
    <View style={{ flex: 1 }}>
      <PlaceForm onCreatePlace={createPlaceHandler} />
    </View>
  );
};
