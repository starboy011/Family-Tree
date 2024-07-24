import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { WebView } from "react-native-webview";
const Video = () => {
  return (
    <View style={styles.container}>
      <WebView source={{ uri: "https://www.youtube.com/embed/HtkvBbtyADQ" }} />
    </View>
  );
};

export default Video;

const styles = StyleSheet.create({
  container: {
    height: 220,
    width: "90%",
  },
});
