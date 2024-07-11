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
              <View style={styles.nodeContent}>
                <View style={styles.nodeCircle}>
                  {!isHead && <View style={styles.nodeLine}></View>}
                </View>
                <Text style={styles.label}>{nodes.label}</Text>
              </View>
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
});
