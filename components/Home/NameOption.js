import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

const NameOption = () => {
  return (
    <View
      style={{
        width: "33.33%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 20,
      }}
    >
      <TouchableOpacity>
        <View
          style={{
            height: 80,
            backgroundColor: "white",
            width: 80,
            borderRadius: 10,
          }}
        ></View>
      </TouchableOpacity>
      <View
        style={{
          height: 80,
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "black", fontWeight: "bold" }}> Name</Text>
      </View>
    </View>
  );
};

export default NameOption;

const styles = StyleSheet.create({});
