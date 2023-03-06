import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  ImageBackground,
  Text,
  View,
  Animated,
  FlatList,
  TouchableOpacity,
  RefreshControl,
  ActivityIndicator,
  Dimensions,
} from "react-native";
import {
  SCREEN_FONT,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
} from "../../config/globalstyles";

// icon
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { useState, useCallback, useEffect, useRef } from "react";

// navigation
import { useNavigation } from "@react-navigation/native";
import { HomeScreenNavigationProp } from "../navigation/types";

//
import { SharedElement } from "react-navigation-shared-element";
import HelpComment from "../help/HelpComment";

// 화면 크기별 이미지 사이즈
export const SCREEN_IMAGE =
  Dimensions.get("window").width > 768 ? SCREEN_WIDTH / 1.4 : SCREEN_HEIGHT / 3;

type Movie = {
  rank: number;
  title: string;
  _id: string;
};

// 순위 별 트로피 표시 위한 딕셔너리
const RANK: any = {
  first: (
    <MaterialCommunityIcons
      name="trophy-award"
      size={SCREEN_FONT}
      color="gold"
    />
  ),
  second: (
    <MaterialCommunityIcons
      name="trophy-award"
      size={SCREEN_FONT}
      color="silver"
    />
  ),
  third: (
    <MaterialCommunityIcons
      name="trophy-award"
      size={SCREEN_FONT}
      color="rgb(205, 127, 50)"
    />
  ),
  remain: <Feather name="award" size={SCREEN_FONT} color="white" />,
};

type ItemProps = {
  movieNm: string;
  // picture: string;
  rank: string | number;
};

// Movie
function Item({ movieNm, rank }: ItemProps) {
  const [line, setLine] = useState(1);
  const [isActivated, setIsActivated] = useState(false);

  const lineNumber = () => {
    isActivated ? setLine(1) : setLine(Number.MAX_SAFE_INTEGER);
    setIsActivated((prev) => !prev);
  };
  // 리스트 애니메이션
  const fadeList = useRef(new Animated.Value(0)).current;
  const transList = useRef(new Animated.Value(10)).current;
  const listAnim = Animated.timing(fadeList, {
    toValue: 1,
    duration: 1500,
    useNativeDriver: true,
  });
  const listAnim2 = Animated.timing(transList, {
    toValue: 0,
    duration: 2500,
    useNativeDriver: true,
  });
  Animated.parallel([listAnim, listAnim2]).start();

  return (
    <Animated.View
      style={{
        ...styles.movie_list,
        opacity: fadeList,
        transform: [{ translateY: transList }],
      }}
    >
      <View style={{ flex: 1 }}>
        <ImageBackground
          // source={{ uri : picture }}
          source={require("../../img/slamdunk.jpeg")}
          style={styles.movie_poster}
          resizeMode="contain"
        />
      </View>
      <View style={styles.movieEx}>
        <Text
          style={{ fontSize: SCREEN_FONT, color: "white" }}
          numberOfLines={line}
          ellipsizeMode="tail"
          onPress={() => {
            lineNumber();
          }}
        >
          {movieNm}
        </Text>
        <Text
          style={{
            fontSize: SCREEN_FONT - 4,
            color: "white",
            marginVertical: 7,
          }}
        >
          {(() => {
            if (+rank === 1) return RANK.first;
            else if (+rank === 2) return RANK.second;
            else if (+rank === 3) return RANK.third;
            else return RANK.remain;
          })()}{" "}
          예매율 순위 : {rank}
        </Text>
        <Text style={{ fontSize: SCREEN_FONT / 2, color: "white" }}>
          감독: 감석대 / 배우 : 이만식, 김명섭
        </Text>
        <Text style={styles.movieEx} numberOfLines={3} ellipsizeMode="tail">
          전국 제패를 꿈꾸는 북산고 농구부 5인방의 꿈과 열정, 멈추지 않는 도전을
          그린 영화
        </Text>
      </View>
      <StatusBar style="light"></StatusBar>
    </Animated.View>
  );
}

export default function MovieLists() {
  const [imageMo, setImageMo] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  // navigation
  const navigation = useNavigation<HomeScreenNavigationProp>();

  // 당겨서 새로 고침
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, []);

  // data 불러오기
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<Movie[]>([]);
  let url =
    "https://port-0-sixman-movie-r8xoo2mlenkvdnc.sel3.cloudtype.app/rank";
  const getMovies = async () => {
    try {
      const response = await fetch(url);
      const Json = await response.json();
      // Parse가 Json 형식의 값
      const Parse = await Json.ranking;

      setData(Parse);

      // map으로 데이터 추출하기
      // Parse.map((obj: any, key: number) => {
      //   console.log(obj.title);
      // });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      {isLoading ? (
        <View
          style={{
            flex: 1,
            backgroundColor: "rgb(66, 66, 66)",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ActivityIndicator></ActivityIndicator>
          <Text style={{ fontSize: SCREEN_FONT, color: "white" }}>
            Loading...
          </Text>
        </View>
      ) : (
        <View style={styles.container}>
          <View style={styles.banner}>
            <ImageBackground
              source={require("../../img/Zootopia-Banner.jpg")}
              style={{ flex: 1 }}
            />
          </View>
          <View style={styles.main_list}>
            <HelpComment />
            <FlatList
              data={data}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => {
                    setImageMo(true);
                    navigation.navigate("MovieDetails", { item });
                  }}
                  activeOpacity={0.8}
                >
                  <SharedElement id={"../../img/slamdunk.jpeg"}>
                    <Item
                      movieNm={item.title}
                      // picture={item.picture}
                      rank={item.rank}
                    />
                  </SharedElement>
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item._id}
              style={{ flex: 1 }}
              numColumns={2}
              refreshControl={
                <RefreshControl
                  refreshing={refreshing}
                  onRefresh={onRefresh}
                  colors={["blue"]}
                />
              }
            />
          </View>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  banner: {
    flex: 0.25,
    backgroundColor: "white",
  },
  main_list: {
    flex: 1,
    backgroundColor: "rgb(44, 44, 44)",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  movie_list: {
    flex: 1,
    backgroundColor: "rgb(66, 66, 66)",
    width: SCREEN_WIDTH / 2.15,
    margin: 6,
    marginVertical: 15,
    padding: 0,
    justifyContent: "center",
    shadowColor: "black",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.35,
    shadowRadius: 2,
    elevation: 24,
    borderRadius: 8,
  },
  movie_poster: {
    flex: 1,
    height: SCREEN_IMAGE,
    marginTop: -10,
  },
  movieEx: {
    flex: 1,
    color: "white",
    margin: 4,
    fontSize: SCREEN_FONT / 2,
  },
});
