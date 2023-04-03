import React, { useRef, useState } from "react";
import { Button, Overlay } from "react-native-elements";
import {
  View,
  Text,
  Animated,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { COLOR, SCREEN_HEIGHT, SCREEN_WIDTH } from "../../config/globalstyles";

const SCREEN_FLEX = Dimensions.get("window").width > 500 ? 0.55 : 1.3;
const SCREEN_BOX = Dimensions.get("window").width > 500 ? 170 : 80;
const HELP_FONT = Dimensions.get("window").width > 500 ? 23 : 12;

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
      <View
        style={{ flex: 10, justifyContent: "center", alignItems: "center" }}
      >
        <Text
          style={{
            fontSize: SCREEN_HEIGHT / 35,
            fontWeight: "900",
            color: "white",
            marginBottom: SCREEN_HEIGHT / 50,
          }}
        >
          도움말
        </Text>
        <TouchableOpacity
          style={styles.nextBtn}
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
            <Text style={{ fontSize: SCREEN_HEIGHT / 25, fontWeight: "800" }}>
              END
            </Text>
          ) : (
            <Text style={{ fontSize: SCREEN_HEIGHT / 25, fontWeight: "800" }}>
              NEXT
            </Text>
          )}
        </TouchableOpacity>
        <Text
          style={{
            fontSize: SCREEN_HEIGHT / 50,
            fontWeight: "700",
            color: "rgba(255, 255, 255, 0.5)",
          }}
          onPress={() => {
            toggleOverlay();
          }}
        >
          SKIP_ _
        </Text>
      </View>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <Animated.View style={{ flex: 1, opacity: fadeAnim }}>
          <Text style={styles.animationText}>상영 중인</Text>
          <Text style={styles.animationText}>영화를 볼 수 있어요</Text>
        </Animated.View>
        <Animated.View style={{ flex: 1, opacity: fadeAnim2 }}>
          <Text style={styles.animationText}>장르를 선택하면</Text>
          <Text style={styles.animationText}>영화를 추천해줘요</Text>
        </Animated.View>
        <Animated.View style={{ flex: 1, opacity: fadeAnim3 }}>
          <Text style={styles.animationText}>장소 위치 정보를 </Text>
          <Text style={styles.animationText}>알 수 있어요</Text>
        </Animated.View>
        <Animated.View style={{ flex: 1, opacity: fadeAnim4 }}>
          <Text style={styles.animationText}>스낵바</Text>
          <Text style={styles.animationText}>메뉴를 볼 수 있어요</Text>
        </Animated.View>
      </View>
      <View style={{ flex: SCREEN_FLEX, flexDirection: "row" }}>
        <Animated.View style={{ ...styles.animationBox, opacity: fadeAnim }}>
          <View style={styles.firstHelpBox}>
            <View style={styles.secondHelpBox}></View>
          </View>
        </Animated.View>

        <Animated.View style={{ ...styles.animationBox, opacity: fadeAnim2 }}>
          <View style={styles.firstHelpBox}>
            <View style={styles.secondHelpBox}></View>
          </View>
        </Animated.View>
        <Animated.View style={{ ...styles.animationBox, opacity: fadeAnim3 }}>
          <View style={styles.firstHelpBox}>
            <View style={styles.secondHelpBox}></View>
          </View>
        </Animated.View>
        <Animated.View style={{ ...styles.animationBox, opacity: fadeAnim4 }}>
          <View style={styles.firstHelpBox}>
            <View style={styles.secondHelpBox}></View>
          </View>
        </Animated.View>
      </View>
    </Overlay>
  );
};

export default HelpComment;

const styles = StyleSheet.create({
  nextBtn: {
    borderWidth: SCREEN_HEIGHT / 130,
    borderColor: "black",
    backgroundColor: COLOR,
    width: SCREEN_WIDTH / 2,
    height: SCREEN_HEIGHT / 15,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: SCREEN_HEIGHT / 100,
  },
  firstHelpBox: {
    borderWidth: 5,
    borderColor: "black",
    borderRadius: 50,
    width: SCREEN_BOX,
    height: 70,
  },
  secondHelpBox: {
    borderWidth: 3,
    borderColor: COLOR,
    borderRadius: 50,
    width: SCREEN_BOX - 10,
    height: 60,
  },
  animationBox: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  animationText: {
    flex: 1,
    color: "white",
    textAlign: "center",
    fontWeight: "700",
    fontSize: SCREEN_HEIGHT / 60,
  },
});
