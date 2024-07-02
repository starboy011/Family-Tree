import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ReactNativeZoomableView } from "@openspacelabs/react-native-zoomable-view";

const FullFamilyTree = () => {
  const data = [
    {
      label: "Argentina",
      children: [
        {
          label: "Argentina",
          children: [
            {
              label: "Argentina",
            },
            {
              label: "Croatia",
            },
          ],
        },
        {
          label: "France",
          children: [
            {
              label: "France",
            },
            {
              label: "Morocco",
            },
          ],
        },
      ],
    },
  ];

  const renderTree = (nodes) => {
    if (!nodes) return null;

    return (
      <View style={styles.node}>
        <Text style={styles.label}>{nodes.label}</Text>
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
  },
  childrenContainer: {
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 20,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    paddingTop: 10,
  },
  childNode: {
    marginHorizontal: 10,
  },
});
