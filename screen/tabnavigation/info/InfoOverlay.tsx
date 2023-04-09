import { StyleSheet, View, Animated } from "react-native";
import { Overlay } from "react-native-elements";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../../config/globalstyles";
import React, { useRef } from "react";
import { Video } from "expo-av";

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

  let v = props.visible;
  return (
    <Overlay
      isVisible={v}
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
        <Video
          source={props.videoSrc}
          style={{ flex: 1, width: "100%" }}
          useNativeControls
          shouldPlay={true}
          isLooping
        />
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
