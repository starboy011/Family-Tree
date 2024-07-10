import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Alert, // Import Alert from React Native
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ReactNativeZoomableView } from "@openspacelabs/react-native-zoomable-view";
import { useRoute } from "@react-navigation/native";

const FullFamilyTree = () => {
  const [data, setData] = useState(null);
  const [expandedNodes, setExpandedNodes] = useState({});
  const [error, setError] = useState(null); // State for error handling
  const route = useRoute();
  const { personId } = route.params;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://192.168.68.123:8080/tree/${personId}`
        );
        if (!response.ok) {
          throw new Error("No Data found");
        }
        const result = await response.json();
        setData(result);

        // Initialize expandedNodes with the root node id or any nodes you want to be expanded initially
        if (result) {
          const initialExpanded = {};
          initializeExpandedState(result, initialExpanded);
          setExpandedNodes(initialExpanded);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error.message); // Set error state with the error message
      }
    };

    fetchData();
  }, []);

  const initializeExpandedState = (node, expandedState) => {
    if (node.id) {
      expandedState[node.id] = true; // Initialize all nodes as expanded initially
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

  const renderTree = (nodes, isHead = false) => {
    if (!nodes) return null;

    return (
      <View style={styles.node}>
        <TouchableOpacity onPress={() => toggleNode(nodes.id)}>
          <View style={styles.nodeContent}>
            <View style={styles.nodeCircle} />
            <Text style={styles.label}>{nodes.label}</Text>
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

  if (error) {
    return (
      <SafeAreaView style={styles.containerError}>
        <Text>{error}</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <ReactNativeZoomableView
          maxZoom={2}
          minZoom={0.1}
          zoomStep={1}
          initialZoom={0.8}
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
    backgroundColor: "white",
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
