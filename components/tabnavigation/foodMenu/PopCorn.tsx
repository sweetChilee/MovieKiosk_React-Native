import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { ScrollView } from "react-native-gesture-handler";
import { SCREEN_FONT, TITLE_FONT } from "../../../config/globalstyles";

export default function PopconScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <View style={{ flex: 5, borderColor: "black", borderWidth: 2 }}>
          <View style={{ flex: 1 }}>
            <Image
              source={require("./assets//img/pop/고소팝콘.png")}
              style={styles.menuImg}
              resizeMode="contain"
            />
          </View>
          <View style={styles.textmenu}>
            <Text style={styles.textmenu}>고소팝콘</Text>
          </View>
          <View style={styles.textPriceArea}>
            <Text style={styles.textPrice}>5000원</Text>
          </View>
        </View>
        <View style={{ flex: 5, borderColor: "black", borderWidth: 2 }}>
          <View style={{ flex: 5 }}>
            <Image
              source={require("./assets//img/pop/달콤팝콘.png")}
              style={{ ...styles.menuImg, height: 180 }}
            />
          </View>
          <View style={styles.textmenu}>
            <Text style={styles.textmenu}>달콤팝콘</Text>
          </View>
          <View style={styles.textPriceArea}>
            <Text style={styles.textPrice}>6,000원</Text>
          </View>
        </View>
      </View>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <View style={{ flex: 3, borderColor: "black", borderWidth: 2 }}>
          <View style={{ flex: 5 }}>
            <Image
              source={require("./assets//img/pop/어니언팝콘.png")}
              style={{ ...styles.menuImg }}
            />
          </View>
          <View style={styles.textmenu}>
            <Text style={styles.textmenu}>어니언팝콘</Text>
          </View>
          <View style={styles.textPriceArea}>
            <Text style={styles.textPrice}>6,000원</Text>
          </View>
        </View>
        <View style={{ flex: 3, borderColor: "black", borderWidth: 2 }}>
          <View style={{ flex: 5 }}>
            <Image
              source={require("./assets//img/pop/치즈팝콘.png")}
              style={{ ...styles.menuImg }}
            />
          </View>
          <View style={styles.textmenu}>
            <Text style={styles.textmenu}>치즈팝콘</Text>
          </View>
          <View style={styles.textPriceArea}>
            <Text style={styles.textPrice}>6,000원</Text>
          </View>
        </View>
      </View>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <View style={{ flex: 3, borderColor: "black", borderWidth: 2 }}>
          <View style={{ flex: 5 }}>
            <Image
              source={require("./assets//img/pop/sizeUp.png")}
              style={{ ...styles.menuImg }}
            />
          </View>
          <View style={styles.textmenu}>
            <Text style={styles.textmenu}>사이즈업</Text>
          </View>
          <View style={styles.textPriceArea}>
            <Text style={styles.textPrice}>1000원 추가 </Text>
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
