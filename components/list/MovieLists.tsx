import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  ImageBackground,
  Text,
  View,
  Animated,
  FlatList,
  TouchableOpacity,
  Modal,
  Image,
  RefreshControl,
} from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";

import { COLOR, SCREEN_HEIGHT, SCREEN_WIDTH } from "../../config/globalstyles";

// icon
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { useState, useCallback } from "react";

type ItemData = {
  rank: string;
  movieNm: string;
  openDt: string;
  rnum: string;
  picture: string;
};

const DATA: ItemData[] = [
  {
    rnum: "1",
    rank: "1",
    movieNm: "앤트맨과 와스프: 퀀텀매니아",
    openDt: "2023-02-15",
    picture: "https://i.ibb.co/JsZBDpY/poster2.jpg",
  },
  {
    rnum: "2",
    rank: "2",
    movieNm: "더 퍼스트 슬램덩크",
    openDt: "2023-01-04",
    picture: "https://i.ibb.co/JsZBDpY/poster2.jpg",
  },
  {
    rnum: "3",
    rank: "3",
    movieNm: "영화 제목이 생각이 안 나",
    openDt: "2023-02-21",
    picture: "https://i.ibb.co/JsZBDpY/poster2.jpg",
  },
  {
    rnum: "4",
    rank: "4",
    movieNm: "영화 제목이 생각이 안 나",
    openDt: "2023-02-21",
    picture: "https://i.ibb.co/JsZBDpY/poster2.jpg",
  },
  {
    rnum: "5",
    rank: "5",
    movieNm: "영화 제목이 생각이 안 나",
    openDt: "2023-02-21",
    picture: "https://i.ibb.co/JsZBDpY/poster2.jpg",
  },
  {
    rnum: "6",
    rank: "6",
    movieNm: "영화 제목이 생각이 안 나",
    openDt: "2023-02-21",
    picture: "https://i.ibb.co/JsZBDpY/poster2.jpg",
  },
];

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
  picture: string;
  rank: string;
  openDt: string;
};

const Item = ({ movieNm, picture, rank, openDt }: ItemProps) => (
  <View style={styles.movie_list}>
    <Image
      source={{ uri: picture }}
      style={styles.movie_poster}
      resizeMode="contain"
    />
    <View style={styles.movieEx}>
      <Text style={{ fontSize: responsiveFontSize(2.3), color: "white" }}>
        {movieNm}
      </Text>
      <Text style={{ fontSize: responsiveFontSize(1.5), color: "white" }}>
        {(() => {
          if (+rank === 1) return RANK.first;
          else if (+rank === 2) return RANK.second;
          else if (+rank === 3) return RANK.third;
          else return RANK.remain;
        })()}{" "}
        예매율 순위 : {rank}
      </Text>
      <Text
        style={{
          fontSize: responsiveFontSize(1.5),
          color: "white",
          marginVertical: responsiveHeight(0.5),
        }}
      >
        <MaterialCommunityIcons name="update" size={18} color="white" />{" "}
        개봉일자 : {openDt}
      </Text>
      <Text style={{ fontSize: responsiveFontSize(1.5), color: "white" }}>
        감독: 감석대 / 배우 : 이만식, 김명섭, 최기훈
      </Text>
      <Text style={styles.movieEx}>
        정부는 연한을 정하여 계속비로서 국회의 의결을 얻어야 한다.
      </Text>
    </View>
    <StatusBar style="light"></StatusBar>
  </View>
);

export default function MovieLists() {
  const [imageMo, setImageMo] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <ImageBackground
          source={require("../../img/Zootopia-Banner.jpg")}
          style={{ flex: 1 }}
        />
      </View>
      <View style={styles.main_list}>
        <FlatList
          data={DATA}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                setImageMo(true);
              }}
              activeOpacity={0.8}
            >
              <Modal animationType="slide" visible={imageMo} transparent={true}>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <TouchableOpacity
                    style={{
                      backgroundColor: "white",
                      width: "100%",
                      height: "50%",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    onPress={() => {
                      setImageMo(false);
                    }}
                  >
                    <Text style={{ fontSize: 40 }}>추후 공개 예정</Text>
                  </TouchableOpacity>
                </View>
              </Modal>
              <Item
                movieNm={item.movieNm}
                picture={item.picture}
                rank={item.rank}
                openDt={item.openDt}
              />
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.rnum}
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
    marginVertical: 20,
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
    width: "100%",
    height: SCREEN_HEIGHT / 3,
    marginTop: -8,
  },
  movieEx: {
    flex: 1,
    color: "white",
    margin: 4,
  },
});
