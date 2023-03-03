import { View, ImageBackground, Text } from "react-native";

export default function Map() {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require("../../img/map.jpeg")}
        style={{
          flex: 1,
          width: "100%",
          height: "100%",
        }}
        resizeMode={"contain"}
      ></ImageBackground>
    </View>
  );
}
