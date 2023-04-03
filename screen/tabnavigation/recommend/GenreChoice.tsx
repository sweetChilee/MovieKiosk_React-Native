import { useNavigation } from "@react-navigation/native";
import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Animated,
  ImageBackground,
  ActivityIndicator,
} from "react-native";
import GenrePoster, { b } from "../../../component/GenrePoster";
import LoadingOverlay from "../../../component/LoadingOverlay";
import {
  COLOR,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
} from "../../../config/globalstyles";
import { LoadingScreenNavigationProp } from "../../navigation/types";

const genreData = {
  drama:
    "https://movie-phinf.pstatic.net/20181213_264/1544692854634ss65r_JPEG/movie_image.jpg",
  fantasy:
    "https://movie-phinf.pstatic.net/20181019_236/1539926790655oHv5z_JPEG/movie_image.jpg",
  horror:
    "https://movie-phinf.pstatic.net/20160525_161/1464156291880IEpkO_JPEG/movie_image.jpg",
  romance:
    "https://movie-phinf.pstatic.net/20230209_198/1675907886242jMQ8S_JPEG/movie_image.jpg",
  adventure:
    "https://movie-phinf.pstatic.net/20111222_256/1324527530062tFbqt_JPEG/movie_image.jpg",
  thriller:
    "https://movie-phinf.pstatic.net/20190906_128/1567761736426S6Fje_JPEG/movie_image.jpg",
  sf: "https://movie-phinf.pstatic.net/20220920_244/1663641181915y0nJN_JPEG/movie_image.jpg",
  documentary:
    "https://movie-phinf.pstatic.net/20141103_255/1414988497460e1QB6_JPEG/movie_image.jpg",
  comedy:
    "https://movie-phinf.pstatic.net/20181030_24/1540878641446PBOcp_JPEG/movie_image.jpg",
  famliy:
    "https://movie-phinf.pstatic.net/20190905_154/1567669527591DgewY_JPEG/movie_image.jpg",
  action:
    "https://movie-phinf.pstatic.net/20220509_176/1652081912471yhg3N_JPEG/movie_image.jpg",
  musical:
    "https://movie-phinf.pstatic.net/20201229_146/1609226288425JgdsP_JPEG/movie_image.jpg",
  animation:
    "https://movie-phinf.pstatic.net/20221216_283/1671153488789d3g4j_JPEG/movie_image.jpg",
  criminal:
    "https://movie-phinf.pstatic.net/20111222_166/1324548172003mpyIa_JPEG/movie_image.jpg",
};

export let FilterURL = "";

