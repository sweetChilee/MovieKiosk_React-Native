import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  Image,
  Dimensions,
} from "react-native";

import { SCREEN_FONT, TITLE_FONT } from "../../../config/globalstyles";

export default function DrinkScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <View style={{ flex: 5, borderColor: "black", borderWidth: 2 }}>
          <View style={{ flex: 5 }}>
            <Image
              source={require("./assets//img/drink/아핫.png")}
              style={{ ...styles.menuImg, height: 140 }}
            />
          </View>
          <View style={styles.textmenu}>
            <Text style={styles.textmenu}>아메리카노(Hot)</Text>
          </View>
          <View style={styles.textPriceArea}>
            <Text style={styles.textPrice}>3,500원</Text>
          </View>
        </View>
        <View
          style={{
            flex: 5,
            borderColor: "black",
            borderWidth: 2,
            backgroundColor: "rgb(66, 66, 66)",
          }}
        >
          <View style={{ flex: 5 }}>
            <Image
              source={require("./assets//img/drink/iceamericano.png")}
              resizeMode="contain"
              style={{ ...styles.menuImg, height: 120, marginTop: 10 }}
            />
          </View>
          <View style={styles.textmenu}>
            <Text style={styles.textmenu}>아메리카노(Ice)</Text>
            <Text style={styles.textPrice}>4,000원</Text>
          </View>
        </View>
      </View>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <View style={{ flex: 3, borderColor: "black", borderWidth: 2 }}>
          <View style={{ flex: 5 }}>
            <Image
              source={require("./assets//img/drink/에이드.png")}
              style={{ ...styles.menuImg }}
            />
          </View>
          <View style={styles.textmenu}>
            <Text style={styles.textmenu}>에이드</Text>
          </View>
          <View style={styles.textPriceArea}>
            <Text style={styles.textPrice}>5,000원</Text>
          </View>
        </View>
        <View style={{ flex: 3, borderColor: "black", borderWidth: 2 }}>
          <View style={{ flex: 5 }}>
            <Image
              source={require("./assets//img/drink/탄산.png")}
              style={{ ...styles.menuImg }}
            />
          </View>
          <View style={styles.textmenu}>
            <Text style={styles.textmenu}>탄산</Text>
          </View>
          <View style={styles.textPriceArea}>
            <Text style={styles.textPrice}>2,500원</Text>
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
            <Text style={styles.textPrice}>1,000원</Text>
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
