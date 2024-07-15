import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient"; // Import LinearGradient from expo-linear-gradient

// Import your background image
import OptionBackgroundImage from "./OptionBackgroundImage.png";
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
      <ImageBackground
        source={OptionBackgroundImage}
        style={styles.backgroundImage}
      >
        <View style={styles.container}>
          <View style={{ width: "100%", height: "20%" }}>
            {/* Apply LinearGradient to Text */}
            <LinearGradient
              colors={["#4c669f", "#3b5998", "#192f6a"]}
              style={{
                flex: 1,
                paddingLeft: 15,
                paddingRight: 15,
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
                Explore
              </Text>
            </LinearGradient>
          </View>
          <View style={{ width: "100%", height: "40%" }}></View>
          <View style={{ width: "100%", height: "40%" }}></View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    height: 250,
    width: width * 0.95,
    borderRadius: 10,
    overflow: "hidden",
  },
  container: {
    flex: 1,
  },
});

export default Options;
