import { StyleSheet, View, Dimensions } from "react-native";
import React from "react";
import { Appbar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
const NavBar = () => {
  const navigation = useNavigation();
  return (
    <View style={{ alignItems: "center" }}>
      <Appbar.Header
        style={{ borderBottomWidth: 0.5, borderColor: "grey", width: "95%" }}
      >
        <Appbar.Content
          titleStyle={{ fontFamily: "serif", fontWeight: 800 }}
          title="MULVANSHAM"
        />
        <Appbar.Action
          icon="magnify"
          size={40}
          onPress={() => navigation.navigate("Search")}
        />
      </Appbar.Header>
    </View>
  );
};

export default NavBar;

const styles = StyleSheet.create({});
