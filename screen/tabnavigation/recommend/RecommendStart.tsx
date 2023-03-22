import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { COLOR, SCREEN_WIDTH } from "../../../config/globalstyles";
import { RecommendScreenNavigationProp } from "../../navigation/types";

export default function RecommendStart() {
  const navigation = useNavigation<RecommendScreenNavigationProp>();
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}></View>
      <View style={styles.screenShotContainer}>
        <View style={{ flex: 1 }}>
          <ImageBackground
            source={require("../../../img/secondScreenShot.png")}
            style={styles.screenShotImage}
            resizeMode="contain"
          />
        </View>
        <View style={{ flex: 1 }}>
          <ImageBackground
            source={require("../../../img/secondScreenShot.png")}
            style={styles.screenShotImage}
            resizeMode="contain"
          />
        </View>
        <View style={styles.textArea}>
          <Text style={styles.textEx}>
            1. 선호하는 장르 3가지를 선택해주세요!!
          </Text>
          <Text style={styles.textEx}>로딩 페이지를 지나서... </Text>
        </View>
      </View>
      <View style={{ flex: 0.3 }}></View>
      <View style={styles.screenShotContainer}>
        <View style={{ flex: 1 }}>
          <ImageBackground
            source={require("../../../img/secondScreenShot.png")}
            style={styles.screenShotImage}
            resizeMode="contain"
          />
        </View>
        <View style={styles.textArea}>
          <Text style={styles.textEx}>
            2. 기존 9개의 영화 중 마음에 드는 영화를 하나만 선택해주세요!
          </Text>
          <Text style={styles.textEx}>
            3. 그럼 끝 ~ !! 상영중인 영화 중 3개를 추천해줄거에요
          </Text>
        </View>
        <View style={{ flex: 1 }}>
          <ImageBackground
            source={require("../../../img/secondScreenShot.png")}
            style={styles.screenShotImage}
            resizeMode="contain"
          />
        </View>
      </View>
      <View style={styles.screenShotContainer}>
        <View style={{ flex: 1 }}></View>
        <View style={{ flex: 1 }}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate("GenreChoice");
            }}
          >
            <Text
              style={{
                fontSize: SCREEN_WIDTH / 20,
                fontWeight: "800",
              }}
            >
              Start
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1 }}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(66,66,66)",
  },
  screenShotContainer: {
    flex: 2,
    flexDirection: "row",
  },
  button: {
    flex: 1,
    marginVertical: SCREEN_WIDTH / 8,
    backgroundColor: COLOR,
    borderRadius: 100,
    borderWidth: SCREEN_WIDTH / 80,
    justifyContent: "center",
    alignItems: "center",
  },
  screenShotImage: {
    flex: 1,
    width: "100%",
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowColor: "black",
    shadowOpacity: 0.8,
    shadowRadius: 8,
  },
  textArea: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "flex-start",
  },
  textEx: {
    color: "white",
    fontSize: 24,
    fontWeight: "600",
  },
});
