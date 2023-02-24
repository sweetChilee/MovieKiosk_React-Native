import { StyleSheet, Dimensions, Image, ScrollView } from "react-native";

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const { height: SCREEN_HEIGHT } = Dimensions.get("window");

export default function Carousel() {
  return (
    <ScrollView
      pagingEnabled
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.carousel}
      style={{ backgroundColor: "rgb(66, 66, 66)" }}
    >
      <Image
        style={styles.first_poster}
        source={require("../../img/poster.jpeg")}
        resizeMode="contain"
      ></Image>
      <Image
        style={styles.center_poster}
        source={require("../../img/poster2.jpeg")}
        resizeMode="contain"
      ></Image>
      <Image
        style={styles.last_poster}
        source={require("../../img/poster3.jpeg")}
        resizeMode="contain"
      ></Image>
    </ScrollView>
  );
}

const styles: any = StyleSheet.create({
  carousel: {
    flex: 1,
    flexDirection: "row",
    marginTop: 20,
    height: SCREEN_HEIGHT / 20,
  },
  first_poster: {
    flex: 1,
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT / 5,
    marginTop: 100,
  },
  center_poster: {
    flex: 3,
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT / 3,
    margin: 20,
    marginTop: 0,
  },
  last_poster: {
    flex: 1,
    width: SCREEN_WIDTH / 2,
    height: SCREEN_HEIGHT / 5,
    marginTop: 100,
  },
});
