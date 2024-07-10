import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

const Person = ({ name }) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          width: 100,
          height: 100,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: 95,
            height: 95,
            borderRadius: 50,
            backgroundColor: "red",
          }}
        ></View>
      </View>

      <View
        style={{
          flex: 1,
          height: 100,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontFamily: "serif", fontSize: 18 }}>{name}</Text>
      </View>
    </View>
  );
};

export default Person;

const styles = StyleSheet.create({
  container: {
    width: "95%",
    height: 100,
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
    borderRadius: 20,
    backgroundColor: "rgba(161, 255, 253,0.2)",
    borderRadius: 25,
  },
});
