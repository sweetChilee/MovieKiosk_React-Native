import { View, StyleSheet, Text, Dimensions, Modal } from "react-native";
import {
  COLOR,
  SCREEN_FONT,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
} from "../../../config/globalstyles";
import Map from "../Map";
import { useState } from "react";
import InfoHelpComment from "../../help/InfoHelpComment";
import TheaterIcon from "../../../component/TheaterIcon";
import TheaterActiveIcon from "../../../component/TheaterActiveIcon";
import InfoOverlay from "./InfoOverlay";
import { Feather } from "@expo/vector-icons";

export const INFO_FONT = Dimensions.get("window").width > 500 ? 24 : 10;
export const INFO_THEATER_FONT = Dimensions.get("window").width > 500 ? 24 : 15;
export const INFO_TITLE_FONT = Dimensions.get("window").width > 500 ? 52 : 32;

export default function Info() {
  const [theater, setTheater] = useState(false);

  const [theater2, setTheater2] = useState(false);
  const [theater3, setTheater3] = useState(false);
  const [theater4, setTheater4] = useState(false);
  const [theater5, setTheater5] = useState(false);
  const [theater6, setTheater6] = useState(false);

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
      <View style={styles.TheaterExplain}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <View style={styles.theaterIconArea}>
            {theater ? (
              <>
                <TheaterActiveIcon
                  onPress={() => {
                    setTheater(!theater);
                  }}
                ></TheaterActiveIcon>
                <Text style={styles.TheaterTitleNum}>1관</Text>
              </>
            ) : (
              <>
                <TheaterIcon
                  onPress={() => {
                    setTheater(!theater);
                  }}
                ></TheaterIcon>
                <Text style={styles.TheaterTitleNum}>1관</Text>
              </>
            )}
            {theater ? (
              <InfoOverlay isVisible={theater}>
                <Feather
                  name="x"
                  size={50}
                  color="black"
                  style={{ position: "absolute", bottom: 0, right: 0 }}
                  onPress={() => {
                    setTheater(!theater);
                  }}
                />
              </InfoOverlay>
            ) : null}
          </View>
          <View style={styles.theaterIconArea}>
            {theater2 ? (
              <>
                <TheaterActiveIcon
                  onPress={() => {
                    setTheater2(!theater2);
                  }}
                ></TheaterActiveIcon>
                <Text style={styles.TheaterTitleNum}>2관</Text>
              </>
            ) : (
              <>
                <TheaterIcon
                  onPress={() => {
                    setTheater2(!theater2);
                  }}
                ></TheaterIcon>
                <Text style={styles.TheaterTitleNum}>2관</Text>
              </>
            )}
            {theater2 ? (
              <InfoOverlay isVisible={theater2} vs={"예고편.mp4"}>
                <Feather
                  name="x"
                  size={50}
                  color="black"
                  style={{ position: "absolute", bottom: 0, right: 0 }}
                  onPress={() => {
                    setTheater2(!theater2);
                  }}
                />
              </InfoOverlay>
            ) : null}
          </View>
          <View style={styles.theaterIconArea}>
            {theater3 ? (
              <>
                <TheaterActiveIcon
                  onPress={() => {
                    setTheater3(!theater3);
                  }}
                ></TheaterActiveIcon>
                <Text style={styles.TheaterTitleNum}>3관</Text>
              </>
            ) : (
              <>
                <TheaterIcon
                  onPress={() => {
                    setTheater3(!theater3);
                  }}
                ></TheaterIcon>
                <Text style={styles.TheaterTitleNum}>3관</Text>
              </>
            )}
            {theater3 ? (
              <InfoOverlay isVisible={theater3}>
                <Feather
                  name="x"
                  size={50}
                  color="black"
                  style={{ position: "absolute", bottom: 0, right: 0 }}
                  onPress={() => {
                    setTheater3(!theater3);
                  }}
                />
              </InfoOverlay>
            ) : null}
          </View>
        </View>
        <View style={styles.theaterArea}>
          <View style={styles.theaterIconArea}>
            {theater4 ? (
              <>
                <TheaterActiveIcon
                  onPress={() => {
                    setTheater4(!theater4);
                  }}
                ></TheaterActiveIcon>
                <Text style={styles.TheaterTitleNum}>4관</Text>
              </>
            ) : (
              <>
                <TheaterIcon
                  onPress={() => {
                    setTheater4(!theater4);
                  }}
                ></TheaterIcon>
                <Text style={styles.TheaterTitleNum}>4관</Text>
              </>
            )}
            {theater4 ? (
              <InfoOverlay isVisible={theater4}>
                <Feather
                  name="x"
                  size={50}
                  color="black"
                  style={{ position: "absolute", bottom: 0, right: 0 }}
                  onPress={() => {
                    setTheater4(!theater4);
                  }}
                />
              </InfoOverlay>
            ) : null}
            {theater4 ? (
              <InfoOverlay isVisible={theater4}>
                <Feather
                  name="x"
                  size={50}
                  color="black"
                  style={{ position: "absolute", bottom: 0, right: 0 }}
                  onPress={() => {
                    setTheater4(!theater4);
                  }}
                />
              </InfoOverlay>
            ) : null}
          </View>
          <View style={styles.theaterIconArea}>
            {theater5 ? (
              <>
                <TheaterActiveIcon
                  onPress={() => {
                    setTheater5(!theater5);
                  }}
                ></TheaterActiveIcon>
                <Text style={styles.TheaterTitleNum}>5관</Text>
              </>
            ) : (
              <>
                <TheaterIcon
                  onPress={() => {
                    setTheater5(!theater5);
                  }}
                ></TheaterIcon>
                <Text style={styles.TheaterTitleNum}>5관</Text>
              </>
            )}
            {theater5 ? (
              <InfoOverlay isVisible={theater5}>
                <Feather
                  name="x"
                  size={50}
                  color="black"
                  style={{ position: "absolute", bottom: 0, right: 0 }}
                  onPress={() => {
                    setTheater5(!theater5);
                  }}
                />
              </InfoOverlay>
            ) : null}
          </View>
          <View style={styles.theaterIconArea}>
            {theater6 ? (
              <>
                <TheaterActiveIcon
                  onPress={() => {
                    setTheater6(!theater6);
                  }}
                ></TheaterActiveIcon>
                <Text style={styles.TheaterTitleNum}>6관</Text>
              </>
            ) : (
              <>
                <TheaterIcon
                  onPress={() => {
                    setTheater6(!theater6);
                  }}
                ></TheaterIcon>
                <Text style={styles.TheaterTitleNum}>6관</Text>
              </>
            )}
            {theater6 ? (
              <InfoOverlay isVisible={theater6}>
                <Feather
                  name="x"
                  size={50}
                  color="black"
                  style={{ position: "absolute", bottom: 0, right: 0 }}
                  onPress={() => {
                    setTheater6(!theater6);
                  }}
                />
              </InfoOverlay>
            ) : null}
          </View>
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
  theaterArea: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  theaterIconArea: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  TheaterTitleNum: {
    fontSize: INFO_THEATER_FONT,
    color: "white",
    margin: 10,
  },
});
