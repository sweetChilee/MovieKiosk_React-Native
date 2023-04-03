import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import RootNavigator from "./screen/navigation";
import NavList from "./screen/tabnavigation/NavList";
import { useEffect, useState } from "react";
import Food from "./screen/tabnavigation/Food";
import { todayDate } from "./screen/main/carousel/Carousel";
import FilteredMovie from "./screen/tabnavigation/recommend/FilteredMovie";
import { NavigationContainer } from "@react-navigation/native";
import Result from "./screen/tabnavigation/recommend/Result";

export default function App() {
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
