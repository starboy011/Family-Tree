import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Appbar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
const Gallery = () => {
  const navigation = useNavigation();
  return (
    <>
      <Appbar.Header style={{ backgroundColor: "#F0F8FF" }}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Home" />
      </Appbar.Header>
      <ScrollView>
        <View
          style={{
            width: "100%",
            backgroundColor: "white",
            height: 300,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              backgroundColor: "red",
              width: "95%",
              height: "95%",
              borderRadius: 10,
              overflow: "hidden",
              justifyContent: "flex-end",
            }}
          >
            <View style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
              <Text
                style={{
                  color: "white",
                  textAlign: "center",
                  textAlignVertical: "center",
                  fontFamily: "serif",
                  fontSize: 25,
                }}
              >
                Rishav
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default Gallery;

const styles = StyleSheet.create({});
