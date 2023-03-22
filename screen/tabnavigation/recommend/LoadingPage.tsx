import LottieView from "lottie-react-native";
import { useRef } from "react";
import { View, StyleSheet, Animated } from "react-native";
import AnimatedTyping from "../../../component/AnimatedTyping";
import LoadingPosterAnim from "./LoadingPosterAnim";

export default function LoadingPage() {
  const a = useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.container}>
      <View style={{ flex: 8, width: "100%" }}>
        <LoadingPosterAnim />
      </View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <LottieView
          style={{ flex: 1, width: "100%" }}
          source={require("../../../assets/lottie/31936-the-6-loading-circles.json")}
          autoPlay
          loop
        ></LottieView>
      </View>
      <View
        style={{ flex: 0.8, alignContent: "center", justifyContent: "center" }}
      >
        <AnimatedTyping
          text={["영화를 탐색 중입니다!", "조금만 기다려주세요..."]}
        ></AnimatedTyping>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(66, 66, 66)",
  },
});
