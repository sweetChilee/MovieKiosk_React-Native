import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  Image,
  Animated,
} from "react-native";
import { Overlay } from "react-native-elements";
import MainLoading from "../../../component/MainLoading";
import {
  COLOR,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
} from "../../../config/globalstyles";
import UseInterval from "./UseInterval";

type Movie = {
  titleNm: string;
  poster: string;
};
type ItemProps = {
  titleNm: string;
  poster: string;
};

const formatData = (data: any, numColumns: any) => {
  const numberOfFullRows = Math.floor(data.length / numColumns);

  let numberOfElementsLastRow = data.length - numberOfFullRows * numColumns;
  while (
    numberOfElementsLastRow !== numColumns &&
    numberOfElementsLastRow !== 0
  ) {
    data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
    numberOfElementsLastRow++;
  }

  return data;
};
export const todayDate = () => {
  const date = new Date();
  const [year, month, day, space] = date.toLocaleDateString().split(".");
  const MONTH: string = 0 + month.trim();
  const DAY: string = day.trim();

  const currentDate: string = year.concat(MONTH, DAY);

  return currentDate;
};

const numColumns = 2;

export default function Carousel() {
  const [isLoading, setLoading] = useState(true);
  const [poster, setPoster] = useState<Movie[]>([]);
  const [mainLoading, setMainLoading] = useState(true);

  const [loadingScreen, setLoadingScreen] = useState(true);

  const test: any = [];
  const getCarouselElements = async () => {
    for (let i = 0; i < 10; i++) {
      let URL = `https://port-0-sixman-movie-r8xoo2mlenkvdnc.sel3.cloudtype.app/${todayDate()}/${i}`;
      try {
        const response = await fetch(URL);
        const Json = await response.json();

        const titleNm = await Json.koTitle;
        const poster = Json.posterUrl;

        test.push({
          titleNm: titleNm,
          poster: poster,
        });
      } catch (error) {
        console.log(error);
      }
    }
    return test;
  };

  useEffect(() => {
    getCarouselElements().then((data) => {
      setPoster(data);
      setLoading(false);
    });
  }, []);

  // flatList 반응형
  const [currentIndex, setCurrentIndex] = useState(0);

  const flatListRef = useRef<FlatList>(null);

  const snapToOffsets = useMemo(
    () =>
      Array.from(Array(poster.length)).map(
        (_, index) => (index * Dimensions.get("window").width) / 2
      ),
    [poster]
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
  }, 3000);

  const RenderItem = ({ poster, titleNm }: ItemProps) => {
    return (
      <View style={styles.container}>
        <View style={styles.outBox}>
          <View style={styles.inBox}>
            <Image
              style={{
                flex: 1,
                height: "50%",
                width: "100%",
                borderRadius: 20,
              }}
              source={{ uri: poster }}
              resizeMode="cover"
            />
          </View>
        </View>
        <Text
          style={{
            fontSize: SCREEN_WIDTH / 50,
            color: "rgb(66, 66, 66)",
          }}
        >
          {"............................................................"}
        </Text>
      </View>
    );
  };

  // isLoading으로 텍스트를 표시하고
  // 다른 true false useState로 로딩페이지를 표시하면
  // isLoading이 끝나면 텍스트가 나오고
  // 로딩페이지를 클릭하면 true가 false로 바뀌면서 로딩페이지가 없어진다.
  const anim = useRef(new Animated.Value(0)).current;

  const fadeInAnim = Animated.timing(anim, {
    toValue: 1,
    duration: 1000,
    useNativeDriver: true,
  });

  const fadeOutAnim = Animated.timing(anim, {
    toValue: 0,
    duration: 1000,
    useNativeDriver: true,
  });

  const lastAnim = Animated.stagger(1000, [fadeInAnim, fadeOutAnim]);

  Animated.loop(lastAnim, {
    iterations: -1,
  }).start();
  return (
    <>
      <Overlay
        isVisible={mainLoading}
        overlayStyle={{ flex: 1, backgroundColor: "transparent" }}
      >
        <MainLoading>
          {isLoading ? null : (
            <Animated.Text
              style={{
                color: "white",
                fontSize: 28,
                bottom: 80,
                opacity: anim,
              }}
              onPress={() => {
                setMainLoading(false);
              }}
            >
              글씨를 터치해주세요
            </Animated.Text>
          )}
        </MainLoading>
      </Overlay>
      <FlatList
        data={formatData(poster, numColumns)}
        style={{ flex: 1, backgroundColor: "rgb(66, 66, 66)" }}
        renderItem={({ item }) => (
          <>
            <RenderItem
              titleNm={item.titleNm}
              poster={item.poster}
            ></RenderItem>
          </>
        )}
        horizontal
        snapToOffsets={snapToOffsets}
        ref={flatListRef}
      />
      <View
        style={{
          flex: 0.1,
          backgroundColor: "rgb(66, 66, 66)",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: COLOR,
            fontSize: 32,
            fontWeight: "900",
            letterSpacing: 10,
          }}
        >
          Movie <Text style={{ color: "black" }}>Kiosk</Text>
        </Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(66, 66, 66)",
    margin: SCREEN_HEIGHT / 80,
  },
  outBox: {
    flex: 1,
    borderWidth: SCREEN_HEIGHT / 120,
    borderColor: "black",
    borderRadius: 30,
    shadowColor: "black",
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.5,
    shadowRadius: 7,
    elevation: 24,
  },
  inBox: {
    flex: 1,
    borderWidth: SCREEN_HEIGHT / 150,
    borderColor: COLOR,
    borderRadius: 25,
  },
});
