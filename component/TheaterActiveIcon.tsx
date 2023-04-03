import { StatusBar } from "expo-status-bar";
import { StyleSheet, Dimensions, View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { COLOR, SCREEN_HEIGHT } from "../config/globalstyles";

export default function TheaterActiveIcon(props: any) {
  return (
    <MaterialCommunityIcons
      name="theater"
      size={SCREEN_HEIGHT / 10}
      color={COLOR}
      style={{
        shadowOffset: {
          width: 10,
          height: 10,
        },
        shadowOpacity: 0.7,
        shadowRadius: 5,
      }}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
