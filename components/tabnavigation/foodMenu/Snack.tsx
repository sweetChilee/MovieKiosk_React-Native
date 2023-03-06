import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  Image,
  Dimensions,
} from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { SCREEN_FONT, TITLE_FONT } from "../../../config/globalstyles";

export default function SnackScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <View style={{ flex: 5, borderColor: "black", borderWidth: 2 }}>
          <View style={{ flex: 5 }}>
            <Image
              source={require("./assets//img/food/나쵸.png")}
              style={{ ...styles.menuImg, height: 140 }}
            />
          </View>
          <View style={styles.textmenu}>
            <Text style={styles.textmenu}>나쵸</Text>
          </View>
          <View style={styles.textPriceArea}>
            <Text style={styles.textPrice}>4,900원</Text>
          </View>
        </View>
        <View style={{ flex: 5, borderColor: "black", borderWidth: 2 }}>
          <View style={{ flex: 5 }}>
            <Image
              source={require("./assets//img/food/맛밤.png")}
              style={{ ...styles.menuImg }}
            />
          </View>
          <View style={styles.textmenu}>
            <Text style={styles.textmenu}>맛밤</Text>
          </View>
          <View style={styles.textPriceArea}>
            <Text style={styles.textPrice}>3,500원</Text>
          </View>
        </View>
      </View>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <View style={{ flex: 3, borderColor: "black", borderWidth: 2 }}>
          <View style={{ flex: 5 }}>
            <Image
              source={require("./assets//img/food/오징어.png")}
              style={{ ...styles.menuImg }}
            />
          </View>
          <View style={styles.textmenu}>
            <Text style={styles.textmenu}>오징어</Text>
          </View>
          <View style={styles.textPriceArea}>
            <Text style={styles.textPrice}>3,500원</Text>
          </View>
        </View>
        <View
          style={{
            flex: 3,
            borderColor: "black",
            borderWidth: 2,
            backgroundColor: "transparent",
          }}
        >
          <View style={{ flex: 5 }}>
            <Image
              source={require("./assets//img/food/핫도그.png")}
              style={{ ...styles.menuImg, height: 130 }}
            />
          </View>
          <View style={styles.textmenu}>
            <Text style={styles.textmenu}>핫도그</Text>
          </View>
          <View style={styles.textPriceArea}>
            <Text style={styles.textPrice}>5,000원</Text>
          </View>
        </View>
      </View>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <View style={{ flex: 3, borderColor: "black", borderWidth: 2 }}>
          <View style={{ flex: 5 }}></View>
          <View style={styles.textmenu}>
            <Text style={styles.textmenu}></Text>
          </View>
          <View style={styles.textPriceArea}>
            <Text style={styles.textPrice}></Text>
          </View>
        </View>
        <View style={{ flex: 3, borderColor: "black", borderWidth: 2 }}>
          <View style={{ flex: 5 }}></View>
          <View style={styles.textmenu}>
            <Text style={styles.textmenu}></Text>
          </View>
          <View style={styles.textPriceArea}>
            <Text style={styles.textPrice}></Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  menutab: {
    paddingHorizontal: 30,
  },
  btnText: {
    color: "white",
    textAlign: "center",
  },
  menuImg: {
    flex: 1,
    height: 150,
  },
  textmenu: {
    flex: 1,
    color: "white",
    fontSize: SCREEN_FONT,
    justifyContent: "center",
    alignItems: "center",
  },

  // 여기가 새로 만든 곳
  menuListArea: {
    flex: 1,
    flexDirection: "row",
  },
  menuImgArea: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  menuArea: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontSize: SCREEN_FONT,
  },
  menuTitle: {
    color: "white",
    fontSize: TITLE_FONT,
  },

  textPriceArea: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textPrice: { color: "white", fontSize: SCREEN_FONT },
});
