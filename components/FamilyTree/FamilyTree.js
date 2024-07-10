import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  ActivityIndicator,
  Modal,
  Text,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Person from "./Person";
import { Searchbar } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const FamilyTree = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [persons, setPersons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false); // State for modal visibility
  const [selectedPerson, setSelectedPerson] = useState(null); // State to store the selected person
  const navigation = useNavigation();

  useEffect(() => {
    fetch("http://192.168.68.123:8080/names")
      .then((response) => response.json())
      .then((data) => {
        const updatedPersons = data.map((item) => ({
          id: item.id,
          name: item.data.name,
          generation: item.generation,
        }));
        setPersons(updatedPersons);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handlePersonPress = (person) => {
    if (person.generation < 5) {
      setSelectedPerson(person);
      setShowModal(true);
    } else {
      navigation.navigate("FamilyTreeWithId", {
        personId: person.id,
      });
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

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
              <TouchableOpacity onPress={() => handlePersonPress(person)}>
                <Person name={person.name} />
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      )}

      {/* Modal */}
      <Modal
        visible={showModal}
        animationType="slide"
        transparent={true}
        onRequestClose={closeModal} // For Android back button
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>
              Tree size is huge. Please narrow down your search.
            </Text>
            <TouchableOpacity style={styles.modalButton} onPress={closeModal}>
              <Text style={styles.modalButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  modalText: {
    marginBottom: 20,
    textAlign: "center",
  },
  modalButton: {
    backgroundColor: "green",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  modalButtonText: {
    color: "white",
    fontSize: 16,
  },
});
