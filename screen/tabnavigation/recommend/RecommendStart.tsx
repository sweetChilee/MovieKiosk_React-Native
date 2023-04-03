import { useNavigation } from "@react-navigation/native";
import LottieView from "lottie-react-native";
import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  ActivityIndicator,
} from "react-native";
import { Overlay } from "react-native-elements";
import LoadingOverlay from "../../../component/LoadingOverlay";
import {
  COLOR,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
} from "../../../config/globalstyles";
import { RecommendScreenNavigationProp } from "../../navigation/types";

export default function RecommendStart() {
  const navigation = useNavigation<RecommendScreenNavigationProp>();
  const [loading, setLoading] = useState<number[]>([]);
  return (
    <>
      <LoadingOverlay visible={!(loading.length === 4)} />
      <View style={styles.container}>
        <View style={{ flex: 1 }}></View>
        <View style={styles.screenShotContainer}>
          <View style={{ flex: 1 }}>
            <ImageBackground
              source={require("../../../img/genrechoice.png")}
              style={styles.screenShotImage}
              resizeMode="contain"
              onLoad={() => {
                setLoading([1, ...loading]);
              }}
            />
          </View>
          <View style={{ flex: 1 }}>
            <ImageBackground
              source={require("../../../img/secondScreenShot.png")}
              style={styles.screenShotImage}
              resizeMode="contain"
              onLoad={() => {
                setLoading([...loading, 2]);
              }}
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
              source={require("../../../img/thirdScreenShot.png")}
              style={styles.screenShotImage}
              resizeMode="contain"
              onLoad={() => {
                setLoading([...loading, 3]);
              }}
            />
          </View>
          <View style={{ flex: 1 }}>
            <View style={styles.textArea}>
              <Text style={styles.textEx}>
                2. 9개의 영화 중 마음에 드는 영화를 하나만 선택해주세요!
              </Text>
            </View>
            <View style={styles.textArea}>
              <Text style={styles.textEx}>3. 그럼 끝 ~ !!</Text>
              <Text style={styles.textEx}>
                상영중인 영화 중 3개를 추천해줄거에요
              </Text>
            </View>
          </View>
          <View style={{ flex: 1 }}>
            <ImageBackground
              source={require("../../../img/lastScreenShot.png")}
              style={styles.screenShotImage}
              resizeMode="contain"
              onLoad={() => {
                setLoading([...loading, 4]);
              }}
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
                  fontSize: SCREEN_HEIGHT / 30,
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
    </>
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
    marginVertical: SCREEN_HEIGHT / 11,
    backgroundColor: COLOR,
    borderRadius: 100,
    borderWidth: SCREEN_WIDTH / 80,
    justifyContent: "center",
    alignItems: "center",
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.7,
    shadowRadius: 5,
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
    justifyContent: "center",
    alignItems: "flex-start",
  },
  textEx: {
    color: "white",
    fontSize: SCREEN_HEIGHT / 50,
    fontWeight: "600",
    margin: SCREEN_HEIGHT / 100,
  },
});
