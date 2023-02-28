import React, { useRef } from "react";
import {
  Animated,
  Text,
  View,
  StyleSheet,
  Button,
  SafeAreaView,
  Easing,
} from "react-native";

import { COLOR } from "../../config/globalstyles";

export default function Map() {
  // fadeAnim will be used as the value for opacity. Initial Value: 0

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim2 = useRef(new Animated.Value(0)).current;
  const fadeAnim3 = useRef(new Animated.Value(0)).current;
  const fadeAnim4 = useRef(new Animated.Value(0)).current;
  const fadeAnim5 = useRef(new Animated.Value(0)).current;

  const degAnim = useRef(new Animated.Value(0)).current;
  const bounceImg = useRef(new Animated.Value(0)).current;

  const borderAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    const startAnimation = Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    });
    const startAnimation2 = Animated.timing(fadeAnim2, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    });
    const startAnimation3 = Animated.timing(fadeAnim3, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    });
    const startAnimation4 = Animated.timing(fadeAnim4, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    });
    const startAnimation5 = Animated.timing(fadeAnim5, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    });
    Animated.stagger(150, [
      startAnimation,
      startAnimation2,
      startAnimation3,
      startAnimation4,
      startAnimation5,
    ]).start();
  };

  // 보간법 용한 회전효과
  const changeDeg = () => {
    const changeDegAnimation = Animated.timing(degAnim, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    });
    Animated.loop(changeDegAnimation, {
      iterations: -1,
    }).start();
  };

  const animationStyles: any = {
    transform: [
      {
        rotate: degAnim.interpolate({
          inputRange: [0, 1],
          outputRange: ["0deg", "360deg"],
        }),
      },
    ],
  };
  // 바운스 효과
  const bouncing = () => {
    const downBounceAnimation = Animated.spring(bounceImg, {
      toValue: 250,
      friction: 2,
      tension: 20,
      useNativeDriver: true,
    });
    const upBounceAnimation = Animated.spring(bounceImg, {
      toValue: 0,
      friction: 2,
      tension: 20,
      useNativeDriver: true,
    });
    const bounceAnimation = Animated.stagger(1000, [
      downBounceAnimation,
      upBounceAnimation,
    ]);
    Animated.loop(bounceAnimation, {
      iterations: -1,
    }).start();
  };

  // 밑줄 효과
  const borderAnimation = () => {
    Animated.timing(borderAnim, {
      toValue: 200,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  };

  // 사라지기 효과
  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 3 seconds
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 0,
      useNativeDriver: true,
    }).start();
    Animated.timing(fadeAnim2, {
      toValue: 0,
      duration: 0,
      useNativeDriver: true,
    }).start();
    Animated.timing(fadeAnim3, {
      toValue: 0,
      duration: 0,
      useNativeDriver: true,
    }).start();
    Animated.timing(fadeAnim4, {
      toValue: 0,
      duration: 0,
      useNativeDriver: true,
    }).start();
    Animated.timing(fadeAnim5, {
      toValue: 0,
      duration: 0,
      useNativeDriver: true,
    }).start();
    Animated.timing(degAnim, {
      toValue: 0,
      duration: 0,
      useNativeDriver: true,
    }).start();
    Animated.timing(borderAnim, {
      toValue: 0,
      duration: 0,
      useNativeDriver: true,
    }).start();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <Animated.View
          style={[
            styles.fadingContainer,
            {
              opacity: fadeAnim,
            },
          ]}
        ></Animated.View>
        <Animated.View
          style={[
            styles.fadingContainer,
            {
              opacity: fadeAnim2,
            },
          ]}
        ></Animated.View>
        <Animated.View
          style={[
            styles.fadingContainer,
            {
              opacity: fadeAnim3,
            },
          ]}
        ></Animated.View>
        <Animated.View
          style={[
            styles.fadingContainer,
            {
              opacity: fadeAnim4,
            },
          ]}
        ></Animated.View>
        <Animated.View
          style={[
            styles.fadingContainer,
            {
              opacity: fadeAnim5,
            },
          ]}
        ></Animated.View>
      </View>
      <View style={{ flexDirection: "row" }}>
        <View style={styles.buttonRow}>
          <Animated.Image
            source={require("../../img/bird.jpeg")}
            style={[styles.btn, animationStyles]}
          ></Animated.Image>
          <Button title="Fade In View" onPress={fadeIn} />
          <Button title="Change Deg" onPress={changeDeg} />
          <Button title="Fade Out View" onPress={fadeOut} />
        </View>
        <View style={{ flex: 1, alignItems: "center" }}>
          <Animated.Image
            source={require("../../img/bird.jpeg")}
            style={[
              styles.btn,
              {
                transform: [{ translateY: bounceImg }],
              },
            ]}
          ></Animated.Image>
          <Button title="boucne!!" onPress={bouncing} />
        </View>
      </View>
      <View style={{ justifyContent: "flex-start", alignItems: "flex-start" }}>
        <Animated.View
          style={[
            styles.btBorder,
            {
              transform: [{ scaleX: borderAnim }],
            },
          ]}
        ></Animated.View>
        <Button title="boucne!!" onPress={borderAnimation} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgb(66, 66, 66)",
  },
  fadingContainer: {
    padding: 30,
    paddingTop: 150,
    backgroundColor: COLOR,
    margin: 7,
  },
  fadingText: {
    fontSize: 28,
  },
  buttonRow: {
    flex: 1,
    flexBasis: 100,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 16,
  },
  btn: {
    width: 100,
    height: 100,
    borderRadius: 150,
    marginVertical: 30,
  },
  btBorder: {
    borderWidth: 10,
    borderBottomColor: "white",
  },
});
