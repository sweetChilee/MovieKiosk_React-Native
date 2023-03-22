import { StatusBar } from "expo-status-bar";
import { StyleSheet, Dimensions, View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function TheaterIcon(props: any) {
  return (
    <MaterialCommunityIcons
      name="theater"
      size={Dimensions.get("window").width > 500 ? 100 : 50}
      color="white"
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
