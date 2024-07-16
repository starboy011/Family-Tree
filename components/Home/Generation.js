import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome6 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const Generation = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        width: "33.33%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 20,
      }}
      Generation
    >
      <TouchableOpacity onPress={() => navigation.navigate("GenerationScreen")}>
        <View
          style={{
            height: 80,
            backgroundColor: "white",
            width: 80,
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FontAwesome6 name={"people-line"} size={40} color={"#4c669f"} />
        </View>
      </TouchableOpacity>
      <View
        style={{
          height: 80,
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "black", fontWeight: "bold" }}>Generation</Text>
      </View>
    </View>
  );
};

export default Generation;

const styles = StyleSheet.create({});
