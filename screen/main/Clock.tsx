import { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SCREEN_WIDTH } from "../../config/globalstyles";

export default function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <View style={styles.clock}>
      <Text style={styles.date}>{time.toLocaleDateString()}</Text>
      <Text style={styles.time}>
        <Text style={{ fontSize: SCREEN_WIDTH / 25 }}>
          {time.toLocaleTimeString().slice(0, 2)}
        </Text>
        {time.toLocaleTimeString(["it-IT"], {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  clock: {
    flex: 0.4,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgb(66, 66, 66)",
  },
  date: {
    fontSize: SCREEN_WIDTH / 30,
    textAlign: "center",
    fontWeight: "700",
    color: "rgb(168, 77, 191)",
    letterSpacing: 3,
  },
  time: {
    fontSize: SCREEN_WIDTH / 10,
    textAlign: "center",
    color: "rgb(168, 77, 191)",
    fontWeight: "800",
    letterSpacing: 6,
  },
});
