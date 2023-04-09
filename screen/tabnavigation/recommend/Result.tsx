import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Line from "../../../component/Line";
import { COLOR, SCREEN_HEIGHT } from "../../../config/globalstyles";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import RecommendResultPoster from "./RecommendResultPoster";
import { resultURL } from "./FilteredMovie";
import { todayDate } from "../../list/getBoxOfficeData";
import RecommendMainPoster from "../../../component/RecommendMainPoster";
import LoadingPage from "./LoadingPage";

export default function Result() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<any>([]);
  const [data2, setData2] = useState<any>([]);
  const [data3, setData3] = useState<any>([]);

  const getRecommendResult = async () => {
    try {
      const res = await fetch(resultURL);
      const Json = await res.json();
      const parJson = await JSON.parse(Json);
      const dataNumber = [
        parJson.data["1"] - 1,
        parJson.data["2"] - 1,
        parJson.data["3"] - 1,
      ];

      const dataUrl = [];
      for (let i = 0; i <= dataNumber.length; i++) {
        dataUrl.push(
          `https://port-0-sixman-movie-r8xoo2mlenkvdnc.sel3.cloudtype.app/${todayDate()}/${
            dataNumber[i]
          }`
        );
      }

      const response1 = await fetch(dataUrl[0]);
      const response2 = await fetch(dataUrl[1]);
      const response3 = await fetch(dataUrl[2]);

      const Json1 = await response1.json();
      const Json2 = await response2.json();
      const Json3 = await response3.json();

      setData(Json1);
      setData2(Json2);
      setData3(Json3);

      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  getRecommendResult();

  const [firstPoster, setFirstPoster] = useState(true);
  const [secondPoster, setSecondPoster] = useState(false);
  const [thirdPoster, setThirdPoster] = useState(false);
  return (
    <>
      {isLoading ? (
        <LoadingPage />
      ) : (
        <View style={{ flex: 1, backgroundColor: "rgb(66, 66, 66)" }}>
          {(() => {
            if (firstPoster) {
              return (
                <View style={{ flex: 1.2, flexDirection: "row" }}>
                  <RecommendMainPoster
                    color="gold"
                    url={data.posterUrl}
                    titleNm={data.koTitle}
                    // genreNm={data.genreNm[0].genreNm}
                    ex={data.tmdbOverview}
                  ></RecommendMainPoster>
                </View>
              );
            } else if (secondPoster) {
              return (
                <View style={{ flex: 1.2, flexDirection: "row" }}>
                  <RecommendMainPoster
                    color="silver"
                    url={data2.posterUrl}
                    titleNm={data2.koTitle}
                    // genreNm={data2.genreNm[0].genreNm}
                    // actorNm={data.koTitle}
                    ex={data2.tmdbOverview}
                  ></RecommendMainPoster>
                </View>
              );
            } else if (thirdPoster) {
              return (
                <View style={{ flex: 1.2, flexDirection: "row" }}>
                  <RecommendMainPoster
                    color={"rgb(205, 127, 50)"}
                    url={data3.posterUrl}
                    titleNm={data3.koTitle}
                    // genreNm={
                    //   data3.genreNm[0].genreNm + "," + data3.genreNm[1].genreNm
                    // }
                    // actorNm={data.koTitle}
                    ex={data3.tmdbOverview}
                  ></RecommendMainPoster>
                </View>
              );
            }
          })()}
          <View style={{ flex: 1.2 }}>
            <Line />
            <Text
              style={{
                color: "white",
                fontSize: SCREEN_HEIGHT / 35,
                fontWeight: "900",
                textAlign: "center",
                marginVertical: 10,
              }}
            >
              <MaterialIcons
                name="recommend"
                size={SCREEN_HEIGHT / 45}
                color={COLOR}
              />{" "}
              추천 결과{" "}
              <MaterialIcons
                name="recommend"
                size={SCREEN_HEIGHT / 45}
                color={COLOR}
              />
            </Text>
            <View style={{ flex: 1 }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  margin: 10,
                }}
              >
                <Text style={styles.rankText}>
                  <AntDesign
                    name="star"
                    size={SCREEN_HEIGHT / 50}
                    color="gold"
                  />{" "}
                  1 순위
                </Text>
                <Text style={styles.rankText}>
                  <AntDesign
                    name="star"
                    size={SCREEN_HEIGHT / 50}
                    color="silver"
                  />{" "}
                  2 순위
                </Text>
                <Text style={styles.rankText}>
                  <AntDesign
                    name="star"
                    size={SCREEN_HEIGHT / 50}
                    color="rgb(205, 127, 50)"
                  />{" "}
                  3 순위
                </Text>
              </View>
              <View style={{ flex: 1, flexDirection: "row" }}>
                <View style={{ flex: 1, margin: 10 }}>
                  {firstPoster ? (
                    <View style={{ ...styles.outBox }}>
                      <View style={styles.inBox}>
                        <RecommendResultPoster
                          onPress={() => {
                            setFirstPoster(true);
                            setSecondPoster(false);
                            setThirdPoster(false);
                          }}
                          URI={data.posterUrl}
                          height={"100%"}
                          borderRadius={50}
                        />
                      </View>
                    </View>
                  ) : (
                    <RecommendResultPoster
                      onPress={() => {
                        setFirstPoster(true);
                        setSecondPoster(false);
                        setThirdPoster(false);
                      }}
                      URI={data.posterUrl}
                      height={"100%"}
                    />
                  )}
                </View>
                <View style={{ flex: 1, margin: 10 }}>
                  {secondPoster ? (
                    <View style={{ ...styles.outBox }}>
                      <View style={styles.inBox}>
                        <RecommendResultPoster
                          onPress={() => {
                            setSecondPoster(true);
                            setFirstPoster(false);
                            setThirdPoster(false);
                          }}
                          URI={data2.posterUrl}
                          height={"100%"}
                          borderRadius={50}
                        />
                      </View>
                    </View>
                  ) : (
                    <RecommendResultPoster
                      onPress={() => {
                        setSecondPoster(true);
                        setFirstPoster(false);
                        setThirdPoster(false);
                      }}
                      URI={data2.posterUrl}
                      height={"100%"}
                    />
                  )}
                </View>
                <View style={{ flex: 1, margin: 10 }}>
                  {thirdPoster ? (
                    <View style={{ ...styles.outBox }}>
                      <View style={styles.inBox}>
                        <RecommendResultPoster
                          onPress={() => {
                            setFirstPoster(false);
                            setSecondPoster(false);
                            setThirdPoster(true);
                          }}
                          URI={data3.posterUrl}
                          height={"100%"}
                          borderRadius={50}
                        />
                      </View>
                    </View>
                  ) : (
                    <RecommendResultPoster
                      onPress={() => {
                        setFirstPoster(false);
                        setSecondPoster(false);
                        setThirdPoster(true);
                      }}
                      URI={data3.posterUrl}
                      height={"100%"}
                    />
                  )}
                </View>
              </View>
            </View>
          </View>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  rankText: {
    color: "white",
    fontSize: SCREEN_HEIGHT / 50,
    fontWeight: "600",
    textAlign: "center",
  },
  outBox: {
    flex: 1,
    borderWidth: SCREEN_HEIGHT / 150,
    borderColor: "black",
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
    borderWidth: SCREEN_HEIGHT / 150,
    borderColor: COLOR,
  },
});
