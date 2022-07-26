import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default PlaceItem = ({ place, onSelect }) => {
  return (
    <Pressable onPress={onSelect}>
      <Image src={{ url: place.imageUri }} />
      <View>
        <Text>{place.title}</Text>
        <Text>{place.address}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({});