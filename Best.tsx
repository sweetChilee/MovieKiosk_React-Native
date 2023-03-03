import axios from "axios";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View, Text } from "react-native";

export default function App() {
  const [data, setData] = useState("");
  let URL =
    "http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&detail=Y&listCount=5&ServiceKey=Z5Q33873B56M779WL105&title=극한직업";
  const callAPI = () => {
    axios
      .get(
        // "https://port-0-sixman-movie-r8xoo2mlenkvdnc.sel3.cloudtype.app/rank"
        URL
      )
      .then((response) => {
        let JSON = response.data.Data;
        const Result = JSON.map((obj: any) => {
          obj.Result.map((a: any) => {
            a.map((object: any) => {
              return object.posters;
            });
          });
        });
        setData(Result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  callAPI();
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 40 }}>{data}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
});
