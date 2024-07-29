import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Credits from "../Home/Credits";
import Options from "../Home/Options";
import Updates from "../Home/Updates";
import Padding from "../Home/Padding";
import Login from "./Login";
import NavBar from "../Home/NavBar";
const AdminLogin = () => {
  return (
    // <SafeAreaView>
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
      </ScrollView>
    </View>
    // </SafeAreaView>
  );
};

export default AdminLogin;

const styles = StyleSheet.create({});
