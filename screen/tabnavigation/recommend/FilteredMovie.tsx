import { useEffect, useState } from "react";
import {
  View,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Text,
  Animated,
} from "react-native";
import {
  COLOR,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
} from "../../../config/globalstyles";
import { AntDesign } from "@expo/vector-icons";
import { FilterURL } from "./GenreChoice";
import { useNavigation } from "@react-navigation/native";
import { HomeScreenNavigationProp } from "../../navigation/types";
import LoadingPage from "./LoadingPage";

type posterProps = {
  code: number;
  data: string;
};

export let resultURL = "";
export default function FilteredMovie() {
  // A();
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const [select, setSelect] = useState(false);
  const [filterPoster, setFilterPoster] = useState<posterProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getFilterMovie = async () => {
    try {
      const URL = FilterURL;
      const response = await fetch(URL);
      const Json = await response.json();
      await setFilterPoster(Json.data);
      // console.log(Json.data[0].data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getFilterMovie();
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingPage />
      ) : (
        <View style={styles.container}>
          <View style={{ flex: 0.2 }}></View>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View style={{ flex: 1 }}>
              {select ? (
                <TouchableOpacity
                  style={styles.posterContainer}
                  onPress={() => {
                    setSelect((prev) => !prev);
                    resultURL = "";
                  }}
                >
                  <ImageBackground
                    source={{
                      uri: filterPoster[0].data,
                    }}
                    style={styles.selectPoster}
                    resizeMode="contain"
                  >
                    <View style={{ flex: 0.5 }}>
                      <AntDesign
                        name="checkcircle"
                        size={24}
                        color="black"
                        style={{ position: "absolute" }}
                      />
                    </View>
                  </ImageBackground>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={styles.posterContainer}
                  onPress={() => {
                    setSelect((prev) => !prev);
                    resultURL = `https://port-0-movie-sim-recommandation-6g2llfhupy60.sel3.cloudtype.app/similar/${filterPoster[0].code}`;
                  }}
                >
                  <ImageBackground
                    source={{
                      uri: filterPoster[0].data,
                    }}
                    style={styles.poster}
                    resizeMode="contain"
                  ></ImageBackground>
                </TouchableOpacity>
              )}
            </View>
            <View style={{ flex: 1 }}>
              <TouchableOpacity style={styles.posterContainer}>
                <ImageBackground
                  source={{
                    uri: filterPoster[1].data,
                  }}
                  style={styles.poster}
                  resizeMode="contain"
                ></ImageBackground>
              </TouchableOpacity>
            </View>
            <View style={{ flex: 1 }}>
              <TouchableOpacity style={styles.posterContainer}>
                <ImageBackground
                  source={{
                    uri: filterPoster[2].data,
                  }}
                  style={styles.poster}
                  resizeMode="contain"
                ></ImageBackground>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View style={{ flex: 1 }}>
              <TouchableOpacity style={styles.posterContainer}>
                <ImageBackground
                  source={{
                    uri: filterPoster[3].data,
                  }}
                  style={styles.poster}
                  resizeMode="contain"
                ></ImageBackground>
              </TouchableOpacity>
            </View>
            <View style={{ flex: 1 }}>
              <TouchableOpacity style={styles.posterContainer}>
                <ImageBackground
                  source={{
                    uri: filterPoster[4].data,
                  }}
                  style={styles.poster}
                  resizeMode="contain"
                ></ImageBackground>
              </TouchableOpacity>
            </View>
            <View style={{ flex: 1 }}>
              <TouchableOpacity style={styles.posterContainer}>
                <ImageBackground
                  source={{
                    uri: filterPoster[5].data,
                  }}
                  style={styles.poster}
                  resizeMode="contain"
                ></ImageBackground>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View style={{ flex: 1 }}>
              <TouchableOpacity style={styles.posterContainer}>
                <ImageBackground
                  source={{
                    uri: filterPoster[6].data,
                  }}
                  style={styles.poster}
                  resizeMode="contain"
                ></ImageBackground>
              </TouchableOpacity>
            </View>
            <View style={{ flex: 1 }}>
              <TouchableOpacity style={styles.posterContainer}>
                <ImageBackground
                  source={{
                    uri: filterPoster[7].data,
                  }}
                  style={styles.poster}
                  resizeMode="contain"
                ></ImageBackground>
              </TouchableOpacity>
            </View>
            <View style={{ flex: 1 }}>
              <TouchableOpacity style={styles.posterContainer}>
                <ImageBackground
                  source={{
                    uri: filterPoster[8].data,
                  }}
                  style={styles.poster}
                  resizeMode="contain"
                ></ImageBackground>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              flex: 0.4,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: SCREEN_HEIGHT / 40,
                color: "white",
                fontWeight: "800",
              }}
            >
              마음에 드는
            </Text>
            <Text
              style={{
                fontSize: SCREEN_HEIGHT / 40,
                color: "white",
                fontWeight: "800",
              }}
            >
              영화 포스터를 하나 선택해주세요 !!
            </Text>
          </View>
          <View style={{ flex: 0.2, flexDirection: "row" }}>
            <View style={{ flex: 1 }}></View>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: SCREEN_HEIGHT / 50,
                  fontWeight: "700",
                  color: "white",
                  marginRight: 20,
                }}
              >
                다 선택하셨나요?
              </Text>
              <Animated.View style={{ flex: 1 }}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    navigation.navigate("Result");
                  }}
                >
                  <Text
                    style={{ fontSize: SCREEN_WIDTH / 25, fontWeight: "900" }}
                  >
                    NEXT
                  </Text>
                </TouchableOpacity>
              </Animated.View>
            </View>
          </View>
          <View style={{ flex: 0.1, flexDirection: "row" }}></View>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(66, 66, 66)",
  },
  posterContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: SCREEN_HEIGHT / 100,
  },
  poster: {
    flex: 1,
    width: "100%",
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.7,
    shadowRadius: 7,
  },
  selectPoster: {
    flex: 0.7,
    width: "100%",
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.7,
    shadowRadius: 7,
  },
  button: {
    flex: 1,
    backgroundColor: COLOR,
    borderWidth: SCREEN_WIDTH / 100,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
});
