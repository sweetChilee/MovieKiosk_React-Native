import React, { useEffect, useRef, useState, useMemo } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../../config/globalstyles";
import UseInterval from "./UseInterval";

export const data = [
  {
    id: 0,
    uri: "https://t1.daumcdn.net/movie/dae69d91dee05da54a630cb63c10109366ccac90",
    title: "Dahlia",
  },
  {
    id: 1,
    uri: "https://img1.daumcdn.net/thumb/C300x430/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2Fd7dfd23fad7843cdfa228295b2e7536d0ce924f5",
    title: "Sunflower",
  },
  {
    id: 2,
    uri: "https://cdn.ize.co.kr/news/photo/202301/55263_66701_498.jpg",
    title: "Zinnia",
  },
  {
    id: 3,
    uri: "https://t1.daumcdn.net/movie/cd8ba9a0ddfa0c21777ecaf688063612b9cfe27c",
    title: "Tulip",
  },
  {
    id: 4,
    uri: "https://t1.daumcdn.net/movie/2c32ea586013cd5cdf8537bad4bbdf727498b58a",
    title: "Chrysanthemum",
  },
  {
    id: 5,
    uri: "https://t1.daumcdn.net/movie/a0aaca4b87c541b11085139bd941da0996a78ec1",
    title: "Hydrangea",
  },
];

const windowWidth = Dimensions.get("window").width;
const cardSize = { width: 100, height: 100 };
const offset = cardSize.width + 20;

function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const flatListRef = useRef<FlatList>(null);

  const snapToOffsets = useMemo(
    () => Array.from(Array(data.length)).map((_, index) => index * offset),
    [data]
  );

  useEffect(() => {
    if (currentIndex !== snapToOffsets.length) {
      flatListRef.current?.scrollToOffset({
        animated: true,
        offset: snapToOffsets[currentIndex],
      });
    }
  }, [currentIndex, snapToOffsets]);

  UseInterval(() => {
    setCurrentIndex((prev) =>
      prev === snapToOffsets.length - 1 ? 0 : prev + 1
    );
  }, 4000);

  return (
    <>
      <View style={{ flex: 0.3, backgroundColor: "white" }}></View>
      <View style={styles.container}>
        <FlatList
          data={data}
          snapToOffsets={snapToOffsets}
          ref={flatListRef}
          horizontal
          contentContainerStyle={{ justifyContent: "center" }}
          renderItem={({ item }) => (
            <Image
              style={{
                ...cardSize,
                resizeMode: "contain",
              }}
              source={[{ uri: item.uri }]}
            />
          )}
          keyExtractor={(_, index) => String(index)}
        />
      </View>
      <View style={{ flex: 0.3, backgroundColor: "rgb(66, 66, 66)" }}></View>
    </>
  );
}

export default ImageCarousel;

const styles = StyleSheet.create({
  container: {
    flex: 1.5,
    width: windowWidth,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },
});
