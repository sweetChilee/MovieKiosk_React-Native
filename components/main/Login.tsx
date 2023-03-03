import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import LoginModal from "./LoginModal";
import { useNavigation } from "@react-navigation/native";
import { HomeScreenNavigationProp } from "../navigation/types";
import { useState } from "react";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");

export default function Login() {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <View style={styles.login_container}>
      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.aBtn}
        onPress={() => {
          navigation.navigate("Navlist");
        }}
      >
        <Text style={{ color: "black", fontSize: 35, fontWeight: "800" }}>
          Start
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles: any = StyleSheet.create({
  login_container: {
    flex: 0.3,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(66, 66, 66)",
  },
  aBtn: {
    flex: 1,
    backgroundColor: "rgb(168, 77, 191)",
    borderWidth: 6,
    borderColor: "black",
    borderRadius: 40,
    height: SCREEN_HEIGHT / 12,
    margin: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
