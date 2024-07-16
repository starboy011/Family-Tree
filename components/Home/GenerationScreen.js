import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Appbar } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const GenerationScreen = () => {
  return (
    <>
      <Appbar.Header style={{ backgroundColor: "rgba(79,255,176,.1)" }}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Home" />
        <Appbar.Action
          icon={() => (
            <MaterialCommunityIcons name="tree" size={25} color="black" />
          )}
          onPress={() => {
            navigation.navigate("FullFamilyTree");
          }}
        />
      </Appbar.Header>
    </>
  );
};

export default GenerationScreen;

const styles = StyleSheet.create({});
