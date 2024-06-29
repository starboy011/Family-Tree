import { StyleSheet, View } from "react-native";
import React from "react";
import { Button, Text } from "react-native-paper";
const LoginFotter = () => {
  return (
    <View style={styles.container}>
      <Button
        icon="google"
        mode="contained"
        textColor="black"
        style={{
          width: "90%",
          marginTop: 50,
          backgroundColor: "white",
          opacity: 1,
        }}
      >
        Sign in with Google
      </Button>
      <Text variant="labelSmall" style={{ marginTop: 25 }}>
        OR
      </Text>
      <Button
        icon="account-plus"
        mode="contained"
        textColor="black"
        style={{
          width: "90%",
          marginTop: 25,
          backgroundColor: "white",
          opacity: 1,
        }}
      >
        Sign up
      </Button>
    </View>
  );
};

export default LoginFotter;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(133, 118, 255, 0.1)",
    borderTopEndRadius: 10,
    borderTopLeftRadius: 10,
    width: "90%",
    height: 300,
    alignItems: "center",
  },
});
