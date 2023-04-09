import { ImageBackground, Text, View, ScrollView } from "react-native";
import { COLOR, SCREEN_HEIGHT } from "../config/globalstyles";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { HomeScreenNavigationProp } from "../screen/navigation/types";

export default function RecommendMainPoster(props: any) {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  return (
    <>
      <View style={{ flex: 1 }}>
        <ImageBackground
          source={{ uri: props.url }}
          style={{
            flex: 1,
            width: "100%",
            padding: SCREEN_HEIGHT / 40,
            margin: SCREEN_HEIGHT / 40,
            shadowOffset: {
              width: 15,
              height: 15,
            },
            shadowOpacity: 0.6,
            shadowRadius: 7,
          }}
          resizeMode="contain"
        />
      </View>
      <View style={{ flex: 1, paddingVertical: 60 }}>
        <Text
          style={{
            fontSize: SCREEN_HEIGHT / 60,
            fontWeight: "800",
            color: "white",
            marginVertical: 10,
          }}
        >
          <AntDesign
            name="star"
            size={SCREEN_HEIGHT / 40}
            color={props.color}
          />{" "}
          {props.titleNm}
        </Text>
        <ScrollView>
          <Text
            style={{
              fontSize: SCREEN_HEIGHT / 60,
              fontWeight: "600",
              color: "white",
              marginVertical: SCREEN_HEIGHT / 120,
              paddingHorizontal: SCREEN_HEIGHT / 50,
              lineHeight: SCREEN_HEIGHT / 35,
            }}
          >
            {props.ex}
          </Text>
        </ScrollView>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: SCREEN_HEIGHT / 50,
              fontWeight: "700",
              color: COLOR,
              marginTop: SCREEN_HEIGHT / 30,
            }}
            onPress={() => {
              navigation.popToTop();
            }}
          >
            <MaterialCommunityIcons
              name="home-export-outline"
              size={SCREEN_HEIGHT / 30}
              color={COLOR}
            />
            {"  "}HOME
            <Text style={{ fontSize: SCREEN_HEIGHT / 60, color: "white" }}>
              으로...
            </Text>
          </Text>
        </View>
      </View>
    </>
  );
}
