import React, { useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  Animated,
  TouchableOpacity,
} from "react-native";

import {
  MaterialCommunityIcons,
  Foundation,
  FontAwesome5,
} from "@expo/vector-icons";

import { COLOR, SCREEN_WIDTH } from "../../config/globalstyles";

import { useNavigation } from "@react-navigation/native";
import { HomeScreenNavigationProp } from "../navigation/types";
import HelpComment from "../help/HelpComment";
import Line from "../../component/Line";
import TouchAnim from "./touchanimation/TouchAnim";
import { ItemProps, RANK } from "./Data";

// Movie
export default function RenderItem({
  titleNm,
  poster,
  peopleNm,
  rank,
  overView,
  genreName,
}: ItemProps) {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const [line, setLine] = useState(1);
  const [lineActor, setLineActor] = useState(1);

  const [isActivated, setIsActivated] = useState(false);

  const lineNumber = () => {
    isActivated ? setLine(1) : setLine(Number.MAX_SAFE_INTEGER);
    setIsActivated((prev) => !prev);
  };
  const lineNumberActor = () => {
    isActivated ? setLineActor(1) : setLineActor(Number.MAX_SAFE_INTEGER);
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
        ...styles.item,
        opacity: fadeList,
        transform: [
          {
            translateY: transList,
          },
        ],
      }}
    >
      <View style={styles.innerBox}>
        <Image
          style={styles.poster}
          source={{ uri: poster }}
          resizeMode="cover"
        />
        <HelpComment />
        <TouchableOpacity
          style={styles.toDetail}
          onPress={() => {
            navigation.navigate<any>("MovieDetails", {
              movieTitle: { titleNm },
              peopleNm: { peopleNm },
              rank: { rank },
              overView: { overView },
              poster: { poster },
            });
          }}
        >
          <View
            style={{
              flex: 0.1,
              justifyContent: "flex-end",
              flexDirection: "row",
            }}
          >
            {+rank === 1 || +rank === 2 ? <TouchAnim /> : null}
            <Text
              style={{
                color: "white",
                fontWeight: "700",
                fontSize: SCREEN_WIDTH / 50,
                position: "absolute",
                top: 0,
              }}
            >
              상세보기
            </Text>
          </View>
          <Text
            style={styles.title}
            numberOfLines={line}
            ellipsizeMode="tail"
            onPress={() => {
              lineNumber();
            }}
          >
            {(() => {
              if (+rank === 1) return RANK.first;
              else if (+rank === 2) return RANK.second;
              else if (+rank === 3) return RANK.third;
              else return RANK.remain;
            })()}{" "}
            {titleNm}
          </Text>
          <Line />
          <Text style={styles.rank}>
            <Foundation name="ticket" size={SCREEN_WIDTH / 40} color="white" />
            {"  "}
            예매율 순위 : {rank}
          </Text>

          <Text
            style={styles.texts}
            numberOfLines={lineActor}
            onPress={() => {
              lineNumberActor();
            }}
          >
            <FontAwesome5 name="users" size={SCREEN_WIDTH / 40} color="white" />
            {"  "}
            {peopleNm}
          </Text>
          <View>
            <Text style={styles.texts}>
              <MaterialCommunityIcons
                name="movie-open-outline"
                size={SCREEN_WIDTH / 30}
                color="white"
              />
              {"  "}
              {genreName}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    margin: SCREEN_WIDTH / 120,
    height: Dimensions.get("window").width, // approximate a square
    backgroundColor: "rgb(66, 66, 66)",
    borderWidth: SCREEN_WIDTH / 90,
    borderColor: "black",
    borderRadius: 25,

    shadowColor: "black",
    shadowOffset: {
      width: 7,
      height: 7,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 24,
  },
  innerBox: {
    flex: 1,
    borderWidth: SCREEN_WIDTH / 150,
    borderColor: COLOR,
    borderRadius: 15,
  },
  poster: {
    flex: 1,
    height: "50%",
    width: "100%",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  toDetail: {
    flex: 0.4,
    justifyContent: "space-evenly",
    padding: SCREEN_WIDTH / 70,
  },
  title: {
    fontSize: SCREEN_WIDTH / 27,
    fontWeight: "700",
    color: "white",
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.7,
    shadowRadius: 3,
  },
  rank: {
    fontSize: SCREEN_WIDTH / 35,
    color: "white",
    fontWeight: "500",
  },
  texts: {
    color: "white",
    fontSize: SCREEN_WIDTH / 40,
    fontWeight: "500",
  },
});
