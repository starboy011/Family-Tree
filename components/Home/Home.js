import { StyleSheet, Text, View, StatusBar, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("window");
const Home = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ScrollView
          stickyHeaderIndices={[1]}
          showsVerticalScrollIndicator={false}
        ></ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  container: {
    flex: 1,
    backgroundColor: "red",
  },
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  homeBodyContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  barberShopsContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});
