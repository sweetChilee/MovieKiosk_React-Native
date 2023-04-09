import React, { useRef } from "react";
import { StyleSheet, Dimensions, View, Animated } from "react-native";
import LottieView from "lottie-react-native";

const { width, height } = Dimensions.get("window");

export default function MainLoading(props: any) {
  const animation = useRef(null);

  const anim = useRef(new Animated.Value(0)).current;

  const fadeInAnim = Animated.timing(anim, {
    toValue: 1,
    duration: 1000,
    useNativeDriver: true,
  });

  const fadeOutAnim = Animated.timing(anim, {
    toValue: 0,
    duration: 1000,
    useNativeDriver: true,
  });

  const lastAnim = Animated.stagger(1000, [fadeInAnim, fadeOutAnim]);

  Animated.loop(lastAnim, {
    iterations: -1,
  }).start();

  return (
    <View style={styles.container}>
      <LottieView
        style={{
          margin: 0,
          padding: 0,
          height: height * 0.18,
          top: 20,
        }}
        source={require("../assets/lottie/screen2.json")}
        autoPlay
        ref={animation}
        loop={true}
      />
      <LottieView
        style={{
          margin: 0,
          padding: 0,
          height: height * 0.75,
          bottom: 20,
        }}
        source={require("../assets/lottie/screen1.json")}
        autoPlay
        ref={animation}
        loop={false}
      />
      {props.children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height,
    width: width,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    margin: -width / 10,
  },
});
