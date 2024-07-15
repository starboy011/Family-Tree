import { StyleSheet, Text, View } from "react-native";
import React from "react";

const NameOption = () => {
  return (
    <View
      style={{
        width: "33.33%",
        height: "100%",

        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          height: "60%",
          backgroundColor: "white",
          width: 70,
          borderRadius: 10,
        }}
      ></View>
      <View
        style={{
          height: "40%",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "black", fontWeight: "bold" }}>Option 1</Text>
      </View>
    </View>
  );
};

export default NameOption;

const styles = StyleSheet.create({});
