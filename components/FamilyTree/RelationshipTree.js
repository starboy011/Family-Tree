import { StyleSheet, Text, View } from "react-native";
import React from "react";

const RelationshipTree = ({ firstName, secondName }) => {
  return (
    <View>
      <Text>
        {firstName}
        {secondName}
      </Text>
    </View>
  );
};

export default RelationshipTree;

const styles = StyleSheet.create({});
