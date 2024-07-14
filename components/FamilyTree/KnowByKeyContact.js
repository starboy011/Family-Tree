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

const KnowByKeyContact = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://192.168.68.123:8080/keyNames")
      .then((response) => {
        // Extract names from response data
        const names = response.data.map((item) => item.data.name);
        setData(names);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

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
          <TouchableOpacity>
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
                    backgroundColor: "green",
                    borderRadius: 50,
                  }}
                ></View>
              </View>
              <View style={{ width: "75%", justifyContent: "center" }}>
                <Text style={styles.itemText}>{item}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
        nestedScrollEnabled={true}
      />
    </View>
  );
};

export default KnowByKeyContact;

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
    margin: 10,
    height: 90,
    width: "95%",
    backgroundColor: "rgba(79,255,176,.3)",
    flexDirection: "row",
  },
  itemText: {
    fontSize: 16,
    marginLeft: 10,
  },
});
