import React, { useRef, useState } from "react";
import { StyleSheet, Text, View, Animated } from "react-native";
import { SCREEN_WIDTH } from "../config/globalstyles";

export default function GenrePoster(props: any) {
  const [count, setCount] = useState(1);

  const anim = useRef(new Animated.Value(0)).current;

  const flipCard = () => {
    if (count === 0) {
      Animated.spring(anim, {
        toValue: 180,
        friction: 8,
        tension: 10,
        useNativeDriver: true,
      }).start();
      setCount((prev) => prev + 1);
    } else {
      Animated.spring(anim, {
        toValue: 0,
        friction: 8,
        tension: 10,
        useNativeDriver: true,
      }).start();
      setCount((prev) => prev - 1);
    }
  };

  const frontAnimatedStyle: any = {
    transform: [
      {
        rotateY: anim.interpolate({
          inputRange: [0, 180],
          outputRange: ["0deg", "180deg"],
        }),
      },
    ],
  };
  const backAnimatedStyle: any = {
    transform: [
      {
        rotateY: anim.interpolate({
          inputRange: [0, 180],
          outputRange: ["180deg", "360deg"],
        }),
      },
    ],
  };

  return (
    <>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <View
          style={{ flex: 2.5, justifyContent: "center", alignItems: "center" }}
        >
          <Animated.Image
            source={{ uri: props.URL }}
            style={[styles.poster, frontAnimatedStyle]}
            resizeMode="contain"
          ></Animated.Image>
          <Animated.View
            style={[styles.poster, styles.backPoster, backAnimatedStyle]}
          ></Animated.View>
          {props.children}
        </View>
        <Text
          style={styles.genreText}
          onPress={() => {
            flipCard();
            props.press;
          }}
        >
          {props.genre}
        </Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  poster: {
    flex: 1,
    width: "100%",
    backfaceVisibility: "hidden",
  },
  backPoster: {
    top: 0,
    width: "50%",
    height: "100%",
    position: "absolute",
    backgroundColor: "black",
  },
  genreText: {
    flex: 0.5,
    fontSize: SCREEN_WIDTH / 40,
    color: "white",
    fontWeight: "600",
    textAlign: "center",
    marginTop: SCREEN_WIDTH / 80,
  },
});
