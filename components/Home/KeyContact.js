import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

const KeyContact = () => {
  return (
    <View
      style={{
        width: "33.33%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 20,
      }}
      Generation
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
        <Text style={{ color: "black", fontWeight: "bold" }}>Option 3</Text>
      </View>
    </View>
  );
};

export default KeyContact;

const styles = StyleSheet.create({});
