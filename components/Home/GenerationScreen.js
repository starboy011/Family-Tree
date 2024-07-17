import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Appbar } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { RadioButton } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import GenerationList from "./GenerationList";

const GenerationScreen = () => {
  const navigation = useNavigation();
  const [checked, setChecked] = React.useState("10");

  return (
    <>
      <Appbar.Header style={{ backgroundColor: "#F0F8FF" }}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Home" />
        <Appbar.Action
          icon={() => (
            <MaterialCommunityIcons name="tree" size={25} color="black" />
          )}
          onPress={() => {
            navigation.navigate("FullFamilyTree");
          }}
        />
      </Appbar.Header>

      <View style={styles.container}>
        <View style={styles.title}>
          <LinearGradient
            colors={["#4c669f", "#3b5998", "#192f6a"]}
            style={{
              flex: 1,
              paddingLeft: 15,
              paddingRight: 15,
              marginTop: 10,
              justifyContent: "center",
              borderRadius: 10,
              width: "95%",
            }}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          >
            <Text
              style={{
                fontSize: 20,
                fontFamily: "serif",
                fontWeight: "bold",
                color: "white",
                marginLeft: 10,
              }}
            >
              Select generation
            </Text>
          </LinearGradient>
        </View>
        <View style={{ width: "100%", height: 150 }}>
          <View
            style={{
              width: "100%",
              height: "50%",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <RadioButton.Item
              value="7"
              style={{ borderRadius: 10 }}
              labelStyle={{
                backgroundColor: "rgba(240,248,255,1)",
                width: 35,
                height: 25,
                textAlign: "center",
                borderRadius: 10,
              }}
              label="7th"
              status={checked === "7" ? "checked" : "unchecked"}
              onPress={() => setChecked("7")}
            />
            <RadioButton.Item
              value="8"
              style={{ borderRadius: 10 }}
              labelStyle={{
                backgroundColor: "rgba(240,248,255,1)",
                width: 35,
                height: 25,
                textAlign: "center",
                borderRadius: 10,
              }}
              label="8th"
              status={checked === "8" ? "checked" : "unchecked"}
              onPress={() => setChecked("8")}
            />
            <RadioButton.Item
              value="9"
              style={{ borderRadius: 10 }}
              label="9th"
              labelStyle={{
                backgroundColor: "rgba(240,248,255,1)",
                width: 35,
                height: 25,
                textAlign: "center",
                borderRadius: 10,
              }}
              status={checked === "9" ? "checked" : "unchecked"}
              onPress={() => setChecked("9")}
            />
            <RadioButton.Item
              value="10"
              style={{ borderRadius: 10 }}
              label="10th"
              status={checked === "10" ? "checked" : "unchecked"}
              labelStyle={{
                backgroundColor: "rgba(240,248,255,1)",
                width: 35,
                height: 25,
                textAlign: "center",
                borderRadius: 10,
              }}
              onPress={() => setChecked("10")}
            />
          </View>
          <View
            style={{
              width: "100%",
              height: "50%",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <RadioButton.Item
              value="11"
              style={{ borderRadius: 10 }}
              label="11th"
              status={checked === "11" ? "checked" : "unchecked"}
              onPress={() => setChecked("11")}
              labelStyle={{
                backgroundColor: "rgba(240,248,255,1)",
                width: 35,
                height: 25,
                textAlign: "center",
                borderRadius: 10,
              }}
            />
            <RadioButton.Item
              value="12"
              style={{ borderRadius: 10 }}
              label="12th"
              status={checked === "12" ? "checked" : "unchecked"}
              onPress={() => setChecked("12")}
              labelStyle={{
                backgroundColor: "rgba(240,248,255,1)",
                width: 35,
                height: 25,
                textAlign: "center",
                borderRadius: 10,
              }}
            />
            <RadioButton.Item
              value="13"
              style={{ borderRadius: 10 }}
              label="13th"
              status={checked === "13" ? "checked" : "unchecked"}
              labelStyle={{
                backgroundColor: "rgba(240,248,255,1)",
                width: 35,
                height: 25,
                textAlign: "center",
                borderRadius: 10,
              }}
              onPress={() => setChecked("13")}
            />
          </View>
        </View>
        <View
          style={{
            backgroundColor: "rgba(240,248,255,1)",
            width: "98%",
            borderRadius: 10,
            flex: 1,
          }}
        >
          <GenerationList Id={checked} />
        </View>
      </View>
    </>
  );
};

export default GenerationScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
  },
  title: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
