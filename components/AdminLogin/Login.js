import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import NavBar from "../Home/NavBar";

const { width } = Dimensions.get("window");

const Login = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.backgroundImage}>
        <View style={styles.container}>
          <View style={{ width: "100%", height: 60 }}>
            <LinearGradient
              colors={["#ffbc73", "#ff9f38", "#ff8400"]}
              style={styles.headerGradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            >
              <Text style={styles.headerText}>Admin login</Text>
            </LinearGradient>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    paddingTop: 20,
    paddingBottom: 20,
    overflow: "hidden",
    borderRadius: 10,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width: width * 0.95,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#fff1e0",
  },
  container: {
    flex: 1,
  },
  headerGradient: {
    flex: 1,
    paddingLeft: 15,
    justifyContent: "center",
    borderRadius: 10,
  },
  headerText: {
    fontFamily: "serif",
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
  carouselContainer: {
    marginTop: 20,
  },
  carousel: {
    flexGrow: 0,
  },
  carouselContentContainer: {
    // alignItems: "center",
  },
  slide: {
    backgroundColor: "white",
    height: 400,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 5,
    overflow: "hidden",
    justifyContent: "flex-end",
  },
  slideText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  imageBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Login;
