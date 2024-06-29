// FamilyTree.js
import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Person from "./Person";
import { Searchbar } from "react-native-paper";

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

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <Searchbar
          placeholder="Search by name"
          onChangeText={setSearchQuery}
          value={searchQuery}
          style={{ width: "90%" }}
        />
      </View>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {persons.map((person, index) => (
          <View key={index} style={styles.personContainer}>
            <Person name={person} />
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
