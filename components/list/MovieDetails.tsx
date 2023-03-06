import {
  StyleSheet,
  ImageBackground,
  Image,
  Text,
  View,
  Animated,
} from "react-native";
import { responsiveFontSize } from "react-native-responsive-dimensions";
import {
  SCREEN_FONT,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
} from "../../config/globalstyles";

// icon
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import React, { useEffect, useRef } from "react";

// navigation
import type { PropsWithChildren } from "react";
import type { ViewStyle } from "react-native";

//
import { SharedElement } from "react-navigation-shared-element";

type Movie = {
  rank: number;
  title: string;
  _id: string;
};

// 순위 별 트로피 표시 위한 딕셔너리
const RANK: any = {
  first: <MaterialCommunityIcons name="trophy-award" size={30} color="gold" />,
  second: (
    <MaterialCommunityIcons name="trophy-award" size={30} color="silver" />
  ),
  third: (
    <MaterialCommunityIcons
      name="trophy-award"
      size={30}
      color="rgb(205, 127, 50)"
    />
  ),
  remain: <Feather name="award" size={20} color="white" />,
};

type ItemProps = {
  movieNm: string;
  // picture: string;
  rank: string | number;
};

// Movie
const MovieDetails = ({ route }: any) => {
  const fadeTitle = useRef(new Animated.Value(0)).current;
  const transTitle = useRef(new Animated.Value(15)).current;
  const fadeRank = useRef(new Animated.Value(0)).current;
  const transRank = useRef(new Animated.Value(20)).current;
  const fadeActor = useRef(new Animated.Value(0)).current;
  const transActor = useRef(new Animated.Value(25)).current;
  const fadeExplain = useRef(new Animated.Value(0)).current;
  const transExplain = useRef(new Animated.Value(30)).current;

  useEffect(() => {
    // 제목 애니메이션
    const titleAnim = Animated.timing(fadeTitle, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    });
    const titleAnim2 = Animated.timing(transTitle, {
      toValue: 10,
      duration: 1000,
      useNativeDriver: true,
    });

    // 순위 애니메이션
    const rankAnim = Animated.timing(fadeRank, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    });
    const rankAnim2 = Animated.timing(transRank, {
      toValue: 12,
      duration: 1000,
      useNativeDriver: true,
    });

    // 감독, 배우 애니메이션
    const actorAnim = Animated.timing(fadeActor, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    });
    const actorAnim2 = Animated.timing(transActor, {
      toValue: 20,
      duration: 800,
      useNativeDriver: true,
    });

    // 설명 애니메이션
    const exAnim = Animated.timing(fadeExplain, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    });
    const exAnim2 = Animated.timing(transExplain, {
      toValue: 25,
      duration: 800,
      useNativeDriver: true,
    });

    // 종합
    const titleAnimLast = Animated.parallel([titleAnim, titleAnim2]);
    const rankAnimLast = Animated.parallel([rankAnim, rankAnim2]);
    const actorAnimLast = Animated.parallel([actorAnim, actorAnim2]);
    const exAnimLast = Animated.parallel([exAnim, exAnim2]);

    Animated.stagger(800, [
      titleAnimLast,
      rankAnimLast,
      actorAnimLast,
      exAnimLast,
    ]).start();
  }, [fadeTitle]);

  const item = route.params.item;

  return (
    <View style={styles.container}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <SharedElement id={"../../img/slamdunk.jpeg"}>
          <Image
            // source={{ uri : picture }}
            source={require("../../img/slamdunk.jpeg")}
            style={styles.movie_poster}
            resizeMode="cover"
          />
        </SharedElement>
      </View>
      <View style={styles.movieEx}>
        <Animated.Text
          style={{
            fontSize: SCREEN_FONT,
            color: "white",
            opacity: fadeTitle,
            transform: [{ translateY: transTitle }],
          }}
        >
          {item.title}
        </Animated.Text>
        <Animated.Text
          style={{
            fontSize: SCREEN_FONT - 5,
            color: "white",
            opacity: fadeRank,
            transform: [{ translateY: transRank }],
          }}
        >
          {(() => {
            if (+item.rank === 1) return RANK.first;
            else if (+item.rank === 2) return RANK.second;
            else if (+item.rank === 3) return RANK.third;
            else return RANK.remain;
          })()}{" "}
          예매율 순위 : {item.rank}
        </Animated.Text>
        <Animated.Text
          style={{
            fontSize: SCREEN_FONT - 5,
            color: "white",
            opacity: fadeActor,
            transform: [{ translateY: transActor }],
          }}
        >
          감독: 감석대 / 배우 : 이만식, 김명섭
        </Animated.Text>
        <Animated.Text
          style={{
            ...styles.movieEx,
            opacity: fadeExplain,
            transform: [{ translateY: transExplain }],
          }}
        >
          전국 제패를 꿈꾸는 북산고 농구부 5인방의 꿈과 열정, 멈추지 않는 도전을
          그린 영화
        </Animated.Text>
      </View>
    </View>
  );
};

MovieDetails.sharedElements = (route: any) => {
  const { item } = route.params;
  return [
    {
      id: "../../img/slamdunk.jpeg",
      animation: "move",
      resize: "clip",
    },
  ];
};

export default MovieDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(66, 66, 66)",
    width: SCREEN_WIDTH,
    paddingTop: 20,
    justifyContent: "center",
    shadowColor: "black",
  },
  movie_poster: {
    flex: 1,
    marginTop: -20,
  },
  movieEx: {
    flex: 1,
    color: "white",
    fontSize: SCREEN_FONT - 5,
  },
});
