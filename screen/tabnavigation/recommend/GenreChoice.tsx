import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Animated,
  ImageBackground,
} from "react-native";
import GenrePoster from "../../../component/GenrePoster";

export const genreData = {
  drama:
    "https://movie-phinf.pstatic.net/20181213_264/1544692854634ss65r_JPEG/movie_image.jpg",
  fantasy:
    "https://movie-phinf.pstatic.net/20181019_236/1539926790655oHv5z_JPEG/movie_image.jpg",
  horror:
    "https://movie-phinf.pstatic.net/20160525_161/1464156291880IEpkO_JPEG/movie_image.jpg",
  romance:
    "https://movie-phinf.pstatic.net/20230209_198/1675907886242jMQ8S_JPEG/movie_image.jpg",
};
export default function GenreChoice() {
  const anim = useRef(new Animated.Value(0)).current;

  Animated.timing(anim, {
    toValue: 0.5,
    duration: 1000,
    useNativeDriver: true,
  });

  const [drama, setDrama] = useState(false);
  const [fantasy, setFantasy] = useState(false);
  const [horror, setHorror] = useState(false);

  return (
    <View style={styles.container}>
      <View style={{ flex: 1, flexDirection: "row", marginVertical: 5 }}>
        <GenrePoster
          genre={"드라마"}
          press={() => {
            setDrama((prev) => !prev);
          }}
          URL={genreData.drama}
        ></GenrePoster>
        <GenrePoster
          genre={"판타지"}
          press={() => {
            setDrama((prev) => !prev);
          }}
          URL={genreData.fantasy}
        ></GenrePoster>
        <GenrePoster
          genre={"공포"}
          press={() => {
            setDrama((prev) => !prev);
          }}
          URL={genreData.horror}
        ></GenrePoster>
      </View>
      <View style={{ flex: 1, flexDirection: "row", marginVertical: 5 }}>
        {/* <GenrePoster
          genre={"멜로/로맨스"}
          press={() => {
            setDrama((prev) => !prev);
          }}
        >
          <Animated.Image
            source={{ uri: genreData.romance }}
            style={styles.poster}
            resizeMode="contain"
          ></Animated.Image>
        </GenrePoster> */}
        <View style={{ flex: 1, backgroundColor: "rgb(66, 66, 66)" }}>
          <View style={{ flex: 2.5 }}>
            <ImageBackground
              source={{
                uri: "https://movie-phinf.pstatic.net/20111222_256/1324527530062tFbqt_JPEG/movie_image.jpg",
              }}
              style={{
                flex: 1,
                width: "100%",
                opacity: 1,
                justifyContent: "flex-end",
                alignItems: "center",
              }}
              resizeMode="contain"
            ></ImageBackground>
          </View>
          <Text
            style={{
              flex: 0.5,
              fontSize: 20,
              color: "white",
              fontWeight: "600",
              textAlign: "center",
            }}
          >
            모험
          </Text>
        </View>
        <View style={{ flex: 1, backgroundColor: "rgb(66, 66, 66)" }}>
          <View style={{ flex: 2.5 }}>
            <ImageBackground
              source={{
                uri: "https://movie-phinf.pstatic.net/20190906_128/1567761736426S6Fje_JPEG/movie_image.jpg",
              }}
              style={{
                flex: 1,
                width: "100%",
                opacity: 1,
                justifyContent: "flex-end",
                alignItems: "center",
              }}
              resizeMode="contain"
            ></ImageBackground>
          </View>
          <Text
            style={{
              flex: 0.5,
              fontSize: 20,
              color: "white",
              fontWeight: "600",
              textAlign: "center",
            }}
          >
            스릴러
          </Text>
        </View>
      </View>
      <View style={{ flex: 1, flexDirection: "row", marginVertical: 5 }}>
        <View style={{ flex: 1, backgroundColor: "rgb(66, 66, 66)" }}>
          <View style={{ flex: 2.5 }}>
            <ImageBackground
              source={{
                uri: "https://movie-phinf.pstatic.net/20220920_244/1663641181915y0nJN_JPEG/movie_image.jpg",
              }}
              style={{
                flex: 1,
                width: "100%",
                opacity: 1,
                justifyContent: "flex-end",
                alignItems: "center",
              }}
              resizeMode="contain"
            ></ImageBackground>
          </View>
          <Text
            style={{
              flex: 0.5,
              fontSize: 20,
              color: "white",
              fontWeight: "600",
              textAlign: "center",
            }}
          >
            SF
          </Text>
        </View>
        <View style={{ flex: 1, backgroundColor: "rgb(66, 66, 66)" }}>
          <View style={{ flex: 2.5 }}>
            <ImageBackground
              source={{
                uri: "https://movie-phinf.pstatic.net/20141103_255/1414988497460e1QB6_JPEG/movie_image.jpg",
              }}
              style={{
                flex: 1,
                width: "100%",
                opacity: 1,
                justifyContent: "flex-end",
                alignItems: "center",
              }}
              resizeMode="contain"
            ></ImageBackground>
          </View>
          <Text
            style={{
              flex: 0.5,
              fontSize: 20,
              color: "white",
              fontWeight: "600",
              textAlign: "center",
            }}
          >
            다큐멘터리
          </Text>
        </View>
        <View style={{ flex: 1, backgroundColor: "rgb(66, 66, 66)" }}>
          <View style={{ flex: 2.5 }}>
            <ImageBackground
              source={{
                uri: "https://movie-phinf.pstatic.net/20181030_24/1540878641446PBOcp_JPEG/movie_image.jpg",
              }}
              style={{
                flex: 1,
                width: "100%",
                opacity: 1,
                justifyContent: "flex-end",
                alignItems: "center",
              }}
              resizeMode="contain"
            ></ImageBackground>
          </View>
          <Text
            style={{
              flex: 0.5,
              fontSize: 20,
              color: "white",
              fontWeight: "600",
              textAlign: "center",
            }}
          >
            코미디
          </Text>
        </View>
      </View>
      <View style={{ flex: 1, flexDirection: "row", marginVertical: 5 }}>
        <View style={{ flex: 1, backgroundColor: "rgb(66, 66, 66)" }}>
          <View style={{ flex: 2.5 }}>
            <ImageBackground
              source={{
                uri: "https://movie-phinf.pstatic.net/20190905_154/1567669527591DgewY_JPEG/movie_image.jpg",
              }}
              style={{
                flex: 1,
                width: "100%",
                opacity: 1,
                justifyContent: "flex-end",
                alignItems: "center",
              }}
              resizeMode="contain"
            ></ImageBackground>
          </View>
          <Text
            style={{
              flex: 0.5,
              fontSize: 20,
              color: "white",
              fontWeight: "600",
              textAlign: "center",
            }}
          >
            가족
          </Text>
        </View>
        <View style={{ flex: 1, backgroundColor: "rgb(66, 66, 66)" }}>
          <View style={{ flex: 2.5 }}>
            <ImageBackground
              source={{
                uri: "https://movie-phinf.pstatic.net/20220509_176/1652081912471yhg3N_JPEG/movie_image.jpg",
              }}
              style={{
                flex: 1,
                width: "100%",
                opacity: 1,
                justifyContent: "flex-end",
                alignItems: "center",
              }}
              resizeMode="contain"
            ></ImageBackground>
          </View>
          <Text
            style={{
              flex: 0.5,
              fontSize: 20,
              color: "white",
              fontWeight: "600",
              textAlign: "center",
            }}
          >
            액션
          </Text>
        </View>
        <View style={{ flex: 1, backgroundColor: "rgb(66, 66, 66)" }}>
          <View style={{ flex: 2.5 }}>
            <ImageBackground
              source={{
                uri: "https://movie-phinf.pstatic.net/20201229_146/1609226288425JgdsP_JPEG/movie_image.jpg",
              }}
              style={{
                flex: 1,
                width: "100%",
                opacity: 1,
                justifyContent: "flex-end",
                alignItems: "center",
              }}
              resizeMode="contain"
            ></ImageBackground>
          </View>
          <Text
            style={{
              flex: 0.5,
              fontSize: 20,
              color: "white",
              fontWeight: "600",
              textAlign: "center",
            }}
          >
            뮤지컬
          </Text>
        </View>
      </View>
      <View style={{ flex: 1, flexDirection: "row", marginVertical: 5 }}>
        <View style={{ flex: 1, backgroundColor: "rgb(66, 66, 66)" }}>
          <View style={{ flex: 2.5 }}>
            <ImageBackground
              source={{
                uri: "https://movie-phinf.pstatic.net/20221216_283/1671153488789d3g4j_JPEG/movie_image.jpg",
              }}
              style={{
                flex: 1,
                width: "100%",
                opacity: 1,
                justifyContent: "flex-end",
                alignItems: "center",
              }}
              resizeMode="contain"
            ></ImageBackground>
          </View>
          <Text
            style={{
              flex: 0.5,
              fontSize: 20,
              color: "white",
              fontWeight: "600",
              textAlign: "center",
            }}
          >
            애니메이션
          </Text>
        </View>
        <View style={{ flex: 1, backgroundColor: "rgb(66, 66, 66)" }}>
          <View style={{ flex: 2.5 }}>
            <ImageBackground
              source={{
                uri: "https://movie-phinf.pstatic.net/20111222_166/1324548172003mpyIa_JPEG/movie_image.jpg",
              }}
              style={{
                flex: 1,
                width: "100%",
                opacity: 1,
                justifyContent: "flex-end",
                alignItems: "center",
              }}
              resizeMode="contain"
            ></ImageBackground>
          </View>
          <Text
            style={{
              flex: 0.5,
              fontSize: 20,
              color: "white",
              fontWeight: "600",
              textAlign: "center",
            }}
          >
            범죄
          </Text>
        </View>
        <View style={{ flex: 1, backgroundColor: "rgb(66, 66, 66)" }}>
          <Text
            style={{
              flex: 1,
              fontSize: 20,
              color: "white",
              fontWeight: "600",
              textAlign: "center",
              top: 50,
            }}
          >
            NEXT
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(66, 66, 66)",
  },
  menu: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  poster: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
});
