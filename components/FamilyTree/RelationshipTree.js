import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ReactNativeZoomableView } from "@openspacelabs/react-native-zoomable-view";
import { useRoute } from "@react-navigation/native";

const RelationshipTree = () => {
  const route = useRoute();
  const { subtree } = route.params; // Extract the passed subtree from navigation params
  const [expandedNodes, setExpandedNodes] = useState({});

  useEffect(() => {
    if (subtree) {
      const initialExpanded = {};
      initializeExpandedState(subtree, initialExpanded);
      setExpandedNodes(initialExpanded);
    }
  }, [subtree]);

  const initializeExpandedState = (node, expandedState) => {
    if (node.id) {
      expandedState[node.id] = true; // Initially, expand all nodes
    }
    if (node.children) {
      node.children.forEach((child) =>
        initializeExpandedState(child, expandedState)
      );
    }
  };

  const toggleNode = (nodeId) => {
    setExpandedNodes((prevExpandedNodes) => ({
      ...prevExpandedNodes,
      [nodeId]: !prevExpandedNodes[nodeId],
    }));
  };

  const renderTree = (nodes) => {
    if (!nodes) return null;

    return (
      <View style={styles.node}>
        <TouchableOpacity onPress={() => toggleNode(nodes.id)}>
          <View style={styles.nodeContainer}>
            <ImageBackground
              source={require("./leaf.png")}
              style={{
                height: 300,
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ImageBackground
                source={{ uri: nodes.img }}
                style={styles.nodeCircle}
              ></ImageBackground>
            </ImageBackground>
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                height: 80,
                width: "100%",
              }}
            >
              <Text style={styles.label}>{nodes.label}</Text>
            </View>
          </View>
        </TouchableOpacity>
        {expandedNodes[nodes.id] && nodes.children && (
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
      <ReactNativeZoomableView
        maxZoom={2}
        minZoom={0.05}
        zoomStep={1}
        initialZoom={0.3}
        contentWidth={100000}
        contentHeight={10000}
      >
        {subtree ? (
          <View style={styles.rootNode}>{renderTree(subtree)}</View>
        ) : (
          <View style={styles.imagecontainer}>
            <ImageBackground
              source={require("./SplashScreen.gif")} // Replace with the correct path to your image
              style={styles.backgroundImage}
            ></ImageBackground>
          </View>
        )}
      </ReactNativeZoomableView>
    </SafeAreaView>
  );
};

export default RelationshipTree;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  imagecontainer: {
    overflow: "hidden",
    borderRadius: 1000,
    width: 500,
    height: 500,
  },
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  rootNode: {
    flexDirection: "row",
    marginBottom: 20,
  },
  node: {
    alignItems: "center",
    marginHorizontal: 30,
  },
  nodeContainer: {
    height: 350,
    width: 350,
  },
  nodeCircle: {
    marginTop: 20,
    width: 100,
    height: 100,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  label: {
    color: "black",
    fontSize: 40,
    fontWeight: "bold",
    textDecorationLine: "underline",
    height: 40,
    width: 400,
    textAlign: "center",
    textAlignVertical: "center",
    borderRadius: 25,
  },
  childrenContainer: {
    flexDirection: "row",
    marginTop: 30,
    borderTopWidth: 5,
    borderRadius: 10,
    borderTopColor: "#4a453a",
  },
  childNode: {
    marginHorizontal: 10,
  },
});
