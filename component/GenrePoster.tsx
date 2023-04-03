import React, { useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Animated,
  ImageBackground,
} from "react-native";
import { COLOR, SCREEN_HEIGHT, SCREEN_WIDTH } from "../config/globalstyles";

export const b: number[] = [];

export default function GenrePoster(props: any) {
  const [isLoading, setIsLoading] = useState(true);
  const [count, setCount] = useState(true);

  const a = () => {
    if (isLoading === false) {
      b.push(1);
    }
  };

  const anim = useRef(new Animated.Value(0)).current;

  const flipCard = () => {
    if (count === true) {
      setCount((prev) => !prev);
      Animated.spring(anim, {
        toValue: 180,
        friction: 8,
        tension: 10,
        useNativeDriver: true,
      }).start();
    } else {
      setCount((prev) => !prev);
      Animated.spring(anim, {
        toValue: 0,
        friction: 8,
        tension: 10,
        useNativeDriver: true,
      }).start();
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
  a();
  return (
    <>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <View
          style={{
            flex: 5,
            justifyContent: "space-evenly",
            alignItems: "center",
            marginBottom: SCREEN_HEIGHT / 100,
          }}
        >
          <Animated.View style={[styles.posterArea, frontAnimatedStyle]}>
            {props.children}
          </Animated.View>
          <Animated.View
            style={[styles.poster, styles.backPoster, backAnimatedStyle]}
          >
            <View style={styles.firstSelectCircle}>
              <View style={styles.secondSelectCircle}>
                <Text
                  style={{
                    color: "white",
                    fontSize: SCREEN_HEIGHT / 60,
                    fontWeight: "800",
                  }}
                >
                  선택 완료!
                </Text>
              </View>
            </View>
          </Animated.View>
        </View>
        <Text
          style={styles.genreText}
          onPress={() => {
            flipCard();
            props.press();
          }}
        >
          {props.genre}
        </Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  posterArea: {
    flex: 1,
    width: "100%",
    backfaceVisibility: "hidden",
  },
  poster: {
    flex: 1,
    width: "100%",
    backfaceVisibility: "hidden",
    shadowOffset: {
      width: 12,
      height: 12,
    },
    shadowOpacity: 0.7,
    shadowRadius: 7,
  },
  backPoster: {
    position: "absolute",
    top: 0,
    width: "90%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  firstSelectCircle: {
    width: SCREEN_HEIGHT / 10,
    height: SCREEN_HEIGHT / 10,
    borderWidth: SCREEN_HEIGHT / 150,
    borderRadius: 100,
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  secondSelectCircle: {
    flex: 1,
    width: "100%",
    borderWidth: SCREEN_HEIGHT / 200,
    borderRadius: 100,
    borderColor: COLOR,
    justifyContent: "center",
    alignItems: "center",
  },
  genreText: {
    flex: 0.5,
    fontSize: SCREEN_HEIGHT / 50,
    color: "white",
    fontWeight: "700",
    textAlign: "center",
  },
});
