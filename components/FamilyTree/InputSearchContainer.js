import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { RadioButton } from "react-native-paper";

const InputSearchContainer = ({ selectedOption, setSelectedOption }) => {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          width: "90%",
          backgroundColor: "rgba(79,255,176,.1)",
          borderRadius: 10,
          justifyContent: "center",
          flexDirection: "row",
          paddingLeft: 10,
          paddingRight: 10,
        }}
      >
        <RadioButton.Item
          style={{ width: 190 }}
          label="Know by name"
          labelStyle={{ fontSize: 13, fontFamily: "serif" }}
          value="first"
          status={selectedOption === "first" ? "checked" : "unchecked"}
          onPress={() => setSelectedOption("first")}
        />
        <RadioButton.Item
          style={{ width: 190 }}
          label="Know by key contact"
          labelStyle={{ fontSize: 13, fontFamily: "serif" }}
          value="second"
          status={selectedOption === "second" ? "checked" : "unchecked"}
          onPress={() => setSelectedOption("second")}
        />
      </View>
    </View>
  );
};

export default InputSearchContainer;

const styles = StyleSheet.create({});
