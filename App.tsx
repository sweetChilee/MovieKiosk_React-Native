import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import RootNavigator from "./screen/navigation";
import NavList from "./screen/tabnavigation/NavList";
import { useEffect, useState } from "react";
import Food from "./screen/tabnavigation/Food";
import { todayDate } from "./screen/main/carousel/Carousel";

export default function App() {
  useEffect(() => {
    fetch(
      `https://port-0-sixman-movie-r8xoo2mlenkvdnc.sel3.cloudtype.app/${todayDate()}`
    ).then(() => {
      return;
    });
  }, []);

  return (
    <View style={styles.container}>
      <RootNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
