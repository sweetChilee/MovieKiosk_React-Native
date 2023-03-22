import { Image, StyleSheet, Dimensions } from "react-native";

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const { height: SCREEN_HEIGHT } = Dimensions.get("window");

export default function HeadPoster() {
  return (
    <Image
      style={styles.main_poster}
      source={require("../../img/Suzume-banner2.jpeg")}
      resizeMode="cover"
    ></Image>
  );
}

const styles: any = StyleSheet.create({
  main_poster: {
    flex: 1,
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  },
});
