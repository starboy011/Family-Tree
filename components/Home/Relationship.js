import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Appbar } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity } from "react-native-gesture-handler";
import { TextInput } from "react-native-paper";
import RelationshipTree from "../FamilyTree/RelationshipTree";

const Relationship = () => {
  const navigation = useNavigation();
  const [secondName, setSecondName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [relationshipData, setRelationshipData] = useState(null);
  const handleFirstName = (value) => {
    setFirstName(value);
  };
  const handleSecondName = (value) => {
    setSecondName(value);
  };
  const findNodeInChildren = (rootNode, targetId) => {
    if (rootNode.id === 0 && rootNode.children) {
      for (let child of rootNode.children) {
        if (child.id === targetId) {
          return child;
        }
      }
    }
    return null;
  };

  const handleFindRelationship = async () => {
    try {
      const response = await fetch(
        `http://192.168.68.116:8080/relationship/${firstName}/${secondName}`
      );
      const data = await response.json();
      setRelationshipData(data);

      // Ensure data is not null before accessing it
      if (data && data.id === 0) {
        const subtree = findNodeInChildren(data, 1);
        if (subtree) {
          console.log("Subtree found:", JSON.stringify(subtree));
          // Navigate to the RelationshipTree component and pass the subtree
          navigation.navigate("RelationshipTree", { subtree });
        } else {
          console.log("Subtree not found");
        }
      } else {
        console.log(
          "Invalid data structure or no matching root node with id 0"
        );
      }
    } catch (error) {
      console.error("Error fetching relationship data:", error);
    }
  };

  return (
    <>
      <Appbar.Header style={{ backgroundColor: "#F0F8FF" }}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Home" />
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
        <TextInput
          label="First Name"
          value={firstName}
          onChangeText={handleFirstName}
          style={{ width: "95%", marginTop: 10 }}
        />
        <TextInput
          label="Second Name"
          value={secondName}
          onChangeText={handleSecondName}
          style={{ width: "95%", marginTop: 10 }}
        />
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
            <TouchableOpacity onPress={handleFindRelationship}>
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
