import React, { useState } from "react";
import { Button, Overlay } from "react-native-elements";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { COLOR, SCREEN_WIDTH } from "../../config/globalstyles";

const SCREEN_BOX = Dimensions.get("window").width > 500 ? 250 : 100;
const SCREEN_FLEX_BOX = Dimensions.get("window").width > 500 ? 0.5 : 1;

const InfoHelpComment = () => {
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  return (
    <Overlay
      isVisible={visible}
      onBackdropPress={toggleOverlay}
      overlayStyle={{
        flex: 1,
        backgroundColor: "transparent",
      }}
    >
      <Text
        style={{ fontSize: 40, color: "white" }}
        onPress={() => {
          toggleOverlay();
        }}
      >
        skip__
      </Text>
      <View style={{ flex: 1, width: SCREEN_WIDTH }}></View>
      <View style={{ flex: 1 }}></View>
      <View style={{ flex: 1.5, flexDirection: "row" }}>
        <View style={styles.helpBoxArea}>
          <View style={{ flex: 1 }}></View>
          <View style={styles.helpBox}>
            <View style={styles.helpBox2}></View>
          </View>
          <View style={{ flex: SCREEN_FLEX_BOX }}></View>
        </View>
        <View style={{ flex: 1.2 }}>
          <View style={{ flex: 0.75 }}></View>
          <View style={styles.helpBoxMany}></View>
          <View style={styles.helpBox2Many}></View>
          <View style={{ flex: 0.43 }}></View>
        </View>
        <View style={{ flex: 1 }}>
          <View style={{ flex: 0.75 }}></View>
          <View style={styles.helpBoxMany}></View>
          <View style={styles.helpBox2Many}></View>
          <View style={{ flex: 0.43 }}></View>
        </View>
        <View style={{ flex: 1.05 }}>
          <View style={{ flex: 0.75 }}></View>
          <View style={styles.helpBoxMany}></View>
          <View style={styles.helpBox2Many}></View>
          <View style={{ flex: 0.43 }}></View>
        </View>
      </View>
    </Overlay>
  );
};

export default InfoHelpComment;

const styles = StyleSheet.create({
  helpBoxArea: {
    flex: 1.8,
    justifyContent: "center",
    alignItems: "center",
  },
  helpBox: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
    width: SCREEN_BOX,
    borderColor: "black",
    borderWidth: 7,
    borderRadius: 20,
  },
  helpBox2: {
    flex: 1,
    borderWidth: 7,
    borderColor: COLOR,
    width: SCREEN_BOX - 13,
    borderRadius: 20,
  },
  helpBoxMany: {
    flex: 1,
    borderWidth: 7,
    borderColor: COLOR,
    borderRadius: 20,
    margin: 5,
  },
  helpBox2Many: {
    flex: 1,
    borderWidth: 7,
    borderColor: COLOR,
    borderRadius: 20,
    marginHorizontal: 5,
  },
});
