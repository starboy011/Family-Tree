import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Searchbar } from "react-native-paper";

const GlobalSearch = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search by name"
        onChangeText={setSearchQuery}
        value={searchQuery}
        style={{ width: "90%" }}
      />
    </View>
  );
};

export default GlobalSearch;

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
