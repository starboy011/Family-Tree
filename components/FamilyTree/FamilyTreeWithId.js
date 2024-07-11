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

const FullFamilyTree = () => {
  const [data, setData] = useState(null);
  const [expandedNodes, setExpandedNodes] = useState({});
  const [error, setError] = useState(null);
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

        if (result) {
          const initialExpanded = {};
          initializeExpandedState(result, initialExpanded);
          setExpandedNodes(initialExpanded);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  const initializeExpandedState = (node, expandedState) => {
    if (node.id) {
      expandedState[node.id] = true;
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

    const nodeStyle = [
      styles.nodeContent,
      nodes.id === personId && styles.selectedNodeContent,
    ];

    return (
      <View style={styles.node}>
        <TouchableOpacity onPress={() => toggleNode(nodes.id)}>
          <View style={styles.nodeContainer}>
            {!isHead && (
              <View
                style={{
                  backgroundColor: "black",
                  height: 50,
                  width: 10,
                  borderBottomEndRadius: 10,
                  borderBottomLeftRadius: 10,
                }}
              ></View>
            )}
            <View style={styles.nodeContentShadow}>
              <View style={nodeStyle}>
                <View style={styles.nodeCircle}>
                  {!isHead && <View style={styles.nodeLine}></View>}
                </View>
                <Text style={styles.label}>{nodes.label}</Text>
              </View>
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

  if (error) {
    return (
      <SafeAreaView style={styles.containerError}>
        <Text>{error}</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ReactNativeZoomableView
        maxZoom={2}
        minZoom={0.05}
        zoomStep={1}
        initialZoom={0.2}
        contentWidth={100000}
        contentHeight={10000}
      >
        {data ? (
          <View style={styles.rootNode}>{renderTree(data, true)}</View>
        ) : (
          <View style={styles.imagecontainer}>
            <ImageBackground
              source={require("./SplashScreen.gif")}
              style={styles.backgroundImage}
            ></ImageBackground>
          </View>
        )}
      </ReactNativeZoomableView>
    </SafeAreaView>
  );
};

export default FullFamilyTree;

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
  containerError: {
    backgroundColor: "white",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff7e6",
  },
  scrollViewContent: {
    flexGrow: 1,
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
    width: 280,
    borderRadius: 20,
    height: 150,
    backgroundColor: "#e0ffef",
    borderWidth: 0.5,
    borderColor: "grey",
  },
  nodeContainer: {
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  selectedNodeContent: {
    backgroundColor: "#fdffd1",
  },
  nodeContentShadow: {
    width: 285,
    borderRadius: 20,
    height: 155,
    backgroundColor: "black",
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
    marginTop: 30,
    borderTopWidth: 5,
    borderRadius: 10,
    borderTopColor: "#4a453a",
  },
  childNode: {
    marginHorizontal: 10,
  },
  nodeLine: {
    width: 1,
    height: 70,
    backgroundColor: "black",
    position: "absolute",
    top: 0,
    left: 35, // Center the line horizontally in the nodeCircle
  },
});
