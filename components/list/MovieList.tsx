import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  ImageBackground,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Modal,
} from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";

// icon
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { useState } from "react";

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
  {
    rnum: "7",
    rank: "7",
    movieNm: "영화 제목이 생각이 안 나",
    openDt: "2023-02-21",
    picture: "https://i.ibb.co/JsZBDpY/poster2.jpg",
  },
  {
    rnum: "8",
    rank: "8",
    movieNm: "영화 제목이 생각이 안 나",
    openDt: "2023-02-21",
    picture: "https://i.ibb.co/JsZBDpY/poster2.jpg",
  },
  {
    rnum: "9",
    rank: "9",
    movieNm: "영화 제목이 생각이 안 나",
    openDt: "2023-02-21",
    picture: "https://i.ibb.co/JsZBDpY/poster2.jpg",
  },
  {
    rnum: "10",
    rank: "10",
    movieNm: "영화 제목이 생각이 안 나",
    openDt: "2023-02-21",
    picture: "https://i.ibb.co/JsZBDpY/poster2.jpg",
  },
  {
    rnum: "11",
    rank: "11",
    movieNm: "영화 제목이 생각이 안 나",
    openDt: "2023-02-21",
    picture: "https://i.ibb.co/JsZBDpY/poster2.jpg",
  },
  {
    rnum: "12",
    rank: "12",
    movieNm: "영화 제목이 생각이 안 나",
    openDt: "2023-02-21",
    picture: "https://i.ibb.co/JsZBDpY/poster2.jpg",
  },
];

const RANK: any = {
  first: <MaterialCommunityIcons name="trophy-award" size={20} color="gold" />,
  second: (
    <MaterialCommunityIcons name="trophy-award" size={20} color="silver" />
  ),
  third: (
    <MaterialCommunityIcons
      name="trophy-award"
      size={20}
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
  <View style={styles.item}>
    <TouchableOpacity>
      <ImageBackground
        source={{ uri: picture }}
        style={styles.movie_image}
        resizeMode={"contain"}
      />
    </TouchableOpacity>
    <View style={styles.movie_explain}>
      <Text style={styles.movieNm}>{movieNm}</Text>
      <Text style={{ fontSize: responsiveFontSize(1.5), color: "white" }}>
        {(() => {
          if (+rank === 1) return RANK.first;
          else if (+rank === 2) return RANK.second;
          else if (+rank === 3) return RANK.third;
          else return RANK.remain;
        })()}
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
        한 회계연도를 넘어 계속하여 지출할 필요가 있을 때에는 정부는 연한을
        정하여 계속비로서 국회의 의결을 얻어야 한다.
      </Text>
    </View>
    <StatusBar style="light"></StatusBar>
  </View>
);

export default function MovieList() {
  const [imageMo, setImageMo] = useState(false);
  return (
    <View style={styles.list}>
      <View style={styles.banner}>
        <ImageBackground
          source={require("../../img/Zootopia-Banner.jpg")}
          style={{ flex: 1 }}
        />
      </View>
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
      />
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    backgroundColor: "rgb(22, 22, 22)",
    justifyContent: "center",
  },
  banner: {
    flex: 0.2,
  },
  container: {
    flex: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  item: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "rgb(66, 66, 66)",
    width: responsiveWidth(97),
    height: responsiveHeight(20),
    paddingVertical: 15,
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: "grey",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.35,
    shadowRadius: 3.3,
    elevation: 24,
  },
  movie_image: {
    width: responsiveWidth(25),
    height: responsiveHeight(30),
    marginVertical: 0,
    marginHorizontal: 11,
  },
  movie_explain: {
    flex: 1.8,
    margin: 10,
    height: responsiveHeight(15),
  },
  movieNm: {
    fontSize: responsiveFontSize(3),
    color: "white",
    borderBottomWidth: 1,
    borderBottomColor: "gold",
  },
  movieEx: {
    fontSize: responsiveFontSize(2),
    color: "white",
    marginTop: responsiveHeight(1),
  },
});
