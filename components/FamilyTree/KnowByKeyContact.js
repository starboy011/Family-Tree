import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
  ImageBackground,
} from "react-native";
import axios from "axios";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const KnowByKeyContact = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    axios
      .get("http://clientapp.skylasoft.com:8085/keyNames")
      .then((response) => {
        const names = response.data.map((item) => ({
          id: item.id,
          name: item.data.name,
          img: item.data.img,
        }));
        setData(names);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  const handleItemPress = (personId) => {
    navigation.navigate("FamilyTreeWithId", { personId });
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ImageBackground
          source={require("./SplashScreen.gif")}
          style={styles.backgroundImage}
        ></ImageBackground>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        style={{ width: "95%" }}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleItemPress(item.id)}>
            <View style={styles.itemContainer}>
              <ImageBackground
                source={{ uri: item.img }}
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 50,
                  justifyContent: "center",
                  alignItems: "center",
                  overflow: "hidden",
                  marginLeft: 10,
                }}
              />
              <View style={{ marginLeft: 10, justifyContent: "center" }}>
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

export default KnowByKeyContact;

const styles = StyleSheet.create({
  backgroundImage: {
    width: 100,
    height: 100,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "90%",
  },
  itemContainer: {
    borderRadius: 10,
    marginTop: 10,
    height: 90,
    width: "100%",
    backgroundColor: "#F0F8FF",
    flexDirection: "row",
    alignItems: "center",
  },
  itemText: {
    fontSize: 16,
    marginLeft: 10,
    fontFamily: "serif",
  },
});
