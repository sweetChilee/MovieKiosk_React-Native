import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  Image,
  Dimensions,
} from "react-native";
import { SCREEN_FONT, TITLE_FONT } from "../../../config/globalstyles";

export default function SetScreen() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "rgb(44, 44, 44)" }}>
      <View style={styles.menuListArea}>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: "rgb(66, 66, 66)",
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
              width: 170,
              padding: 20,
              margin: 10,
              shadowColor: "rgb(22, 22, 22)",
              shadowOffset: {
                width: 3,
                height: 3,
              },
              shadowOpacity: 0.35,
              shadowRadius: 2,
              elevation: 24,
            }}
          >
            <View style={styles.menuImgArea}>
              <Image
                source={require("./assets//img/set/small.png")}
                style={styles.menuImg}
                resizeMode="center"
              />
            </View>
            <View style={styles.menuArea}>
              <Text style={styles.menuTitle}>스몰세트</Text>
              <Text style={{ color: "white" }}>₩ 7,000원</Text>
            </View>
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <View style={styles.menuImgArea}>
            <Image
              source={require("./assets//img/set/middle.png")}
              style={styles.menuImg}
              resizeMode="center"
            />
          </View>
          <View style={styles.menuArea}>
            <Text style={styles.menuTitle}>미들세트</Text>
            <Text style={{ color: "white" }}>₩ 10,000원</Text>
          </View>
        </View>
      </View>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <View style={{ flex: 3, borderColor: "black", borderWidth: 2 }}>
          <View style={{ flex: 5 }}>
            <Image
              source={require("./assets//img/set/double.png")}
              style={{ ...styles.menuImg }}
            />
          </View>
          <View style={styles.textmenu}>
            <Text style={styles.textmenu}>더블콤보</Text>
          </View>
          <View style={styles.textPriceArea}>
            <Text style={styles.textPrice}>13,000원</Text>
          </View>
        </View>
        <View style={{ flex: 3, borderColor: "black", borderWidth: 2 }}>
          <View style={{ flex: 5 }}>
            <Image
              source={require("./assets//img/set/large.png")}
              style={{ ...styles.menuImg }}
            />
          </View>
          <View style={styles.textmenu}>
            <Text style={styles.textmenu}>라지콤보</Text>
          </View>
          <View style={styles.textPriceArea}>
            <Text style={styles.textPrice}>16,000원</Text>
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
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  menuListArea: {
    flex: 1,
    flexDirection: "row",
  },
  menuImgArea: {
    flex: 1,
  },
  menuImg: {
    flex: 1,
    height: 120,
  },
  menuArea: {
    flex: 1,
    color: "white",
    fontSize: SCREEN_FONT,
  },
  menuTitle: {
    color: "white",
    fontSize: TITLE_FONT,
  },

  textmenu: {
    flex: 1,
    color: "white",
    fontSize: SCREEN_FONT,
    justifyContent: "center",
    alignItems: "center",
  },
  textPriceArea: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textPrice: { color: "white", fontSize: SCREEN_FONT },
});
