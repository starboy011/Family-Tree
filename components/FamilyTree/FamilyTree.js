// FamilyTree.js
import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Person from "./Person";
import { Searchbar } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome6, MaterialCommunityIcons } from "@expo/vector-icons";

const FamilyTree = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const persons = [
    "Pranav Choudhary",
    "Manish Choudhary",
    "Neha Choudhary",
    "Rishav Choudhary",
    "Pranav Choudhary",
    "Manish Choudhary",
    "Neha Choudhary",
    "Rishav Choudhary",
    "Pranav Choudhary",
    "Manish Choudhary",
    "Neha Choudhary",
    "Rishav Choudhary",
    "Pranav Choudhary",
    "Manish Choudhary",
    "Neha Choudhary",
    "Rishav Choudhary",
    "Pranav Choudhary",
    "Manish Choudhary",
    "Neha Choudhary",
    "Rishav Choudhary",
    "Pranav Choudhary",
    "Manish Choudhary",
    "Neha Choudhary",
    "Rishav Choudhary",
    "Pranav Choudhary",
    "Manish Choudhary",
    "Neha Choudhary",
    "Rishav Choudhary",
    "Pranav Choudhary",
    "Manish Choudhary",
    "Neha Choudhary",
    "Rishav Choudhary",
    "Pranav Choudhary",
    "Manish Choudhary",
    "Neha Choudhary",
  ];
  const filteredPersons = persons.filter((person) =>
    person.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <Searchbar
          placeholder="Search by name"
          onChangeText={setSearchQuery}
          value={searchQuery}
          style={{ width: "80%" }}
        />
        <View
          style={{
            width: 50,
            height: 100,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity>
            <MaterialCommunityIcons name={"tree"} size={50} color={"green"} />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {filteredPersons.map((person, index) => (
          <View key={index} style={styles.personContainer}>
            <TouchableOpacity style={{ width: "100%" }}>
              <Person name={person} />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default FamilyTree;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1, // Ensure the SafeAreaView uses all available space
  },
  searchContainer: {
    height: 100,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
  },
  scrollViewContent: {
    paddingBottom: 20,
  },
  personContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
});
