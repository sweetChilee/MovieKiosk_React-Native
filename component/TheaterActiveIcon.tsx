import { StatusBar } from "expo-status-bar";
import { StyleSheet, Dimensions, View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { COLOR } from "../config/globalstyles";

export default function TheaterActiveIcon(props: any) {
  return (
    <MaterialCommunityIcons
      name="theater"
      size={Dimensions.get("window").width > 500 ? 120 : 70}
      color={COLOR}
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
