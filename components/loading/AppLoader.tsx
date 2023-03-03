import React from "react";
import { View, StyleSheet } from "react-native";

import LottieView from "lottie-react-native";

export default function AppLoader() {
  return (
    <View style={[StyleSheet.absoluteFillObject, styles.container]}>
      <LottieView
        source={require("../../icon/loading.json")}
        autoPlay
        loop
      ></LottieView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(0,0,0)",
    zIndex: 1,
  },
});
