import { StyleSheet, Image, View, Animated, Dimensions } from "react-native";
import { SCREEN_FONT, SCREEN_WIDTH } from "../../config/globalstyles";

// icon
import {
  MaterialCommunityIcons,
  Feather,
  Foundation,
  FontAwesome5,
} from "@expo/vector-icons";
import React, { useEffect, useRef } from "react";

//
import { SharedElement } from "react-navigation-shared-element";

const MOVIE_FONT = Dimensions.get("window").width > 500 ? 36 : 20;
const TICKET_FONT = Dimensions.get("window").width > 500 ? 24 : 14;

type RankProps<T> = {
  first: T;
  second: T;
  third: T;
  remain: T;
};
// 순위 별 트로피 표시 위한 딕셔너리
// 여기서 속성을 어떻게 설정해야할지 모르겠음...
const RANK: RankProps<any> = {
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

type Route<T> = {
  route: {
    params: {
      movieTitle: {
        titleNm: T;
      };
      rank: { rank: T };
      peopleNm: { peopleNm: T };
      poster: { poster: T };
      overView: { overView: T };
    };
  };
};

// Movie
const MovieDetails = ({ route }: Route<string>) => {
  const fadeTitle = useRef(new Animated.Value(0)).current;
  const transTitle = useRef(new Animated.Value(20)).current;
  const fadeRank = useRef(new Animated.Value(0)).current;
  const transRank = useRef(new Animated.Value(30)).current;
  const fadeActor = useRef(new Animated.Value(0)).current;
  const transActor = useRef(new Animated.Value(40)).current;
  const fadeExplain = useRef(new Animated.Value(0)).current;
  const transExplain = useRef(new Animated.Value(50)).current;

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
      toValue: 20,
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
      toValue: 33,
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
      toValue: 40,
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

  const MOVIE_TITLE = route.params.movieTitle.titleNm;
  const MOVIE_RANK = route.params.rank.rank;
  const MOVIE_PEOPLE = route.params.peopleNm.peopleNm;
  const MOVIE_POSTER = route.params.poster.poster;
  const MOVIE_OVERVIEW = route.params.overView.overView;

  return (
    <View style={styles.container}>
      <View style={{ flex: 2, justifyContent: "center", alignItems: "center" }}>
        <SharedElement id={MOVIE_POSTER}>
          <Image
            // source={{ uri : picture }}
            source={{ uri: MOVIE_POSTER }}
            style={styles.movie_poster}
            resizeMode="cover"
          />
        </SharedElement>
      </View>
      <View style={styles.movieEx}>
        <Animated.Text
          style={{
            fontSize: MOVIE_FONT,
            fontWeight: "800",
            color: "white",
            opacity: fadeTitle,
            transform: [{ translateY: transTitle }],
          }}
        >
          {(() => {
            if (+MOVIE_RANK === 1) return RANK.first;
            else if (+MOVIE_RANK === 2) return RANK.second;
            else if (+MOVIE_RANK === 3) return RANK.third;
            else return RANK.remain;
          })()}
          {MOVIE_TITLE}
        </Animated.Text>
        <Animated.Text
          style={{
            fontSize: TICKET_FONT,
            color: "white",
            opacity: fadeRank,
            margin: 5,
            transform: [{ translateY: transRank }],
          }}
        >
          <Foundation name="ticket" size={SCREEN_WIDTH / 40} color="white" />
          {"  "}
          예매율 순위 : {MOVIE_RANK}
        </Animated.Text>
        <Animated.Text
          style={{
            fontSize: SCREEN_FONT - 3,
            color: "white",
            opacity: fadeActor,
            transform: [{ translateY: transActor }],
          }}
        >
          <FontAwesome5 name="users" size={SCREEN_WIDTH / 40} color="white" />
          {"  "} {MOVIE_PEOPLE}
        </Animated.Text>
        <Animated.Text
          style={{
            ...styles.movieEx,
            opacity: fadeExplain,
            transform: [{ translateY: transExplain }],
          }}
        >
          <MaterialCommunityIcons
            name="order-alphabetical-ascending"
            size={SCREEN_WIDTH / 40}
            color="white"
          />
          {"  "}
          {MOVIE_OVERVIEW}
        </Animated.Text>
      </View>
    </View>
  );
};

MovieDetails.sharedElements = ({ route }: Route<string>) => {
  return [
    {
      id: route.params.poster.poster,
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
  },
  movie_poster: {
    flex: 1,
    width: SCREEN_WIDTH,
  },
  movieEx: {
    flex: 1,
    color: "white",
    fontSize: SCREEN_FONT - 3,
    padding: SCREEN_WIDTH / 50,
  },
});
