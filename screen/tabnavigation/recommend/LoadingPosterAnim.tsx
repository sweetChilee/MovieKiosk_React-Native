import { View, StyleSheet, Animated } from "react-native";
import AnimatedPoster from "../../../component/AnimatedPoster";
import { imagePoster, opacAnim } from "./imagePoster";

export default function LoadingPosterAnim() {
  let numbering: number[] = [];
  for (let i: number = 0; i <= 20; i++) {
    numbering.push(i);
  }
  return (
    <>
      <View style={styles.container}>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <AnimatedPoster>
            <Animated.Image
              style={{ ...styles.poster, opacity: opacAnim(0) }}
              source={imagePoster.suzume}
            ></Animated.Image>
          </AnimatedPoster>
          <AnimatedPoster>
            <Animated.Image
              style={{ ...styles.poster, opacity: opacAnim(1) }}
              source={imagePoster.hero}
            ></Animated.Image>
          </AnimatedPoster>
          <AnimatedPoster>
            <Animated.Image
              style={{ ...styles.poster, opacity: opacAnim(2) }}
              source={imagePoster.soulmate}
            ></Animated.Image>
          </AnimatedPoster>
          <AnimatedPoster>
            <Animated.Image
              style={{ ...styles.poster, opacity: opacAnim(3) }}
              source={imagePoster.shazam}
            ></Animated.Image>
          </AnimatedPoster>
          <AnimatedPoster>
            <Animated.Image
              style={{ ...styles.poster, opacity: opacAnim(4) }}
              source={imagePoster.slamdunk}
            ></Animated.Image>
          </AnimatedPoster>
        </View>
      </View>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <AnimatedPoster>
          <Animated.Image
            style={{ ...styles.poster, opacity: opacAnim(9) }}
            source={imagePoster.demonSlayer}
          ></Animated.Image>
        </AnimatedPoster>
        <AnimatedPoster>
          <Animated.Image
            style={{ ...styles.poster, opacity: opacAnim(8) }}
            source={imagePoster.someDay}
          ></Animated.Image>
        </AnimatedPoster>
        <AnimatedPoster>
          <Animated.Image
            style={{ ...styles.poster, opacity: opacAnim(7) }}
            source={imagePoster.fabelmans}
          ></Animated.Image>
        </AnimatedPoster>
        <AnimatedPoster>
          <Animated.Image
            style={{ ...styles.poster, opacity: opacAnim(6) }}
            source={imagePoster.knock}
          ></Animated.Image>
        </AnimatedPoster>
        <AnimatedPoster>
          <Animated.Image
            style={{ ...styles.poster, opacity: opacAnim(5) }}
            source={imagePoster.topgun}
          ></Animated.Image>
        </AnimatedPoster>
      </View>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <AnimatedPoster>
          <Animated.Image
            style={{ ...styles.poster, opacity: opacAnim(10) }}
            source={imagePoster.six}
          ></Animated.Image>
        </AnimatedPoster>
        <AnimatedPoster>
          <Animated.Image
            style={{ ...styles.poster, opacity: opacAnim(11) }}
            source={imagePoster.search}
          ></Animated.Image>
        </AnimatedPoster>
        <AnimatedPoster>
          <Animated.Image
            style={{ ...styles.poster, opacity: opacAnim(12) }}
            source={imagePoster.slamdunk}
          ></Animated.Image>
        </AnimatedPoster>
        <AnimatedPoster>
          <Animated.Image
            style={{ ...styles.poster, opacity: opacAnim(13) }}
            source={imagePoster.hero}
          ></Animated.Image>
        </AnimatedPoster>
        <AnimatedPoster>
          <Animated.Image
            style={{ ...styles.poster, opacity: opacAnim(14) }}
            source={imagePoster.soulmate}
          ></Animated.Image>
        </AnimatedPoster>
      </View>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <AnimatedPoster>
          <Animated.Image
            style={{ ...styles.poster, opacity: opacAnim(19) }}
            source={imagePoster.suzume}
          ></Animated.Image>
        </AnimatedPoster>
        <AnimatedPoster>
          <Animated.Image
            style={{ ...styles.poster, opacity: opacAnim(18) }}
            source={imagePoster.hero}
          ></Animated.Image>
        </AnimatedPoster>
        <AnimatedPoster>
          <Animated.Image
            style={{ ...styles.poster, opacity: opacAnim(17) }}
            source={imagePoster.soulmate}
          ></Animated.Image>
        </AnimatedPoster>
        <AnimatedPoster>
          <Animated.Image
            style={{ ...styles.poster, opacity: opacAnim(16) }}
            source={imagePoster.shazam}
          ></Animated.Image>
        </AnimatedPoster>
        <AnimatedPoster>
          <Animated.Image
            style={{ ...styles.poster, opacity: opacAnim(15) }}
            source={imagePoster.slamdunk}
          ></Animated.Image>
        </AnimatedPoster>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  poster: {
    flex: 1,
    width: "100%",
  },
});
