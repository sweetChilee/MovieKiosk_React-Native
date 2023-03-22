import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  Image,
} from "react-native";
import { COLOR, SCREEN_WIDTH } from "../../../config/globalstyles";
import { drinkMenu, formatData, FoodItemProps } from "./FoodData";

const numColumns = 2;

export default function PopCorn() {
  const renderItem = ({ item }: FoodItemProps) => {
    return (
      <View style={styles.container}>
        <View style={styles.outBox}>
          <View
            style={{
              flex: 1,
              width: "100%",
              borderWidth: SCREEN_WIDTH / 90,
              borderColor: COLOR,
              borderRadius: 30,
              padding: SCREEN_WIDTH / 20,
            }}
          >
            <Image
              style={{ flex: 1, height: "50%", width: "100%" }}
              source={item.src}
              resizeMode="contain"
            />
            <View
              style={{
                flex: 0.5,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={styles.menuTitle}>{item.menu}</Text>
              <Text style={styles.menuPrice}>{item.price}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <FlatList
      data={formatData(drinkMenu, numColumns)}
      style={styles.container}
      renderItem={renderItem}
      numColumns={2}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(44, 44, 44)",
  },
  outBox: {
    flex: 1,
    alignItems: "center",
    margin: SCREEN_WIDTH / 60,
    height: Dimensions.get("window").width / 2, // approximate a square
    backgroundColor: "rgb(66, 66, 66)",
    borderWidth: SCREEN_WIDTH / 90,
    borderColor: "black",
    borderRadius: 40,
    shadowColor: "black",
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.5,
    shadowRadius: 7,
    elevation: 24,
  },
  itemInvisible: {
    backgroundColor: "transparent",
  },
  menuTitle: {
    color: "white",
    fontSize: SCREEN_WIDTH / 25,
    fontWeight: "800",
    marginTop: SCREEN_WIDTH / 15,
  },
  menuPrice: {
    color: "white",
    textAlign: "center",
    fontWeight: "600",
    fontSize: SCREEN_WIDTH / 35,
    margin: SCREEN_WIDTH / 100,
  },
});
