import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { Fontisto, MaterialCommunityIcons } from "@expo/vector-icons";
const KnowByNameContainer = () => {
  const [text, setText] = React.useState("");
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 10,
        paddingBottom: 10,
      }}
    >
      <View
        style={{
          backgroundColor: "rgba(79,255,176,.5)",
          width: "90%",
          height: 50,
          flexDirection: "row",
          borderRadius: 10,
        }}
      >
        <TextInput
          placeholder="Please enter the name"
          style={{
            fontFamily: "serif",
            width: "80%",
            height: "100%",
            fontSize: 20,
            alignItems: "center",
            justifyContent: "center",
            marginLeft: 10,
          }}
        />
        <View
          style={{
            width: "20%",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Fontisto name={"search"} size={30} color={"green"} />
        </View>
      </View>
      <View
        style={{
          width: "90%",
          height: 50,
          flexDirection: "row",
          borderRadius: 10,
        }}
      >
        <View
          style={{
            width: "80%",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
            marginLeft: 10,
          }}
        />
        <View
          style={{
            width: "20%",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity>
            <MaterialCommunityIcons name={"send"} size={30} color={"green"} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default KnowByNameContainer;

const styles = StyleSheet.create({});
