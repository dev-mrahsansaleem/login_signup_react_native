import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function SignUp({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 24 }}>SignUp</Text>
      <TouchableOpacity
        style={{
          backgroundColor: "red",
          padding: 10,
          borderRadius: 5,
          margin: 10,
        }}
        onPress={() => {
          // navigationRef.current?.navigate("Login");
          // navigation.push("Login");
          navigation.pop();
        }}
      >
        <Text style={{ color: "white", fontSize: 16 }}>Goto login</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});
