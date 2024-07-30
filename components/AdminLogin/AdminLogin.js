import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Credits from "../Home/Credits";
import Login from "./Login";
import NavBar from "../Home/NavBar";
import Padding from "../Home/Padding";
const AdminLogin = () => {
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        alignItems: "center",
      }}
    >
      <NavBar />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Credits />
        <Login />
        <Padding />
      </ScrollView>
    </View>
  );
};

export default AdminLogin;

const styles = StyleSheet.create({});
