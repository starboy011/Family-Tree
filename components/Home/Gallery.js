import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Appbar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import frame from "./frame.png";

const Gallery = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://192.168.68.116:8080/imageGallery")
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return (
      <View
        style={{
          height: "100%",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        <ImageBackground
          source={require("./SplashScreen.gif")}
          style={{ width: 100, height: 100 }}
        ></ImageBackground>
      </View>
    );
  }
  return (
    <>
      <Appbar.Header style={{ backgroundColor: "#F0F8FF" }}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Home" />
      </Appbar.Header>
      <ScrollView>
        {loading ? (
          <Text>Loading...</Text>
        ) : (
          data.map((item, index) => (
            <View
              key={index}
              style={{
                width: "100%",
                backgroundColor: "white",
                height: 500,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ImageBackground
                source={frame}
                style={{
                  width: "95%",
                  height: 400,
                  borderRadius: 10,
                  overflow: "hidden",
                  justifyContent: "center",
                  alignItems: "center",
                  overflow: "hidden",
                }}
                imageStyle={{
                  width: "100%",
                  height: "100%",
                  resizeMode: "stretch",
                }}
              >
                <View
                  style={{
                    width: "87%",
                    height: 335,
                    backgroundColor: "red",
                  }}
                >
                  <ImageBackground
                    source={{ uri: item.Img }}
                    style={{
                      width: "100%",
                      height: "100%",
                      overflow: "hidden",
                      justifyContent: "flex-end",
                    }}
                    imageStyle={{
                      width: "100%",
                      height: "100%",
                      resizeMode: "stretch",
                    }}
                    onError={(error) =>
                      console.error("Image loading error:", error)
                    }
                  ></ImageBackground>
                </View>
              </ImageBackground>
              <View style={{ height: 50, width: "100%" }}>
                <View
                  style={{
                    // height: 100,
                    width: "100%",
                    backgroundColor: "rgba(0,0,0,0.5)",
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                      textAlign: "center",
                      textAlignVertical: "center",
                      fontFamily: "serif",
                      fontSize: 25,
                      height: 80,
                    }}
                  >
                    {item.Name}
                  </Text>
                </View>
              </View>
            </View>
          ))
        )}
      </ScrollView>
    </>
  );
};

export default Gallery;

const styles = StyleSheet.create({});
