import { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, FlatList } from "react-native";

type Movie = {
  rank: number;
  title: string;
  _id: string;
};

export default function Test() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<Movie[]>([]);
  let url =
    "https://port-0-sixman-movie-r8xoo2mlenkvdnc.sel3.cloudtype.app/rank";
  const getMovies = async () => {
    try {
      const response = await fetch(url);
      const Json = await response.json();
      // Parse가 Json 형식의 값
      const Parse = await Json.ranking;

      setData(Parse);

      Parse.map((obj: any, key: number) => {
        console.log(obj.title);
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        padding: 24,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({ _id }) => _id}
          renderItem={({ item }) => (
            <Text>
              {item.title}, {item.rank}
            </Text>
          )}
        />
      )}
    </View>
  );
}
