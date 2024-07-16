import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Appbar } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { RadioButton } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";

const Relationship = () => {
  const navigation = useNavigation();
  return (
    <>
      <Appbar.Header style={{ backgroundColor: "#F0F8FF" }}>
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

export default Relationship;

const styles = StyleSheet.create({});
