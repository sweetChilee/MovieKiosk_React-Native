import { View, StyleSheet, Text, Dimensions } from "react-native";
import { responsiveFontSize } from "react-native-responsive-dimensions";
import { COLOR, SCREEN_FONT } from "../../config/globalstyles";
import Map from "./Map";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import InfoHelpComment from "../help/InfoHelpComment";

export const INFO_FONT = Dimensions.get("window").width > 500 ? 24 : 10;
export const INFO_THEATER_FONT = Dimensions.get("window").width > 500 ? 24 : 15;
export const INFO_TITLE_FONT = Dimensions.get("window").width > 500 ? 52 : 32;

export const INFO_ICON = Dimensions.get("window").width > 500 ? 100 : 50;
export const INFO_ACTIVE_ICON = Dimensions.get("window").width > 500 ? 120 : 70;

export default function Info() {
  const [theater, setTheater] = useState(false);
  const [toilet, setToilet] = useState(false);
  const [ticket, setTicket] = useState(false);
  const [info, setInfo] = useState(false);
  const [snack, setSnack] = useState(false);
  const [emergency, setEmergency] = useState(false);
  const [exit, setExit] = useState(false);

  return (
    <>
      <View style={styles.TheaterPhoto}>
        <Map />
      </View>
      <View
        style={{
          flex: 0.007,
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgb(66, 66, 66)",
        }}
      >
        <View style={{ flex: 1, width: "90%", backgroundColor: COLOR }}></View>
      </View>
      <Text
        style={{
          color: "white",
          fontWeight: "900",
          fontSize: INFO_TITLE_FONT,
          backgroundColor: "rgb(66, 66, 66)",
          paddingTop: 20,
          paddingLeft: 20,
        }}
      >
        <Text style={{ color: COLOR }}>The</Text>ater
      </Text>
      <Text
        style={{
          fontSize: INFO_FONT,
          backgroundColor: "rgb(66, 66, 66)",
          color: "white",
          paddingLeft: 15,
          fontWeight: "700",
        }}
      >
        상영관 / 화장실 / 매표소 / 안내데스크 / 스낵 코너 / 비상 대피로 / 출입구
      </Text>
      <View style={styles.TheaterExplain}>
        <View style={{ flex: 1 }}>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            {theater ? (
              <MaterialCommunityIcons
                name="theater"
                size={Dimensions.get("window").width > 500 ? 200 : 120}
                color="rgb(167, 77, 191)"
                onPress={() => {
                  setTheater(!theater);
                }}
              />
            ) : (
              <MaterialCommunityIcons
                name="theater"
                size={Dimensions.get("window").width > 500 ? 170 : 100}
                color="white"
                onPress={() => {
                  setTheater(!theater);
                }}
              />
            )}
          </View>
          <View style={styles.TheaterEx1}>
            <Text style={styles.TheaterTitleNum}>1관</Text>
            <Text style={styles.TheaterTitleNum}>2관</Text>
            <Text style={styles.TheaterTitleNum}>3관</Text>
          </View>
          <View style={styles.TheaterEx2}>
            <Text style={styles.TheaterTitleNum}>4관</Text>
            <Text style={styles.TheaterTitleNum}>5관</Text>
            <Text style={styles.TheaterTitleNum}>6관</Text>
          </View>
        </View>

        <View style={styles.TheaterEx3}>
          {toilet ? (
            <View style={{ alignItems: "center" }}>
              <MaterialCommunityIcons
                name="human-male-female"
                size={INFO_ACTIVE_ICON}
                color="rgb(167, 77, 191)"
                onPress={() => {
                  setToilet(!toilet);
                }}
              />
              <Text style={styles.TheaterTitle}>화장실</Text>
            </View>
          ) : (
            <View style={{ alignItems: "center" }}>
              <MaterialCommunityIcons
                name="human-male-female"
                size={INFO_ICON}
                color="white"
                onPress={() => {
                  setToilet(!toilet);
                }}
              />
              <Text style={styles.TheaterTitle}>화장실</Text>
            </View>
          )}

          {ticket ? (
            <View style={{ alignItems: "center" }}>
              <MaterialCommunityIcons
                name="ticket"
                size={INFO_ACTIVE_ICON}
                color="rgb(167, 77, 191)"
                onPress={() => {
                  setTicket(!ticket);
                }}
              />
              <Text style={styles.TheaterTitle}>매표소</Text>
            </View>
          ) : (
            <View style={{ alignItems: "center" }}>
              <MaterialCommunityIcons
                name="ticket"
                size={INFO_ICON}
                color="white"
                onPress={() => {
                  setTicket(!ticket);
                }}
              />
              <Text style={styles.TheaterTitle}>매표소</Text>
            </View>
          )}
        </View>
        <View style={styles.TheaterEx3}>
          {info ? (
            <View style={{ alignItems: "center" }}>
              <MaterialCommunityIcons
                name="information-outline"
                size={INFO_ACTIVE_ICON}
                color="rgb(167, 77, 191)"
                onPress={() => {
                  setInfo(!info);
                }}
              />
              <Text
                style={{
                  ...styles.TheaterTitle,
                  fontSize: INFO_FONT,
                }}
              >
                안내 데스크
              </Text>
            </View>
          ) : (
            <View style={{ alignItems: "center" }}>
              <MaterialCommunityIcons
                name="information-outline"
                size={INFO_ICON}
                color="white"
                onPress={() => {
                  setInfo(!info);
                }}
              />
              <Text
                style={{
                  ...styles.TheaterTitle,
                  fontSize: INFO_FONT,
                }}
              >
                안내 데스크
              </Text>
            </View>
          )}

          {snack ? (
            <View style={{ alignItems: "center" }}>
              <MaterialCommunityIcons
                name="popcorn"
                size={INFO_ACTIVE_ICON}
                color="rgb(168, 77, 191)"
                onPress={() => {
                  setSnack(!snack);
                }}
              />
              <Text style={styles.TheaterTitle}>스낵 코너</Text>
            </View>
          ) : (
            <View style={{ alignItems: "center" }}>
              <MaterialCommunityIcons
                name="popcorn"
                size={INFO_ICON}
                color="white"
                onPress={() => {
                  setSnack(!snack);
                }}
              />
              <Text style={styles.TheaterTitle}>스낵 코너</Text>
            </View>
          )}
        </View>
        <View style={styles.TheaterEx3}>
          {emergency ? (
            <View style={{ alignItems: "center" }}>
              <MaterialCommunityIcons
                name="exit-run"
                size={INFO_ACTIVE_ICON}
                color="rgb(167, 77, 191)"
                onPress={() => {
                  setEmergency(!emergency);
                }}
              />

              <Text style={styles.TheaterTitle}>비상 대피로</Text>
            </View>
          ) : (
            <View style={{ alignItems: "center" }}>
              <MaterialCommunityIcons
                name="exit-run"
                size={INFO_ICON}
                color="white"
                onPress={() => {
                  setEmergency(!emergency);
                }}
              />

              <Text style={styles.TheaterTitle}>비상 대피로</Text>
            </View>
          )}
          {exit ? (
            <View style={{ alignItems: "center" }}>
              <MaterialCommunityIcons
                name="door-sliding"
                size={INFO_ACTIVE_ICON}
                color="rgb(168, 77, 191)"
                onPress={() => {
                  setExit(!exit);
                }}
              />
              <Text style={styles.TheaterTitle}>출입구</Text>
            </View>
          ) : (
            <View style={{ alignItems: "center" }}>
              <MaterialCommunityIcons
                name="door-sliding"
                size={INFO_ICON}
                color="white"
                onPress={() => {
                  setExit(!exit);
                }}
              />
              <Text style={styles.TheaterTitle}>출입구</Text>
            </View>
          )}
        </View>
        <InfoHelpComment />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  TheaterPhoto: {
    flex: 2.2,
    backgroundColor: "rgb(66,66,66)",
  },
  TheaterExplain: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "rgb(66,66,66)",
    paddingVertical: 10,
  },
  TheaterEx1: {
    flex: 0.3,
    flexDirection: "row",
    justifyContent: "center",
    fontSize: INFO_FONT,
  },
  TheaterEx2: {
    flex: 0.3,
    flexDirection: "row",
    justifyContent: "center",
    fontSize: INFO_FONT,
  },
  TheaterEx3: {
    flex: 0.5,
    margin: 7,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  TheaterTitle: {
    fontSize: INFO_FONT,
    color: "white",
    margin: 10,
  },
  TheaterTitleNum: {
    fontSize: INFO_THEATER_FONT,
    color: "white",
    margin: 10,
  },
});
