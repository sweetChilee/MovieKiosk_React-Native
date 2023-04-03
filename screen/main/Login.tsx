import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { HomeScreenNavigationProp } from "../navigation/types";

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
        <Text
          style={{
            color: "black",
            fontSize: SCREEN_HEIGHT / 25,
            fontWeight: "800",
          }}
        >
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
    borderWidth: SCREEN_HEIGHT / 120,
    borderColor: "black",
    borderRadius: 50,
    height: SCREEN_HEIGHT / 12,
    marginBottom: SCREEN_HEIGHT / 30,
    marginHorizontal: SCREEN_HEIGHT / 10,
    justifyContent: "center",
    alignItems: "center",
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.7,
    shadowRadius: 7,
  },
});
