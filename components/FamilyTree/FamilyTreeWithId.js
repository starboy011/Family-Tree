import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ReactNativeZoomableView } from "@openspacelabs/react-native-zoomable-view";
import { useRoute } from "@react-navigation/native";

const FullFamilyTree = () => {
  const [data, setData] = useState(null);
  const route = useRoute();
  const { personId } = route.params;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://192.168.68.123:8080/tree/${personId}`
        );
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const renderTree = (nodes, isHead = false) => {
    if (!nodes) return null;

    return (
      <View style={styles.node}>
        <View style={styles.nodeContent}>
          <View style={styles.nodeCircle}>
            {!isHead && <View style={styles.nodeLine}></View>}
          </View>
          <Text style={styles.label}>{nodes.label}</Text>
        </View>
        {nodes.children && (
          <View style={styles.childrenContainer}>
            {nodes.children.map((child, index) => (
              <View key={index} style={styles.childNode}>
                {renderTree(child)}
              </View>
            ))}
          </View>
        )}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <ReactNativeZoomableView
          maxZoom={2}
          minZoom={0.1}
          zoomStep={1}
          initialZoom={1}
          contentWidth={10000000000}
          contentHeight={10000000}
          style={styles.zoomableView}
        >
          {data ? (
            <View style={styles.rootNode}>{renderTree(data, true)}</View>
          ) : (
            <Text>Loading...</Text>
          )}
        </ReactNativeZoomableView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FullFamilyTree;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  zoomableView: {
    padding: 10,
  },
  rootNode: {
    flexDirection: "row",
    marginBottom: 20,
  },
  node: {
    alignItems: "center",
    marginHorizontal: 10,
  },
  nodeContent: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  nodeCircle: {
    width: 50,
    height: 50,
    borderRadius: 30,
    backgroundColor: "red",
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  nodeLine: {
    width: 2,
    height: 11,
    backgroundColor: "black",
    marginBottom: 61,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  childrenContainer: {
    flexDirection: "row",
    marginTop: 20,
    marginLeft: -20,
    borderTopWidth: 1,
    borderTopColor: "black",
    paddingTop: 10,
  },
  childNode: {
    marginHorizontal: 10,
  },
});
