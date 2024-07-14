import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { RadioButton } from "react-native-paper";
const InputSearchContainer = () => {
  const [checked, setChecked] = React.useState("first");
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <View
        style={{
          width: "90%",
          backgroundColor: "rgba(79,255,176,.1)",
          borderRadius: 10,
        }}
      >
        <RadioButton.Item
          label="Know by name"
          labelStyle={{ fontSize: 20, fontFamily: "serif" }}
          value="first"
          status={checked === "first" ? "checked" : "unchecked"}
          onPress={() => setChecked("second")}
        />
        <RadioButton.Item
          label="Know by key contact"
          labelStyle={{ fontSize: 20, fontFamily: "serif" }}
          value="second"
          status={checked === "second" ? "checked" : "unchecked"}
          onPress={() => setChecked("first")}
        />
      </View>
    </View>
  );
};

export default InputSearchContainer;

const styles = StyleSheet.create({});
