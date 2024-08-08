import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ReactNativeZoomableView } from "@openspacelabs/react-native-zoomable-view";

const FullFamilyTree = () => {
  const [expandedNodes, setExpandedNodes] = useState({});
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://192.168.68.116:8085/tree");
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
            <View style={styles.imagecontainer}>
              <ImageBackground
                source={require("./SplashScreen.gif")}
                style={styles.backgroundImage}
              ></ImageBackground>
            </View>
          )}
        </ReactNativeZoomableView>
      </ScrollView>
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
    backgroundColor: "white",
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
    height: 350,
    width: 300,
  },
  selectedNodeContent: {
    backgroundColor: "#fdffd1",
  },
  nodeContentShadow: {
    width: 285,
    borderRadius: 20,
    height: 155,
    justifyContent: "center",
  },
  nodeCircle: {
    marginTop: 20,
    width: 85,
    height: 85,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  label: {
    color: "black",
    fontSize: 28,
    fontWeight: "bold",
    textDecorationLine: "underline",
    height: 30,
    width: 340,
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
