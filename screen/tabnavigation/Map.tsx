import { View, ImageBackground, Text } from "react-native";
import { COLOR, SCREEN_HEIGHT } from "../../config/globalstyles";
import { MaterialIcons } from "@expo/vector-icons";

export default function Map() {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 6 }}></View>
      <Text
        style={{
          fontSize: SCREEN_HEIGHT / 23,
          textAlign: "center",
          color: "white",
          fontWeight: "700",
          shadowOffset: {
            width: 10,
            height: 10,
          },
          shadowOpacity: 0.7,
          shadowRadius: 5,
        }}
      >
        <MaterialIcons name="stars" size={SCREEN_HEIGHT / 30} color={COLOR} />{" "}
        극장 안내도{" "}
        <MaterialIcons name="stars" size={SCREEN_HEIGHT / 30} color={COLOR} />
      </Text>
      <ImageBackground
        source={require("../../img/theaterMap.png")}
        style={{
          flex: 20,
          width: "100%",
          height: "100%",
          shadowOffset: {
            width: 1,
            height: 10,
          },
          shadowOpacity: 0.5,
          shadowRadius: 1,
        }}
        resizeMode={"cover"}
      ></ImageBackground>
      <View style={{ flex: 5 }}></View>
    </View>
  );
}
