import React, { useState } from "react";
import { StyleSheet, Text, View, Image, ActivityIndicator } from "react-native";
import { Appbar, TextInput } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import axios from "axios";

const Search = () => {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [results, setResults] = useState([]);
  const [noResult, setNoResult] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const handleItemPress = (personId) => {
    navigation.navigate("FamilyTreeWithId", { personId });
  };

  const handleFirstName = (value) => {
    setName(value);
  };

  const handleSearch = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `http://192.168.68.116:8085/search/${name}`
      );
      if (response.data && response.data.length > 0) {
        setResults(response.data);
        setNoResult(false);
      } else {
        setResults([]);
        setNoResult(true);
      }
      setShowResult(true);
    } catch (error) {
      console.error(error);
      setNoResult(true);
      setShowResult(true);
    } finally {
      setIsLoading(false);
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
              Enter Name
            </Text>
          </LinearGradient>
        </View>
        <TextInput
          label="First Name"
          value={name}
          onChangeText={handleFirstName}
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
            <TouchableOpacity onPress={handleSearch}>
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
                Search
              </Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
        <ScrollView
          style={{ width: "95%", marginLeft: 20, marginTop: 10 }}
          showsVerticalScrollIndicator={false}
        >
          {isLoading && (
            <View style={styles.loaderContainer}>
              <ActivityIndicator size="large" color="#0000ff" />
            </View>
          )}
          {showResult && (
            <View style={styles.results}>
              {noResult ? (
                <Text style={styles.noResultText}>No name found</Text>
              ) : (
                results.map((result) => (
                  <TouchableOpacity onPress={() => handleItemPress(result.id)}>
                    <View key={result.id} style={styles.resultItem}>
                      <Image
                        source={{ uri: result.data.img }}
                        style={styles.resultImage}
                      />
                      <Text style={styles.resultText}>{result.data.name}</Text>
                    </View>
                  </TouchableOpacity>
                ))
              )}
            </View>
          )}
        </ScrollView>
      </View>
    </>
  );
};

export default Search;

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
  results: {
    marginTop: 20,
    width: "95%",
  },
  noResultText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "red",
    textAlign: "center",
  },
  resultItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    backgroundColor: "#F0F8FF",
    padding: 10,
    borderRadius: 5,
  },
  resultImage: {
    width: 80,
    height: 80,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  resultText: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 20,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
});
