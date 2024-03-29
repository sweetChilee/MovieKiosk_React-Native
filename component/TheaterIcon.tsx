import { StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SCREEN_HEIGHT } from "../config/globalstyles";

export default function TheaterIcon(props: any) {
  return (
    <MaterialCommunityIcons
      name="theater"
      size={SCREEN_HEIGHT / 12}
      color="white"
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
