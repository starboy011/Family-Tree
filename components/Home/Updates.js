import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import CustomOption from "./CustomOption";
const { width, height } = Dimensions.get("window");

const Updates = () => {
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
      ></LinearGradient>
      <View style={styles.backgroundImage}>
        <View style={styles.container}>
          <View style={{ width: "100%", height: 60 }}>
            <LinearGradient
              colors={["#ff4d6d", "#c9184a", "#590d22"]}
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
                  color: "white",
                }}
              >
                Updates
              </Text>
            </LinearGradient>
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
    height: 600,
    width: width * 0.95,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#fff0f3",
  },
  container: {
    flex: 1,
  },
});

export default Updates;
