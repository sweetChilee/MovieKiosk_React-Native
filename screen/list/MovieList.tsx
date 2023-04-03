import React, { useEffect, useState } from "react";
import { StyleSheet, View, FlatList, ImageBackground } from "react-native";
import LoadingOverlay from "../../component/LoadingOverlay";
import HelpComment from "../help/HelpComment";

import { ItemProps, Movie } from "./Data";
import { getBoxOfficeData } from "./getBoxOfficeData";
import RenderItem from "./RenderItem";

export default function MovieListTest() {
  const numColumns = 3;

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<Movie[]>([]);

  getBoxOfficeData().then((data: any) => {
    setData(data);
  });

  useEffect(() => {
    getBoxOfficeData().then(() => {
      setLoading(false);
    });
  }, []);

  const formatData = (data: any, numColumns: number) => {
    const numberOfFullRows = Math.floor(data.length / numColumns);

    let numberOfElementsLastRow = data.length - numberOfFullRows * numColumns;
    while (
      numberOfElementsLastRow !== numColumns &&
      numberOfElementsLastRow !== 0
    )
      return data;
  };

  return (
    <>
      <LoadingOverlay visible={isLoading} />
      <HelpComment />
      <View style={{ flex: 1, backgroundColor: "rgb(33, 33, 33)" }}>
        <View style={styles.banner}>
          <ImageBackground
            source={require("../../img/Suzume-banner4.jpeg")}
            style={{ flex: 1 }}
            resizeMode="cover"
          />
        </View>
        <FlatList
          data={formatData(data, numColumns)}
          style={styles.container}
          renderItem={({ item }) => (
            <>
              <RenderItem
                titleNm={item.titleNm}
                // picture={item.picture}
                directorNm={item.directorNm}
                actorNm={item.actorNm}
                peopleNm={item.peopleNm}
                overView={item.overView}
                genreName={item.genreName}
                poster={item.poster}
                rank={item.rank}
              ></RenderItem>
            </>
          )}
          numColumns={2}
        ></FlatList>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  banner: {
    flex: 0.25,
    backgroundColor: "rgb(44, 44, 44)",
  },
});
