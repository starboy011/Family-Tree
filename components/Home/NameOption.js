import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const NameOption = () => {
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
    >
      <TouchableOpacity onPress={() => navigation.navigate("Relationship")}>
        <View
          style={{
            height: 80,
            backgroundColor: "white",
            width: 80,
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <MaterialIcons name={"people"} size={50} color={"#4c669f"} />
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
        <Text style={{ color: "black", fontWeight: "bold" }}> Names</Text>
      </View>
    </View>
  );
};

export default NameOption;

const styles = StyleSheet.create({});
