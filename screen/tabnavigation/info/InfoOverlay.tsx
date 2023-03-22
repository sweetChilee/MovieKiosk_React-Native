import { StyleSheet, View, Text, Animated } from "react-native";
import { Overlay } from "react-native-elements";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../../config/globalstyles";
import React, { useRef } from "react";

type Props = {
  isVisible: boolean;
  vs: string;
  children: any;
};

export default function InfoOverlay(props: any) {
  const anim = useRef(new Animated.Value(0)).current;
  const downAnim = useRef(new Animated.Value(-100)).current;
  const upAnim = useRef(new Animated.Value(100)).current;

  Animated.timing(anim, {
    toValue: 1,
    duration: 500,
    useNativeDriver: true,
  }).start();

  Animated.spring(downAnim, {
    toValue: 0,
    friction: 8,
    tension: 10,
    useNativeDriver: true,
  }).start();

  Animated.spring(upAnim, {
    toValue: 0,
    friction: 8,
    tension: 10,
    useNativeDriver: true,
  }).start();

  return (
    <Overlay
      {...props}
      overlayStyle={{
        flex: 1,
        backgroundColor: "transparent",
      }}
    >
      <Animated.View
        style={{
          flex: 1,
          height: SCREEN_HEIGHT,
          width: SCREEN_WIDTH,
          opacity: anim,
        }}
      >
        <View style={{ flex: 1 }}>{props.children}</View>
        <View style={{ flex: 1, backgroundColor: "blue" }}></View>
        <View style={{ flex: 1 }}></View>
      </Animated.View>
    </Overlay>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
