import React, { useRef, useState } from "react";
import { Button, Overlay } from "react-native-elements";
import {
  View,
  Text,
  Animated,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { COLOR, SCREEN_HEIGHT, SCREEN_WIDTH } from "../../config/globalstyles";

const HelpComment = () => {
  const [visible, setVisible] = useState(true);
  const [count, setCount] = useState(0);

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim2 = useRef(new Animated.Value(0)).current;
  const fadeAnim3 = useRef(new Animated.Value(0)).current;
  const fadeAnim4 = useRef(new Animated.Value(0)).current;

  const fadeHelp = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };
  const fadeHelp2 = () => {
    Animated.timing(fadeAnim2, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };
  const fadeHelp3 = () => {
    Animated.timing(fadeAnim3, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };
  const fadeHelp4 = () => {
    Animated.timing(fadeAnim4, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const fadeHelpList = [fadeHelp, fadeHelp2, fadeHelp3, fadeHelp4];

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  return (
    <Overlay
      isVisible={visible}
      backdropStyle={{ backgroundColor: "rgba(66, 66, 66, .8)" }}
      overlayStyle={{
        flex: 1,
        backgroundColor: "transparent",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontSize: 35,
          fontWeight: "900",
          color: "white",
          marginBottom: 20,
        }}
      >
        도움말
      </Text>
      <TouchableOpacity
        style={{
          borderWidth: 5,
          borderColor: "black",
          backgroundColor: COLOR,
          width: SCREEN_WIDTH / 2,
          height: 70,
          borderRadius: 50,
          alignItems: "center",
          justifyContent: "center",
          marginBottom: SCREEN_HEIGHT / 20,
        }}
        activeOpacity={0.7}
        onPress={() => {
          if (count === fadeHelpList.length) {
            toggleOverlay();
          } else {
            fadeHelpList[count]();
            setCount((prev) => prev + 1);
          }
        }}
      >
        {count === 4 ? (
          <Text style={{ fontSize: 35, fontWeight: "800" }}>END</Text>
        ) : (
          <Text style={{ fontSize: 35, fontWeight: "800" }}>NEXT</Text>
        )}
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "700",
          color: "rgba(255, 255, 255, 0.5)",
        }}
        onPress={() => {
          toggleOverlay();
        }}
      >
        SKIP_ _
      </Text>
      <Animated.View
        style={{
          flex: 1,
          position: "absolute",
          bottom: 17,
          right: 110,
          opacity: fadeAnim,
        }}
      >
        <Text style={{ ...styles.comment, marginBottom: 40 }}>
          상영중인 영화를 볼 수 있어요
        </Text>
        <View style={styles.firstHelpBox}>
          <View style={styles.secondHelpBox}></View>
        </View>
      </Animated.View>

      <Animated.View
        style={{
          flex: 1,
          position: "absolute",
          bottom: 17,
          right: -57,
          opacity: fadeAnim2,
        }}
      >
        <Text style={styles.comment}>
          선호 장르를 선택하면 영화를 추천해줘요
        </Text>
        <View style={styles.firstHelpBox}>
          <View style={styles.secondHelpBox}></View>
        </View>
      </Animated.View>
      <Animated.View
        style={{
          flex: 1,
          position: "absolute",
          bottom: 17,
          right: -91,
          opacity: fadeAnim3,
        }}
      >
        <Text style={{ ...styles.comment, marginBottom: 40 }}>
          장소 위치 정보를 알 수 있어요
        </Text>
        <View style={styles.firstHelpBox}>
          <View style={styles.secondHelpBox}></View>
        </View>
      </Animated.View>
      <Animated.View
        style={{
          flex: 1,
          position: "absolute",
          bottom: 17,
          right: -232,
          opacity: fadeAnim4,
        }}
      >
        <Text style={{ ...styles.comment, marginBottom: 80 }}>
          스낵바에 무슨 메뉴가 있는지 볼까요?
        </Text>
        <View style={styles.firstHelpBox}>
          <View style={styles.secondHelpBox}></View>
        </View>
      </Animated.View>
    </Overlay>
  );
};

export default HelpComment;

const styles = StyleSheet.create({
  firstHelpBox: {
    borderWidth: 5,
    borderColor: "black",
    borderRadius: 50,
    width: 75,
    height: 70,
  },
  secondHelpBox: {
    borderWidth: 3,
    borderColor: COLOR,
    borderRadius: 50,
    width: 65,
    height: 60,
  },
  comment: {
    color: "white",
    fontSize: 20,
    marginBottom: 60,
    fontWeight: "700",
  },
});
