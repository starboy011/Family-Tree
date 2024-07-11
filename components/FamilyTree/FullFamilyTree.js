import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ReactNativeZoomableView } from "@openspacelabs/react-native-zoomable-view";
import { shadow } from "react-native-paper";

const FullFamilyTree = () => {
  const [expandedNodes, setExpandedNodes] = useState({});
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://192.168.68.123:8080/tree");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const toggleNode = (label) => {
    setExpandedNodes({
      ...expandedNodes,
      [label]: !expandedNodes[label],
    });
  };

  const renderTree = (nodes, isHead = false) => {
    if (!nodes) return null;

    return (
      <View style={styles.node}>
        <TouchableOpacity onPress={() => toggleNode(nodes.label)}>
          <View style={styles.nodeContentShadow}>
            <View style={styles.nodeContent}>
              <View style={styles.nodeCircle}>
                {!isHead && <View style={styles.nodeLine}></View>}
              </View>
              <Text style={styles.label}>{nodes.label}</Text>
            </View>
          </View>
        </TouchableOpacity>
        {expandedNodes[nodes.label] && nodes.children && (
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
          maxZoom={5}
          minZoom={0.1}
          zoomStep={0.5}
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
  containerError: {
    backgroundColor: "white",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#e7ffe3",
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
    justifyContent: "space-around",
    alignItems: "center",
    display: "flex",
    width: 300,
    borderRadius: 20,
    height: 120,
    backgroundColor: "#e0ffef",
    borderWidth: 0.5,
    borderColor: "grey",
  },
  nodeContentShadow: {
    width: 305,
    borderRadius: 20,
    height: 125,
    backgroundColor: "green",
    borderWidth: 0.5,
    borderColor: "grey",
  },
  nodeCircle: {
    width: 70,
    height: 70,
    borderRadius: 30,
    backgroundColor: "red",
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    backgroundColor: "#8fffad",
    fontSize: 16,
    fontWeight: "bold",
    textDecorationLine: "underline",
    height: 30,
    width: 250,
    textAlign: "center",
    textAlignVertical: "center",
    borderRadius: 25,
  },
  childrenContainer: {
    flexDirection: "row",
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: "black",
    paddingTop: 10,
  },
  childNode: {
    marginHorizontal: 10,
  },
});
