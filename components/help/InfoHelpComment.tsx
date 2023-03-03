import React, { useState } from "react";
import { Button, Overlay } from "react-native-elements";
import { View, Text } from "react-native";
import { COLOR } from "../../config/globalstyles";

const InfoHelpComment = () => {
  const [visible, setVisible] = useState(true);

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
      <View style={{ flex: 1, position: "absolute", bottom: 180, right: -120 }}>
        <Text style={{ color: "white", fontSize: 20, marginBottom: 80 }}>
          장소를 클릭해서 위치가 어딨는지 찾을 수 있습니다
        </Text>
        <View
          style={{
            borderWidth: 3,
            borderColor: COLOR,
            borderRadius: 5,
            width: 120,
            height: 110,
          }}
        ></View>
      </View>
      <View
        style={{
          flex: 1,
          position: "absolute",
          bottom: 205,
          right: -94,
          borderWidth: 3,
          borderColor: COLOR,
          borderRadius: 5,
          width: 70,
          height: 80,
        }}
      ></View>
      <View
        style={{
          flex: 1,
          position: "absolute",
          bottom: 180,
          right: -120,
          borderWidth: 3,
          borderColor: COLOR,
          borderRadius: 5,
          width: 120,
          height: 110,
        }}
      ></View>
      <View
        style={{
          flex: 1,
          position: "absolute",
          bottom: 180,
          right: -120,
          borderWidth: 3,
          borderColor: COLOR,
          borderRadius: 5,
          width: 120,
          height: 110,
        }}
      ></View>
    </Overlay>
  );
};

export default InfoHelpComment;
