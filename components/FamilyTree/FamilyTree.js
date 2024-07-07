import React, { useState, useEffect } from "react";
import { StyleSheet, View, ScrollView, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Person from "./Person";
import { Searchbar } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const FamilyTree = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [persons, setPersons] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state
  const navigation = useNavigation();

  useEffect(() => {
    fetch("http://192.168.68.123:8080/names")
      .then((response) => response.json())
      .then((data) => {
        const names = data.map((item) => item.data.name);
        setPersons(names);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

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
          <TouchableOpacity
            onPress={() => navigation.navigate("FullFamilyTree")}
          >
            <MaterialCommunityIcons name={"tree"} size={50} color={"green"} />
          </TouchableOpacity>
        </View>
      </View>
      {loading ? (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="green" />
        </View>
      ) : (
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          {filteredPersons.map((person, index) => (
            <View key={index} style={styles.personContainer}>
              <TouchableOpacity style={{ width: "100%" }}>
                <Person name={person} />
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default FamilyTree;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
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
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
