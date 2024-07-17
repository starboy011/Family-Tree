import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Appbar } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { RadioButton } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import GenerationList from "./GenerationList";
import { TouchableOpacity } from "react-native-gesture-handler";

const Relationship = () => {
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
              Enter names
            </Text>
          </LinearGradient>
        </View>
        <View style={styles.findrelationship}>
          <LinearGradient
            colors={["#f29479", "#ef3c2d", "#cb1b16"]}
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
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: "serif",
                  fontWeight: "bold",
                  color: "white",
                  marginLeft: 10,
                  textAlign: "center",
                  textAlignVertical: "center",
                }}
              >
                Find relationship
              </Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>
    </>
  );
};

export default Relationship;

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
  findrelationship: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
