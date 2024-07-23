import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Carousel from "react-native-snap-carousel";
const { width } = Dimensions.get("window");
const OurHistoryData = () => {
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
    if (item.title === "Slide 1") {
      return (
        <ImageBackground
          source={require("/Users/starboy/Repos/Family-Tree/components/Home/1.jpg")}
          style={styles.slide}
        >
          <Text
            style={{
              textAlign: "center",
              textAlignVertical: "center",
              color: "white",
              fontSize: 25,
              fontFamily: "serif",
              fontWeight: "bold",
              backgroundColor: "rgba(0,0,0,0.5)",
            }}
          >
            महोबा के चौबे से चौधरी का सफ़र
          </Text>
        </ImageBackground>
      );
    } else if (item.title === "Slide 2") {
      return (
        <ImageBackground
          source={require("/Users/starboy/Repos/Family-Tree/components/Home/2.jpg")}
          style={styles.slide}
        >
          <Text
            style={{
              textAlign: "center",
              textAlignVertical: "center",
              color: "white",
              fontSize: 25,
              fontFamily: "serif",
              fontWeight: "bold",
              backgroundColor: "rgba(0,0,0,0.5)",
            }}
          >
            महोबा के चौबे से चौधरी का सफ़र
          </Text>
        </ImageBackground>
      );
    } else if (item.title === "Slide 3") {
      return (
        <ImageBackground
          source={require("/Users/starboy/Repos/Family-Tree/components/Home/3.jpg")}
          style={styles.slide}
        >
          <Text
            style={{
              textAlign: "center",
              textAlignVertical: "center",
              color: "white",
              fontSize: 25,
              fontFamily: "serif",
              fontWeight: "bold",
              backgroundColor: "rgba(0,0,0,0.5)",
            }}
          >
            महोबा के चौबे से चौधरी का सफ़र
          </Text>
        </ImageBackground>
      );
    } else if (item.title === "Slide 4") {
      return (
        <ImageBackground
          source={require("/Users/starboy/Repos/Family-Tree/components/Home/4.jpg")}
          style={styles.slide}
        >
          <Text
            style={{
              textAlign: "center",
              textAlignVertical: "center",
              color: "white",
              fontSize: 25,
              fontFamily: "serif",
              fontWeight: "bold",
              backgroundColor: "rgba(0,0,0,0.5)",
            }}
          >
            महोबा के चौबे से चौधरी का सफ़र
          </Text>
        </ImageBackground>
      );
    } else {
      return (
        <ImageBackground
          source={require("/Users/starboy/Repos/Family-Tree/components/Home/5.jpg")}
          style={styles.slide}
        >
          <Text
            style={{
              textAlign: "center",
              textAlignVertical: "center",
              color: "white",
              fontSize: 25,
              fontFamily: "serif",
              fontWeight: "bold",
              backgroundColor: "rgba(0,0,0,0.5)",
            }}
          >
            धोबई से गोयड़ा गमन
          </Text>
        </ImageBackground>
      );
    }
  };
  return (
    <SafeAreaView>
      <View
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "white",
        }}
      >
        <View style={styles.carouselContainer}>
          <Carousel
            data={data}
            renderItem={renderItem}
            sliderWidth={width * 1}
            itemWidth={width * 0.85}
            inactiveSlideScale={0.9}
            inactiveSlideOpacity={0.6}
            activeSlideAlignment={"center"}
            containerCustomStyle={styles.carousel}
            contentContainerCustomStyle={styles.carouselContentContainer}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OurHistoryData;

const styles = StyleSheet.create({
  carouselContainer: {
    marginTop: 20,
  },
  carousel: {
    flexGrow: 0,
  },
  carouselContentContainer: {},
  slide: {
    // backgroundColor: "red",
    height: 200,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    borderRadius: 5,
    overflow: "hidden",
  },
  slideText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
