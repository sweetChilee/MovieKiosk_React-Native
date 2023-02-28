import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import MovieList from "./components/list/MovieList";
import MovieLists from "./components/list/MovieLists";
import Main from "./components/main/Main";
import RootNavigator from "./components/navigation";
import NavList from "./components/tabnavigation/NavList";
import { useState } from "react";

export default function App() {
  const fadeIn = () => {
    const [count, setCount] = useState<number>(0);

    let invalidId;

    const startCounter = () => {
      invalidId = setInterval(() => setCount((count) => count + 2000), 2000);
    };
    console.log(startCounter());
  };
  return (
    <View style={styles.container}>
      <RootNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(66, 66, 66)",
  },
});
