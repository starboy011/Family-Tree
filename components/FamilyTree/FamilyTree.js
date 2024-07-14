import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Searchbar, Button } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const FamilyTree = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <View
          style={{
            width: "80%",
            backgroundColor: "rgba(79,255,176,.1)",
            height: "60%",
            borderRadius: 10,
            flexDirection: "row",
          }}
        >
          <View
            style={{
              width: "70%",
              height: "100%",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                marginLeft: 10,
                fontSize: 25,
                color: "black",
                textShadowColor: "rgba(0, 0, 0, .5)",
                textShadowOffset: { width: -1, height: 1 },
                textShadowRadius: 10,
                textTransform: "uppercase",
                letterSpacing: 2,
              }}
            >
              VIEW FULL TREE
            </Text>
          </View>
          <View style={{ width: "30%", height: "100%" }}></View>
        </View>
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
