import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { TextInput } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";
const { width } = Dimensions.get("window");

const Login = () => {
  const [username, setUsername] = React.useState("");
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
        <View
          style={{
            width: "100%",
            height: 210,
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <TextInput
            label="Username"
            value={username}
            onChangeText={(text) => setUsername(text)}
            style={{ width: "95%" }}
          />
          <TextInput
            label="Password"
            secureTextEntry
            style={{ width: "95%" }}
          />
          <View
            style={{
              width: "95%",
              height: 50,
              justifyContent: "flex-end",
              alignItems: "flex-end",
            }}
          >
            <TouchableOpacity
              style={{
                width: 100,
                height: 40,
                backgroundColor: "#ff8400",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 10,
              }}
            >
              <Text style={{ fontFamily: "serif", fontSize: 20 }}>Login</Text>
            </TouchableOpacity>
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