export default function GenreChoice() {
  const navigation = useNavigation<LoadingScreenNavigationProp>();

  const [select, setSelect] = useState<string[]>([]);
  const [load, setLoad] = useState<number[]>([]);

  const anim = useRef(new Animated.Value(0.1)).current;
  const anim2 = useRef(new Animated.Value(1)).current;

  const fadeIn = Animated.timing(anim, {
    toValue: 1,
    duration: 2000,
    useNativeDriver: true,
  });
  const fadeOut = Animated.timing(anim2, {
    toValue: 0.2,
    duration: 2000,
    useNativeDriver: true,
  });

  {
    select.length >= 3 ? fadeIn.start() : fadeOut.start();
  }

  const removeItem = (RemoveItem: string) => {
    const updatedItems = select.filter((item) => item !== RemoveItem);
    setSelect(updatedItems);
  };

  const sendGenre = () => {
    FilterURL = `https://port-0-movie-sim-recommandation-6g2llfhupy60.sel3.cloudtype.app/filter/${select}`;
  };

  return (
    <>
      {load.length >= 14 ? null : <LoadingOverlay visible={true} />}
      <View style={styles.container}>
        <View style={styles.postersArea}>
          <GenrePoster
            genre={"드라마"}
            press={() => {
              if (select.includes("드라마")) {
                for (let i = 0; i < select.length; i++) {
                  if (select[i] === "드라마") {
                    // select.splice(i, 1);
                    removeItem("드라마");
                  }
                }
              } else {
                setSelect(["드라마", ...select]);
              }
            }}
          >
            <ImageBackground
              source={{ uri: genreData.drama }}
              style={styles.poster}
              resizeMode="contain"
              onLoad={() => {
                setLoad([1, ...load]);
              }}
            ></ImageBackground>
          </GenrePoster>
          <GenrePoster
            genre={"판타지"}
            press={() => {
              if (select.includes("판타지")) {
                for (let i = 0; i < select.length; i++) {
                  if (select[i] === "판타지") {
                    removeItem("판타지");
                  }
                }
              } else {
                setSelect(["판타지", ...select]);
              }
            }}
          >
            <ImageBackground
              source={{ uri: genreData.fantasy }}
              style={styles.poster}
              resizeMode="contain"
              onLoad={() => {
                setLoad([1, ...load]);
              }}
            ></ImageBackground>
          </GenrePoster>
          <GenrePoster
            genre={"공포"}
            press={() => {
              if (select.includes("공포")) {
                for (let i = 0; i < select.length; i++) {
                  if (select[i] === "공포") {
                    // select.splice(i, 1);
                    removeItem("공포");
                  }
                }
              } else {
                setSelect(["공포", ...select]);
              }
            }}
          >
            <ImageBackground
              source={{ uri: genreData.horror }}
              style={styles.poster}
              resizeMode="contain"
              onLoad={() => {
                setLoad([1, ...load]);
              }}
            ></ImageBackground>
          </GenrePoster>
          <GenrePoster
            genre={"멜로/로맨스"}
            press={() => {
              if (select.includes("로맨스")) {
                for (let i = 0; i < select.length; i++) {
                  if (select[i] === "로맨스") {
                    // select.splice(i, 1);
                    removeItem("로맨스");
                  }
                }
              } else {
                setSelect(["로맨스", ...select]);
              }
            }}
          >
            <ImageBackground
              source={{ uri: genreData.romance }}
              style={styles.poster}
              resizeMode="contain"
              onLoad={() => {
                setLoad([1, ...load]);
              }}
            ></ImageBackground>
          </GenrePoster>
        </View>
        <View style={styles.postersArea}>
          <GenrePoster
            genre={"모험"}
            press={() => {
              if (select.includes("모험")) {
                for (let i = 0; i < select.length; i++) {
                  if (select[i] === "모험") {
                    removeItem("모험");
                  }
                }
              } else {
                setSelect(["모험", ...select]);
              }
            }}
          >
            <ImageBackground
              source={{ uri: genreData.adventure }}
              style={styles.poster}
              resizeMode="contain"
              onLoad={() => {
                setLoad([1, ...load]);
              }}
            ></ImageBackground>
          </GenrePoster>
          <GenrePoster
            genre={"스릴러"}
            press={() => {
              if (select.includes("스릴러")) {
                for (let i = 0; i < select.length; i++) {
                  if (select[i] === "스릴러") {
                    removeItem("스릴러");
                  }
                }
              } else {
                setSelect(["스릴러", ...select]);
              }
            }}
          >
            <ImageBackground
              source={{ uri: genreData.thriller }}
              style={styles.poster}
              resizeMode="contain"
              onLoad={() => {
                setLoad([1, ...load]);
              }}
            ></ImageBackground>
          </GenrePoster>
          <GenrePoster
            genre={"SF"}
            press={() => {
              if (select.includes("SF")) {
                for (let i = 0; i < select.length; i++) {
                  if (select[i] === "SF") {
                    removeItem("SF");
                  }
                }
              } else {
                setSelect(["SF", ...select]);
              }
            }}
          >
            <ImageBackground
              source={{ uri: genreData.sf }}
              style={styles.poster}
              resizeMode="contain"
              onLoad={() => {
                setLoad([1, ...load]);
              }}
            ></ImageBackground>
          </GenrePoster>
          <GenrePoster
            genre={"다큐멘터리"}
            press={() => {
              if (select.includes("다큐멘터리")) {
                for (let i = 0; i < select.length; i++) {
                  if (select[i] === "다큐멘터리") {
                    removeItem("다큐멘터리");
                  }
                }
              } else {
                setSelect(["다큐멘터리", ...select]);
              }
            }}
          >
            <ImageBackground
              source={{ uri: genreData.documentary }}
              style={styles.poster}
              resizeMode="contain"
              onLoad={() => {
                setLoad([1, ...load]);
              }}
            ></ImageBackground>
          </GenrePoster>
        </View>
        <View style={styles.postersArea}>
          <GenrePoster
            genre={"코미디"}
            press={() => {
              if (select.includes("코미디")) {
                for (let i = 0; i < select.length; i++) {
                  if (select[i] === "코미디") {
                    removeItem("코미디");
                  }
                }
              } else {
                setSelect(["코미디", ...select]);
              }
            }}
          >
            <ImageBackground
              source={{ uri: genreData.comedy }}
              style={styles.poster}
              resizeMode="contain"
              onLoad={() => {
                setLoad([1, ...load]);
              }}
            ></ImageBackground>
          </GenrePoster>
          <GenrePoster
            genre={"가족"}
            press={() => {
              if (select.includes("가족")) {
                for (let i = 0; i < select.length; i++) {
                  if (select[i] === "가족") {
                    removeItem("가족");
                  }
                }
              } else {
                setSelect(["가족", ...select]);
              }
            }}
          >
            <ImageBackground
              source={{ uri: genreData.famliy }}
              style={styles.poster}
              resizeMode="contain"
              onLoad={() => {
                setLoad([1, ...load]);
              }}
            ></ImageBackground>
          </GenrePoster>
          <GenrePoster
            genre={"액션"}
            press={() => {
              if (select.includes("액션")) {
                for (let i = 0; i < select.length; i++) {
                  if (select[i] === "액션") {
                    removeItem("액션");
                  }
                }
              } else {
                setSelect(["액션", ...select]);
              }
            }}
          >
            <ImageBackground
              source={{ uri: genreData.action }}
              style={styles.poster}
              resizeMode="contain"
              onLoad={() => {
                setLoad([1, ...load]);
              }}
            ></ImageBackground>
          </GenrePoster>
          <GenrePoster
            genre={"뮤지컬"}
            press={() => {
              if (select.includes("뮤지컬")) {
                for (let i = 0; i < select.length; i++) {
                  if (select[i] === "뮤지컬") {
                    removeItem("뮤지컬");
                  }
                }
              } else {
                setSelect(["뮤지컬", ...select]);
              }
            }}
          >
            <ImageBackground
              source={{ uri: genreData.musical }}
              style={styles.poster}
              resizeMode="contain"
              onLoad={() => {
                setLoad([1, ...load]);
              }}
            ></ImageBackground>
          </GenrePoster>
        </View>
        <View style={styles.postersArea}>
          <View style={{ flex: 0.2 }}></View>
          <GenrePoster
            genre={"애니메이션"}
            press={() => {
              if (select.includes("애니메이션")) {
                for (let i = 0; i < select.length; i++) {
                  if (select[i] === "애니메이션") {
                    removeItem("애니메이션");
                  }
                }
              } else {
                setSelect(["애니메이션", ...select]);
              }
            }}
          >
            <ImageBackground
              source={{ uri: genreData.animation }}
              style={styles.poster}
              resizeMode="contain"
              onLoad={() => {
                setLoad([1, ...load]);
              }}
            ></ImageBackground>
          </GenrePoster>
          <View style={{ flex: 0.2 }}></View>
          <GenrePoster
            genre={"범죄"}
            press={() => {
              if (select.includes("범죄")) {
                for (let i = 0; i < select.length; i++) {
                  if (select[i] === "범죄") {
                    removeItem("범죄");
                  }
                }
              } else {
                setSelect(["범죄", ...select]);
              }
            }}
          >
            <ImageBackground
              source={{ uri: genreData.criminal }}
              style={styles.poster}
              resizeMode="contain"
              onLoad={() => {
                setLoad([1, ...load]);
              }}
            ></ImageBackground>
          </GenrePoster>
          <View style={{ flex: 0.2 }}></View>
          <View style={{ flex: 1 }}>
            <View
              style={{
                flex: 2,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={styles.btnText}>글씨를</Text>
              <Text style={styles.btnText}>선택해주세요!!</Text>
            </View>
            {select.length >= 3 ? (
              <Animated.View style={{ flex: 1, opacity: anim }}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    navigation.navigate("FilteredMovie");
                    sendGenre();
                  }}
                >
                  <Text
                    style={{ fontSize: SCREEN_WIDTH / 20, fontWeight: "900" }}
                  >
                    NEXT
                  </Text>
                </TouchableOpacity>
              </Animated.View>
            ) : (
              <View style={{ flex: 1, opacity: 0.2 }}>
                <View style={styles.button}>
                  <Text
                    style={{ fontSize: SCREEN_WIDTH / 20, fontWeight: "900" }}
                  >
                    NEXT
                  </Text>
                </View>
              </View>
            )}
            <View
              style={{
                flex: 1,
                alignItems: "flex-end",
                justifyContent: "center",
              }}
            >
              <Text
                style={{ color: "gray", fontSize: 20, fontWeight: "800" }}
                onPress={() => {
                  navigation.navigate("Navlist");
                }}
              >
                __뒤로가기
              </Text>
            </View>
          </View>
          <View style={{ flex: 0.2 }}></View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(66, 66, 66)",
  },

  postersArea: {
    flex: 1,
    flexDirection: "row",
    marginVertical: SCREEN_WIDTH / 100,
  },
  poster: {
    flex: 1,
    width: "100%",
    backfaceVisibility: "hidden",
    shadowOffset: {
      width: 12,
      height: 12,
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
  btnText: {
    color: COLOR,
    fontSize: SCREEN_HEIGHT / 50,
    fontWeight: "900",
  },
});
