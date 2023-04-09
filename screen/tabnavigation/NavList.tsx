import { COLOR, SCREEN_WIDTH } from "../../config/globalstyles";

import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import Info from "./info/Info";
import Food from "./Food";
import MovieList from "../list/MovieList";
import RecommendStart from "./recommend/RecommendStart";

function MovieListMain() {
  return (
    <>
      <MovieList />
    </>
  );
}

function MovieRecommend() {
  return (
    <>
      <RecommendStart />
    </>
  );
}
function TheaterInfo() {
  return (
    <>
      <Info />
    </>
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
          tabBarLabelStyle: {
            fontSize: SCREEN_WIDTH / 45,
          },
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
          tabBarLabelStyle: {
            fontSize: SCREEN_WIDTH / 45,
          },
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
          tabBarLabelStyle: {
            fontSize: SCREEN_WIDTH / 45,
          },
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
          tabBarLabelStyle: {
            fontSize: SCREEN_WIDTH / 45,
          },
        }}
      />
    </Tab.Navigator>
  );
}
