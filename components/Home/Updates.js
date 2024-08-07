import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Carousel from "react-native-snap-carousel";
import axios from "axios";

const { width } = Dimensions.get("window");

const Updates = () => {
  const [responseData, setResponseData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");
    const currentdate = `${yyyy}-${mm}-${dd}`;

    axios
      .get(`http://clientapp.skylasoft.com:8085/updates/${currentdate}`)
      .then((response) => {
        setResponseData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  const renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <View
          style={{
            width: "100%",
            height: "80%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontFamily: "serif",
              backgroundColor: "rgba(255, 196, 204,0.2)",
              borderRadius: 10,
              paddingLeft: 10,
              paddingRight: 10,
            }}
          >
            {item.Message}
          </Text>
        </View>
        <View
          style={{
            width: "100%",
            height: "20%",
            alignItems: "flex-end",
          }}
        >
          <Text style={styles.slideText}>{item.Timestamp}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.backgroundImage}>
        <View style={styles.container}>
          <View style={{ width: "100%", height: 60 }}>
            <LinearGradient
              colors={["#ff4d6d", "#c9184a", "#590d22"]}
              style={styles.headerGradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            >
              <Text style={styles.headerText}>Updates</Text>
            </LinearGradient>
          </View>
          <View style={styles.carouselContainer}>
            {loading ? (
              <ActivityIndicator size="large" color="#c9184a" />
            ) : (
              <Carousel
                data={responseData}
                renderItem={renderItem}
                sliderWidth={width * 0.95}
                itemWidth={width * 0.8}
                height={"100%"}
                inactiveSlideScale={0.95}
                inactiveSlideOpacity={0.5}
                activeSlideAlignment={"center"}
                containerCustomStyle={styles.carousel}
                contentContainerCustomStyle={styles.carouselContentContainer}
              />
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    paddingTop: 20,
    paddingBottom: 20,
    overflow: "hidden",
    borderRadius: 10,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    height: 200,
    width: width * 0.95,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#fff0f3",
  },
  container: {
    flex: 1,
  },
  headerGradient: {
    flex: 1,
    paddingLeft: 15,
    justifyContent: "center",
    borderRadius: 10,
  },
  headerText: {
    fontFamily: "serif",
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
  carouselContainer: {
    marginTop: 20,
    alignItems: "center", // Center the loader horizontally
  },
  carousel: {
    flexGrow: 0,
  },
  carouselContentContainer: {
    // alignItems: "center",
  },
  slide: {
    backgroundColor: "white",
    height: 100,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
    borderRadius: 5,
    overflow: "hidden",
  },
  slideText: {
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 10,
    textAlignVertical: "center",
  },
  imageBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Updates;
