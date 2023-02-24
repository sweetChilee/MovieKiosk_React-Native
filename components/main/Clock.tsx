import { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

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
        <Text style={{ fontSize: 30 }}>오후</Text>
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
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgb(66, 66, 66)",
  },
  date: {
    fontSize: 15,
    marginLeft: 20,
    fontWeight: "500",
    color: "rgb(168, 77, 191)",
  },
  time: {
    fontSize: 70,
    color: "rgb(168, 77, 191)",
  },
});
