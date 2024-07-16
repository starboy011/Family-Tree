import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import NameOption from "./NameOption";
import Generation from "./Generation";
import KeyContact from "./KeyContact";
const { width, height } = Dimensions.get("window");

const Options = () => {
  return (
    <View
      style={{
        width: "100%",
        paddingTop: 20,
        paddingBottom: 20,
        overflow: "hidden",
        borderRadius: 10,
      }}
    >
      <View style={styles.backgroundImage}>
        <View style={styles.container}>
          <View style={{ width: "100%", height: "20%" }}>
            <LinearGradient
              colors={["#4c669f", "#3b5998", "#192f6a"]}
              style={{
                flex: 1,
                paddingLeft: 15,
                justifyContent: "center",
                borderRadius: 10,
              }}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            >
              <Text
                style={{
                  fontFamily: "serif",
                  fontSize: 30,
                  fontWeight: "bold",
                  color: "white", // Text color
                }}
              >
                Explore by
              </Text>
            </LinearGradient>
          </View>
          <View
            style={{
              width: "100%",
              height: "80%",
              flexDirection: "row",
              paddingTop: 10,
            }}
          >
            <NameOption />
            <Generation />
            <KeyContact />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    height: 300,
    width: width * 0.95,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#F0F8FF",
  },
  container: {
    flex: 1,
  },
});

export default Options;
