import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Alert,
  Modal,
  Image,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");

export default function LoginModal() {
  const [loginMo, setLoginMo] = useState(false);
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={styles.bBtn}
      onPress={() => {
        setLoginMo(true);
      }}
    >
      <Modal animationType="fade" visible={loginMo} transparent={true}>
        <View style={styles.modal}>
          <View style={styles.l_container}>
            <View style={styles.login_title}>
              <Text
                style={{
                  fontSize: 40,
                  fontWeight: "800",
                  color: "rgb(168, 77, 191)",
                }}
              >
                Social Login
              </Text>
            </View>
            <View style={styles.login_center}>
              <View style={styles.login_social}>
                <TouchableOpacity>
                  <Image
                    style={styles.google}
                    source={require("../../icon/google.png")}
                    resizeMode="contain"
                  ></Image>
                </TouchableOpacity>
                <Text style={styles.social_text}>Google</Text>
              </View>
              <View style={styles.login_social}>
                <TouchableOpacity
                  onPress={() => {
                    Alert.alert("아직 구현 중입니다...");
                  }}
                >
                  <Image
                    style={styles.google}
                    source={require("../../icon/facebook.png")}
                    resizeMode="contain"
                  ></Image>
                </TouchableOpacity>
                <Text style={styles.social_text}>FaceBook</Text>
              </View>
              <View style={styles.login_social}>
                <TouchableOpacity>
                  <Image
                    style={styles.google}
                    source={require("../../icon/kakao.png")}
                    resizeMode="contain"
                  ></Image>
                </TouchableOpacity>
                <Text style={styles.social_text}>Kakao</Text>
              </View>
              <View style={styles.login_social}>
                <TouchableOpacity>
                  <Image
                    style={styles.google}
                    source={require("../../icon/naver.png")}
                    resizeMode="contain"
                  ></Image>
                </TouchableOpacity>
                <Text style={styles.social_text}>Naver</Text>
              </View>
            </View>
            <View style={styles.login_close}>
              <TouchableOpacity
                onPress={() => {
                  setLoginMo(false);
                }}
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 35,
                    color: "rgb(168, 77, 191)",
                    fontWeight: "bold",
                  }}
                >
                  닫기
                </Text>
                <AntDesign name="close" size={30} color="rgb(168, 77, 191)" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <Text style={{ color: "white", fontSize: 20, fontWeight: "900" }}>
        로그인
      </Text>
    </TouchableOpacity>
  );
}

const styles: any = StyleSheet.create({
  bBtn: {
    flex: 1,
    backgroundColor: "rgb(168, 77, 191)",
    borderRadius: 40,
    height: SCREEN_HEIGHT / 15,
    margin: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  l_container: {
    height: SCREEN_HEIGHT / 3,
    width: "100%",
    backgroundColor: "rgb(66, 66, 66)",
  },

  login_title: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  login_center: {
    flex: 2.5,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: -10,
  },

  login_social: {
    alignItems: "center",
    justifyContent: "space-between",
  },

  google: {
    width: SCREEN_HEIGHT / 12,
    height: "55%",
  },

  social_text: {
    marginTop: -30,
    fontSize: 20,
    fontWeight: "800",
    color: "white",
  },

  login_close: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
