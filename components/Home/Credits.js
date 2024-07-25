import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Carousel from "react-native-snap-carousel";

const { width } = Dimensions.get("window");

const Credits = () => {
  const data = [
    {
      title: "Slide 1",
    },
    { title: "Slide 2" },
    { title: "Slide 3" },
    { title: "Slide 4" },
    { title: "Slide 5" },
  ];

  const renderItem = ({ item }) => {
    if (item.title === "Slide 5") {
      return (
        <ImageBackground
          source={require("/Users/starboy/Repos/Family-Tree/components/Home/Developedby.png")}
          style={styles.slide}
        >
          <Text
            style={{
              fontSize: 18,
              fontFamily: "serif",
              color: "white",
              backgroundColor: "rgba(0,0,0,0.5)",
            }}
          >
            Developed By: Rishav Choudhary (s/o Mithilesh Kumar Choudhary)
          </Text>
        </ImageBackground>
      );
    } else if (item.title === "Slide 1") {
      return (
        <ImageBackground
          source={require("/Users/starboy/Repos/Family-Tree/components/Home/DataCollectedBy.png")}
          style={styles.slide}
        >
          <Text
            style={{
              fontSize: 18,
              fontFamily: "serif",
              color: "white",
              backgroundColor: "rgba(0,0,0,0.5)",
            }}
          >
            Data collected by: Tushar Kant Choudhary
          </Text>
        </ImageBackground>
      );
    } else if (item.title === "Slide 2") {
      return (
        <ImageBackground
          source={require("/Users/starboy/Repos/Family-Tree/components/Home/CoordinatedBy.png")}
          style={styles.slide}
        >
          <Text
            style={{
              fontSize: 18,
              fontFamily: "serif",
              color: "white",
              backgroundColor: "rgba(0,0,0,0.5)",
            }}
          >
            Coordinated/Sound given by: Mithilesh Kumar Choudhary
          </Text>
        </ImageBackground>
      );
    } else if (item.title === "Slide 4") {
      return (
        <ImageBackground
          source={require("/Users/starboy/Repos/Family-Tree/components/Home/DesignedBy.png")}
          style={styles.slide}
        >
          <Text
            style={{
              fontSize: 18,
              fontFamily: "serif",
              color: "white",
              backgroundColor: "rgba(0,0,0,0.5)",
            }}
          >
            Designed by: Manish Choudhary (s/o Tushar Kant Choudhary)
          </Text>
        </ImageBackground>
      );
    } else if (item.title === "Slide 3") {
      return (
        <ImageBackground
          source={require("/Users/starboy/Repos/Family-Tree/components/Home/ContentBy.png")}
          style={styles.slide}
        >
          <Text
            style={{
              fontSize: 18,
              fontFamily: "serif",
              color: "white",
              backgroundColor: "rgba(0,0,0,0.5)",
            }}
          >
            Video editing/Content/Sound given by: Malti Choudhary (w/o Mithilesh
            Kumar Choudhary)
          </Text>
        </ImageBackground>
      );
    }

    return (
      <View style={styles.slide}>
        <Text style={styles.slideText}>{item.title}</Text>
      </View>
    );
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.backgroundImage}>
        <View style={styles.container}>
          <View style={{ width: "100%", height: 60 }}>
            <LinearGradient
              colors={["#74d477", "#1b8c1e", "#006303"]}
              style={styles.headerGradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            >
              <Text style={styles.headerText}>Credits</Text>
            </LinearGradient>
          </View>
          <View style={styles.carouselContainer}>
            <Carousel
              data={data}
              renderItem={renderItem}
              sliderWidth={width * 0.95}
              itemWidth={width * 0.7}
              height={"100%"}
              inactiveSlideScale={0.85}
              inactiveSlideOpacity={0.4}
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
    height: 500,
    width: width * 0.95,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "rgba(116, 212, 119,0.2)",
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
    // alignItems: "center",
  },
  slide: {
    backgroundColor: "white",
    height: 400,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 5,
    overflow: "hidden",
    justifyContent: "flex-end",
  },
  slideText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  imageBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Credits;
