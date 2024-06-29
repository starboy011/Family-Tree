import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import React from "react";

const ScissorAnimation = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.imagecontainer}>
          <ImageBackground
            source={require("./SplashScreen.gif")}
            style={styles.backgroundImage}
          ></ImageBackground>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ScissorAnimation;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  imagecontainer: { width: "20%", height: "10%" },
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});
