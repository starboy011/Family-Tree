import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
} from "react-native";
import axios from "axios";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const GenerationList = ({ Id }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    setLoading(true); // Start loading when the ID changes
    axios
      .get(`http://192.168.68.123:8080/generation/${Id}`)
      .then((response) => {
        const names = response.data.map((item) => ({
          id: item.id,
          name: item.data.name,
        }));
        setData(names);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [Id]);

  const handleItemPress = (personId) => {
    navigation.navigate("FamilyTreeWithId", { personId });
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleItemPress(item.id)}>
            <View style={styles.itemContainer}>
              <View
                style={{
                  width: "25%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    width: 80,
                    height: 80,
                    backgroundColor: "blue",
                    borderRadius: 50,
                  }}
                ></View>
              </View>
              <View style={{ width: "75%", justifyContent: "center" }}>
                <Text style={styles.itemText}>{item.name}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
        nestedScrollEnabled={true}
      />
    </View>
  );
};

export default GenerationList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 10,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  itemContainer: {
    borderRadius: 10,
    height: 90,
    width: "95%",
    backgroundColor: "#F0F8FF",
    flexDirection: "row",
  },
  itemText: {
    fontSize: 16,
    marginLeft: 10,
  },
});
