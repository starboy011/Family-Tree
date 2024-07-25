import { StyleSheet, View, Dimensions } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Appbar } from "react-native-paper";
import NavBar from "./NavBar";
import Options from "./Options";
import Updates from "./Updates";
import Padding from "./Padding";
import Credits from "./Credits";

const { width, height } = Dimensions.get("window");
const Home = () => {
  return (
    <View style={{ backgroundColor: "white", alignItems: "center" }}>
      <NavBar />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Options />
        <Updates />
        <Credits />
        <Padding />
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  container: {
    flex: 1,
  },
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  homeBodyContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  barberShopsContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});
