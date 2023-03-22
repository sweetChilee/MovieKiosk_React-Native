import React, { useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
  Animated,
} from "react-native";
import Line from "../../../component/Line";
import { COLOR, SCREEN_WIDTH } from "../../../config/globalstyles";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import RecommendResultPoster from "./RecommendResultPoster";

const { width, height } = Dimensions.get("window");

const image = [
  {
    id: 1,
    name: "대외비",
    src: "https://img1.daumcdn.net/thumb/C408x596/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2Fdae69d91dee05da54a630cb63c10109366ccac90",
    string:
      "“몰랐나? 원래 세상은 더럽고, 인생은 서럽다.” 1992년 부산, 밑바닥 정치 인생을 끝내고 싶은 만년 국회의원 후보 ‘해웅’. ‘해웅’은 이번 선거에서만큼은 금뱃지를 달 것이라 확신했지만, 정치판을 뒤흔드는 권력 실세 ‘순태’에게 버림받으며 지역구 공천에서 탈락한다. “누가 센 지는 손에 뭘 쥐고 있는가 보라 안 했습니까?” ‘순태’에 의해 짜여진 선거판을 뒤집기 위해 부산 지역 재개발 계획이 담긴 대외비 문서를 입수한 ‘해웅’. 행동파 조폭 ‘필도’를 통해 선거 자금까지 마련한 ‘해웅’은 무소속으로 선거판에 뛰어들어 승승장구한다. ‘순태’ 역시 ‘해웅’이 가진 대외비 문서의 존재를 알게 되고, 점차 ‘해웅’의 숨통을 조여오는데… 대한민국을 뒤집을 비밀 문서, 이 판을 뒤집는 놈이 대한민국을 뒤집는다!",
  },
  {
    id: 2,
    name: "귀멸의 칼날",
    src: "https://img1.daumcdn.net/thumb/C408x596/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F2c32ea586013cd5cdf8537bad4bbdf727498b58a",
    string:
      "혈귀가 숨어있는 거리에 잠입한 탄지로 일행.  강력한 상현 6 혈귀 남매 규타로 & 다키와의 전투 끝에 탄지로 일행은 궁지에 몰린다.절체절명 위기의 순간에도 흔들리지 않는 곧은 의지로 규타로에 맞서는 탄지로, 젠이츠, 이노스케 그리고 음주 우즈이 텐겐. 환락의 거리 속 혈귀를 쓰러트리기 위한 그들의 치열한 전투가 시작된다. 한편, 키부츠지 무잔은 무한성에 상현 혈귀들을 소집시키고 탄지로는 새로운 칼을 찾아 도공 마을로 향하는데...",
  },
  {
    id: 3,
    name: "슬램덩크",
    src: "https://img1.daumcdn.net/thumb/C408x596/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2Fa0aaca4b87c541b11085139bd941da0996a78ec1",
    string:
      "1990년부터 1996년까지 ‘주간 소년 점프’(슈에이샤)에서 연재된 만화 ‘슬램덩크’는 한 번도 농구를 해본 적 없는 풋내기 강백호가 북산고교 농구부에서 겪는 성장 스토리를 그린 작품으로 전 세계에서 사랑받은 레전드 스포츠 만화다. ",
  },
];

