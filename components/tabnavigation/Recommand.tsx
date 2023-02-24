import { View, StyleSheet, ActivityIndicator, Text } from "react-native";
import { useEffect, useState } from "react";
import { COLOR } from "../../config/globalstyles";
import BouncingPreloader from "react-native-bouncing-preloader";

async function getItems() {
  await new Promise((resolve, reject) => setTimeout(resolve, 3000));
  return "로딩이 완료되었습니다!";
}

function AcitivityLoading() {
  const [colors, setColors] = useState("white");
  useEffect(() => {
    const id = setInterval(() => {
      setColors((color) => (color === "white" ? COLOR : "white"));
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <>
      <ActivityIndicator size="large" color={colors} />
      <Text style={{ color: "white", fontSize: 40 }}>Loading...</Text>
    </>
  );
}

export default function Recommand() {
  // 제네릭 형태로 지정해주나 초깃값 설정 시 알아서 타입을 유추한다.
  const [item, setItem] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getItems().then((items) => {
      setItem(items);
      setLoading(true);
    });
  }, []);

  return (
    <View style={styles.main}>
      {loading ? (
        <AcitivityLoading />
      ) : (
        <Text style={{ color: "white", fontSize: 40 }}>{item}</Text>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "rgb(66,66,66)",
    justifyContent: "center",
    alignItems: "center",
  },
});
