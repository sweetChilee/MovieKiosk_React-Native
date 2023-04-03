import { View, StyleSheet, Text } from "react-native";
import { COLOR, SCREEN_HEIGHT } from "../../../config/globalstyles";
import Map from "../Map";
import { useState } from "react";
import TheaterIcon from "../../../component/TheaterIcon";
import TheaterActiveIcon from "../../../component/TheaterActiveIcon";
import InfoOverlay from "./InfoOverlay";
import { Feather } from "@expo/vector-icons";

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
          fontSize: SCREEN_HEIGHT / 25,
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
              <InfoOverlay
                isVisible={theater}
                videoSrc={require("../../../assets/videos/01cinemax4.mp4")}
              >
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
              <InfoOverlay
                isVisible={theater2}
                videoSrc={require("../../../assets/videos/02cinemax4.mp4")}
              >
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
              <InfoOverlay
                isVisible={theater3}
                videoSrc={require("../../../assets/videos/03cinemax4.mp4")}
              >
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
              <InfoOverlay
                isVisible={theater4}
                videoSrc={require("../../../assets/videos/04cinemax4.mp4")}
              >
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
              <InfoOverlay
                isVisible={theater5}
                videoSrc={require("../../../assets/videos/05cinemax4.mp4")}
              >
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
              <InfoOverlay
                isVisible={theater6}
                videoSrc={require("../../../assets/videos/06cinemax4.mp4")}
              >
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
    paddingVertical: SCREEN_HEIGHT / 120,
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
    fontSize: SCREEN_HEIGHT / 45,
    color: "white",
    margin: SCREEN_HEIGHT / 100,
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.7,
    shadowRadius: 2,
  },
});