export default function RecommendResult() {
  const [firstPoster, setFirstPoster] = useState(true);
  const [secondPoster, setSecondPoster] = useState(false);
  const [thirdPoster, setThirdPoster] = useState(false);

  const anim = useRef(new Animated.Value(0)).current;

  Animated.timing(anim, {
    toValue: 1,
    duration: 5000,
    useNativeDriver: true,
  }).start();

  return (
    <View style={styles.container}>
      <View style={styles.mainimage}>
        {(() => {
          if (firstPoster)
            return (
              <Image
                source={{ uri: image[0].src }}
                style={{ width: "100%", height: "65%", resizeMode: "contain" }}
              />
            );
          else if (secondPoster)
            return (
              <Image
                source={{ uri: image[1].src }}
                style={{ width: "100%", height: "65%", resizeMode: "contain" }}
              />
            );
          else thirdPoster;
          return (
            <Image
              source={{ uri: image[2].src }}
              style={{ width: "100%", height: "65%", resizeMode: "contain" }}
            />
          );
        })()}
        {(() => {
          if (firstPoster)
            return (
              <Text
                style={{
                  ...styles.maintext,
                  textAlign: "center",
                  fontSize: 32,
                  fontWeight: "900",
                }}
              >
                {image[0].name}
              </Text>
            );
          else if (secondPoster)
            return (
              <Text
                style={{
                  ...styles.maintext,
                  textAlign: "center",
                  fontSize: 24,
                }}
              >
                {image[1].name}
              </Text>
            );
          else thirdPoster;
          return (
            <Text
              style={{ ...styles.maintext, textAlign: "center", fontSize: 24 }}
            >
              {image[2].name}
            </Text>
          );
        })()}
        {(() => {
          if (firstPoster)
            return (
              <ScrollView>
                <Text style={{ ...styles.maintext }}>{image[0].string}</Text>
              </ScrollView>
            );
          else if (secondPoster)
            return (
              <ScrollView>
                <Text style={{ ...styles.maintext }}>{image[1].string}</Text>
              </ScrollView>
            );
          else thirdPoster;
          return (
            <ScrollView>
              <Text style={{ ...styles.maintext }}>{image[2].string}</Text>
            </ScrollView>
          );
        })()}
      </View>
      <View style={{ alignItems: "center" }}>
        <Line width1={"90%"} />
      </View>
      <View style={{ flex: 0.05, backgroundColor: "rgb(66, 66, 66)" }}>
        <Text
          style={{
            color: "white",
            fontSize: SCREEN_WIDTH / 30,
            fontWeight: "900",
            textAlign: "center",
          }}
        >
          <MaterialIcons name="recommend" size={20} color={COLOR} /> 추천 결과{" "}
          <MaterialIcons name="recommend" size={20} color={COLOR} />
        </Text>
      </View>
      <View style={styles.subimage}>
        <View style={{ flex: 1, margin: 20 }}>
          <Text style={styles.rankText}>
            <AntDesign name="star" size={SCREEN_WIDTH / 40} color="gold" /> 1
            순위
          </Text>
          {firstPoster ? (
            <Animated.View style={{ ...styles.outBox }}>
              <View style={styles.inBox}>
                <RecommendResultPoster
                  onPress={() => {
                    setFirstPoster(true);
                    setSecondPoster(false);
                    setThirdPoster(false);
                  }}
                  URI={image[0].src}
                  height={"100%"}
                  borderRadius={20}
                />
              </View>
            </Animated.View>
          ) : (
            <RecommendResultPoster
              onPress={() => {
                setFirstPoster(true);
                setSecondPoster(false);
                setThirdPoster(false);
              }}
              URI={image[0].src}
              height={"90%"}
            />
          )}
        </View>
        <View style={{ flex: 1, margin: 20 }}>
          <Text style={styles.rankText}>
            <AntDesign name="star" size={SCREEN_WIDTH / 40} color="silver" />2
            순위
          </Text>
          {secondPoster ? (
            <Animated.View style={{ ...styles.outBox }}>
              <View style={styles.inBox}>
                <RecommendResultPoster
                  onPress={() => {
                    setSecondPoster(true);
                    setFirstPoster(false);
                    setThirdPoster(false);
                  }}
                  URI={image[1].src}
                  height={"100%"}
                  borderRadius={20}
                />
              </View>
            </Animated.View>
          ) : (
            <RecommendResultPoster
              onPress={() => {
                setSecondPoster(true);
                setFirstPoster(false);
                setThirdPoster(false);
              }}
              URI={image[1].src}
              height={"90%"}
            />
          )}
        </View>
        <View
          style={{
            flex: 1,
            margin: 10,
          }}
        >
          <Text style={styles.rankText}>
            <AntDesign
              name="star"
              size={SCREEN_WIDTH / 40}
              color="rgb(205, 127, 50)"
            />{" "}
            3 순위
          </Text>
          {thirdPoster ? (
            <Animated.View style={{ ...styles.outBox }}>
              <View style={styles.inBox}>
                <RecommendResultPoster
                  onPress={() => {
                    setThirdPoster(true);
                    setFirstPoster(false);
                    setSecondPoster(false);
                  }}
                  URI={image[2].src}
                  height={"100%"}
                  borderRadius={20}
                />
              </View>
            </Animated.View>
          ) : (
            <RecommendResultPoster
              onPress={() => {
                setThirdPoster(true);
                setFirstPoster(false);
                setSecondPoster(false);
              }}
              URI={image[2].src}
              height={"90%"}
            />
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(66, 66, 66)",
    width: width,
    height: height,
  },
  mainimage: {
    flex: 0.75,
    width: width,
  },
  maintext: {
    width: "100%",
    color: "white",
    fontSize: 18,
    fontWeight: "600",
    lineHeight: 30,
  },
  subimage: {
    flex: 0.5,
    flexDirection: "row",
    backgroundColor: "rgb(66, 66, 66)",
    width: width,
    justifyContent: "space-around",
    alignItems: "center",
  },
  subitem: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  rankText: {
    color: "white",
    fontSize: SCREEN_WIDTH / 45,
    fontWeight: "600",
    textAlign: "center",
  },
  outBox: {
    flex: 1,
    marginTop: SCREEN_WIDTH / 80,
    borderWidth: 5,
    borderColor: "black",
    borderRadius: 30,
    shadowColor: "black",
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.5,
    shadowRadius: 7,
    elevation: 24,
  },
  inBox: {
    flex: 1,
    borderWidth: 5,
    borderColor: COLOR,
    borderRadius: 25,
  },
});
