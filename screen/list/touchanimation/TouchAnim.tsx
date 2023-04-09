import { MaterialIcons } from "@expo/vector-icons";
import { useRef } from "react";
import { StyleSheet, Animated } from "react-native";
import { SCREEN_WIDTH } from "../../../config/globalstyles";

export default function TouchAnim() {
  // 터치 애니메이션
  const touchFadeAnim = useRef(new Animated.Value(0)).current;
  const touchTransAnim = useRef(new Animated.Value(30)).current;

  const faded = Animated.timing(touchFadeAnim, {
    toValue: 1,
    duration: 1500,
    useNativeDriver: true,
  });

  const translated = Animated.timing(touchTransAnim, {
    toValue: SCREEN_WIDTH / 100,
    duration: 1500,
    useNativeDriver: true,
  });

  const touchLastAnim = Animated.parallel([faded, translated]);

  // 터치 서클
  const touchCircleAnim = useRef(new Animated.Value(1)).current;
  const circleScaleAnim = useRef(new Animated.Value(0)).current;

  const touchCircleAnim2 = useRef(new Animated.Value(1)).current;
  const circleScaleAnim2 = useRef(new Animated.Value(0)).current;

  const touchCircleAnim3 = useRef(new Animated.Value(1)).current;
  const circleScaleAnim3 = useRef(new Animated.Value(0)).current;

  const touchCircleAnim4 = useRef(new Animated.Value(1)).current;
  const circleScaleAnim4 = useRef(new Animated.Value(0)).current;

  const firstCircle = Animated.timing(circleScaleAnim, {
    toValue: 1.5,
    duration: 3000,
    useNativeDriver: true,
  });
  Animated.timing(touchCircleAnim, {
    toValue: 1,
    duration: 3000,
    useNativeDriver: true,
  }).start();

  const secondCircle = Animated.timing(circleScaleAnim2, {
    toValue: 1.5,
    duration: 3000,
    useNativeDriver: true,
  });
  Animated.timing(touchCircleAnim2, {
    toValue: 1,
    duration: 3000,
    useNativeDriver: true,
  }).start();

  const thirdCircle = Animated.timing(circleScaleAnim3, {
    toValue: 1.5,
    duration: 3000,
    useNativeDriver: true,
  });
  Animated.timing(touchCircleAnim3, {
    toValue: 1,
    duration: 3000,
    useNativeDriver: true,
  }).start();

  const lastCircle = Animated.timing(circleScaleAnim4, {
    toValue: 1.5,
    duration: 3000,
    useNativeDriver: true,
  });
  Animated.timing(touchCircleAnim4, {
    toValue: 1,
    duration: 3000,
    useNativeDriver: true,
  }).start();

  const circleLastAnim = Animated.stagger(1000, [
    firstCircle,
    secondCircle,
    thirdCircle,
    lastCircle,
  ]);

  Animated.loop(Animated.stagger(700, [touchLastAnim, circleLastAnim]), {
    iterations: -1,
  }).start();

  return (
    <>
      <Animated.View
        style={{
          position: "absolute",
          transform: [
            {
              translateX: touchTransAnim,
            },
          ],
          opacity: touchFadeAnim,
          zIndex: 1,
        }}
      >
        <MaterialIcons
          name="touch-app"
          size={SCREEN_WIDTH / 15}
          color="#E8BEAC"
        />
      </Animated.View>
      <Animated.View
        style={{
          ...styles.animCircle,
          backgroundColor: "#5D3FD3",
          opacity: touchCircleAnim,
          transform: [
            {
              scale: circleScaleAnim,
            },
          ],
        }}
      ></Animated.View>
      <Animated.View
        style={{
          ...styles.animCircle,
          backgroundColor: "#C3B1E1", //"rgb(168, 120, 244)",
          opacity: touchCircleAnim2,
          transform: [
            {
              scale: circleScaleAnim2,
            },
          ],
        }}
      ></Animated.View>
      <Animated.View
        style={{
          ...styles.animCircle,
          backgroundColor: "#7F00FF", //"rgb(200, 120, 244)",
          opacity: touchCircleAnim3,
          transform: [
            {
              scale: circleScaleAnim3,
            },
          ],
        }}
      ></Animated.View>
      <Animated.View
        style={{
          ...styles.animCircle,
          backgroundColor: "rgb(66, 66, 66)",
          opacity: touchCircleAnim4,
          transform: [
            {
              scale: circleScaleAnim4,
            },
          ],
        }}
      ></Animated.View>
    </>
  );
}

const styles = StyleSheet.create({
  animCircle: {
    position: "absolute",
    right: SCREEN_WIDTH / 150,
    top: -SCREEN_WIDTH / 80,
    width: SCREEN_WIDTH / 20,
    height: SCREEN_WIDTH / 20,
    borderRadius: 50,
  },
});
