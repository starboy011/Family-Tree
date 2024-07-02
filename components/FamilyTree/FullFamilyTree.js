import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ReactNativeZoomableView } from "@openspacelabs/react-native-zoomable-view";

const FullFamilyTree = () => {
  const [expandedNodes, setExpandedNodes] = useState({});

  const data = [
    {
      label: "Rishav",
      children: [
        {
          label: "Pranav",
          children: [
            {
              label: "Aishwarya",
            },
            {
              label: "Neha",
            },
          ],
        },
        {
          label: "Manish",
          children: [
            {
              label: "Rahul",
            },
            {
              label: "Ayush",
              children: [{ label: "Akash" }, { label: "Simran" }],
            },
          ],
        },
      ],
    },
  ];

  const toggleNode = (label) => {
    setExpandedNodes({
      ...expandedNodes,
      [label]: !expandedNodes[label],
    });
  };

  const renderTree = (nodes) => {
    if (!nodes) return null;

    return (
      <View style={styles.node}>
        <TouchableOpacity onPress={() => toggleNode(nodes.label)}>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <View
              style={{
                width: 50,
                height: 50,
                borderRadius: 30,
                backgroundColor: "red",
                marginRight: 10,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  width: 2,
                  height: 11,
                  backgroundColor: "black",
                  marginBottom: 61,
                }}
              ></View>
            </View>
            <Text style={styles.label}>{nodes.label}</Text>
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
      <ReactNativeZoomableView
        maxZoom={5}
        minZoom={0.1}
        zoomStep={0.5}
        initialZoom={1}
        bindToBorders={true}
        contentWidth={1000}
        contentHeight={1000}
        style={styles.zoomableView}
      >
        <ScrollView horizontal>
          {data.map((node, index) => (
            <View key={index} style={styles.rootNode}>
              {renderTree(node)}
            </View>
          ))}
        </ScrollView>
      </ReactNativeZoomableView>
    </SafeAreaView>
  );
};

export default FullFamilyTree;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  zoomableView: {
    padding: 10,
    width: 1000,
    height: 1000,
  },
  rootNode: {
    flexDirection: "row",
    marginBottom: 20,
  },
  node: {
    alignItems: "center",
    marginHorizontal: 10,
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
