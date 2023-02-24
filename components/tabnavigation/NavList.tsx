import { View, StyleSheet, Text } from "react-native";
import { COLOR } from "../../config/globalstyles";

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import MovieList from "../list/MovieList";
import MovieLists from "../list/MovieLists";
import Recommand from "./Recommand";
import Food from "./Food";

function MovieListMain() {
  return (
    <>
      <MovieLists />
    </>
  );
}

function MovieRecommend() {
  return (
    <>
      <Recommand />
    </>
  );
}
function TheaterInfo() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>영화관 정보</Text>
    </View>
  );
}
function FoodMenu() {
  return (
    <>
      <Food />
    </>
  );
}

const Tab = createBottomTabNavigator();

export default function NavList() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: COLOR,
        tabBarInactiveTintColor: "white",

        tabBarStyle: {
          backgroundColor: "rgb(66, 66, 66)",
          // 그림자 효과 주기
        },
      }}
    >
      <Tab.Screen
        name="MovieList"
        component={MovieListMain}
        options={{
          title: "상영 중인 영화",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="movie-open-play-outline"
              size={30}
              color={color}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="MovieRecommend"
        component={MovieRecommend}
        options={{
          title: "영화 추천 알고리즘",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="thumbs-up-down-outline"
              size={27}
              color={color}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="TheaterInfo"
        component={TheaterInfo}
        options={{
          title: "영화관 정보",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="information-outline"
              size={27}
              color={color}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="FoodMenu"
        component={FoodMenu}
        options={{
          title: "음식 메뉴",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="popcorn" size={27} color={color} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  banner: {
    flex: 1,
    backgroundColor: "black",
  },
  main: {
    flex: 5,
    backgroundColor: "grey",
  },
  nav: {
    flex: 1,
    backgroundColor: "black",
  },
});
