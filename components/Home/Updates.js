import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Carousel from "react-native-snap-carousel";

const { width } = Dimensions.get("window");

const Updates = () => {
  const data = [
    { title: "Slide 1" },
    { title: "Slide 2" },
    { title: "Slide 3" },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.slide}>
      <Text style={styles.slideText}>{item.title}</Text>
    </View>
  );

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
            <Carousel
              data={data}
              renderItem={renderItem}
              sliderWidth={width}
              itemWidth={width * 0.75}
              inactiveSlideScale={0.94}
              inactiveSlideOpacity={0.7}
              activeSlideAlignment={"center"}
              containerCustomStyle={styles.carousel}
              contentContainerCustomStyle={styles.carouselContentContainer}
            />
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
    height: 600,
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
  },
  carousel: {
    flexGrow: 0,
  },
  carouselContentContainer: {
    alignItems: "center",
  },
  slide: {
    backgroundColor: "white",
    borderRadius: 5,
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  slideText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Updates;
