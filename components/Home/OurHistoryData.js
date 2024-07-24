import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
} from "react-native";
import React from "react";
import { Appbar } from "react-native-paper";
import Carousel from "react-native-snap-carousel";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import Video from "./Video";
const { width } = Dimensions.get("window");
const OurHistoryData = () => {
  const navigation = useNavigation();
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
            justifyContent: "center",
            alignItems: "center",
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
              autoplay={true}
              autoplayInterval={3000}
              autoplayDelay={1000}
            />
          </View>

          <View style={styles.detail1}>
            <View style={{ backgroundColor: "#F0F8FF" }}>
              <View
                style={{
                  alignItems: "center",
                }}
              >
                <LinearGradient
                  colors={["#4c669f", "#3b5998", "#192f6a"]}
                  style={{
                    flex: 1,
                    marginTop: 10,
                    height: 60,
                    justifyContent: "center",
                    borderRadius: 10,
                    width: "95%",
                  }}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                >
                  <Text
                    style={{
                      fontSize: 40,
                      fontWeight: "bold",
                      color: "white",
                      textAlign: "center",
                    }}
                  >
                    कान्यकुब्ज की उत्पत्ति
                  </Text>
                </LinearGradient>
              </View>
              <View
                style={{
                  width: "98%",
                  paddingTop: 20,
                  paddingLeft: 20,
                }}
              >
                <Text style={{ fontSize: 20 }}>
                  कहा जाता है कि आदिकाल में महोदयपुर राज्य के राजा ‘कुशनाभ’ की
                  एक रूपवती राजकुमारी थी । जिसपर मोहित होकर वायुदेव ने उससे
                  विवाह का प्रस्ताव रखा, परंतु पिता की आज्ञा ना होने के कारण
                  कन्या ने वायुदेव का प्रस्ताव ठुकरा दिया। जिसके परिणाम स्वरुप
                  वायुदेव कुपित हो गए और राजकुमारी को ‘कुब्जा’ होने का श्राप दे
                  डाला। इस घटना के ज्ञात होने के उपरांत कन्या के पिता ने अपनी
                  पुत्री का विवाह महर्षि ब्रम्हदत्त से कर दिया और आशीर्वाद
                  स्वरुप पाणिग्रहण होते ही कन्या पुन: रूपवती हो गई। जिस क्षेत्र
                  में वह कन्याकुब्जा रहा करती थी उस क्षेत्र को कान्यकुब्ज
                  क्षेत्र के नाम से जाना जाने लगा जो अयोध्या के दक्षिण में
                  श्रृंगवेरपुर से दालभ्य ऋषि के आश्रम तक फैला हुआ था। वर्तमान
                  में यह कन्नौज तथा इससे सटा अवध का क्षेत्र है। इस क्षेत्र में
                  बसने वाले ब्राम्हण कान्यकुब्ज ब्राह्मण कहलाए।
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              width: "90%",
              justifyContent: "center",
              alignItems: "center",
              height: 300,
              backgroundColor: "rgba(215,225,15,0.1)",
              borderRadius: 20,
              marginTop: 10,
              marginBottom: 10,
            }}
          >
            <Video />
          </View>
          <View style={styles.detail2}>
            <View style={{ backgroundColor: "rgba(200, 247, 197,.4)" }}>
              <View
                style={{
                  alignItems: "center",
                }}
              >
                <LinearGradient
                  colors={[
                    "rgba(200, 247, 197,.4)",
                    "rgba(101, 198, 187,1)",
                    "rgba(27, 163, 156,1)",
                  ]}
                  style={{
                    flex: 1,
                    marginTop: 10,
                    height: 60,
                    justifyContent: "center",
                    borderRadius: 10,
                    width: "95%",
                  }}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                >
                  <Text
                    style={{
                      fontSize: 40,
                      fontWeight: "bold",
                      color: "white",
                      textAlign: "center",
                    }}
                  >
                    सांकृत ग़ोत्र
                  </Text>
                </LinearGradient>
              </View>
              <View
                style={{
                  width: "98%",
                  paddingTop: 20,
                  paddingLeft: 20,
                }}
              >
                <Text style={{ fontSize: 20 }}>
                  ब्रह्माजी के पुत्र भृगुके वंश में संख्यायन ऋषि हुए तथा उनके
                  पुत्र गगन और गगन के पुत्र ऋषि सांकृत हुए ।अतएव इन्हीं ऋषि के
                  नाम से कान्यकुब्ज का गोत्र जाना जाता है । सांकृत गोत्र का वेद
                  “यजुर्वेद” और उपवेद “धनुर्वेद” है।सांकृत गोत्रधारी शिखा को दाई
                  और घुमाकर बांधते हैं और इस गोत्र के अस्पद हैं “चौबे”।अस्पद
                  अर्थात वो प्रजातियां जो किसी व्यक्ति या स्थान के नाम से जानी
                  गई।कहा जाता है ये चौबे से पूर्व चतुर्वेदी हुआ करते थे।सांकृत
                  गोत्र के इष्टदेव शिव माने जाते हैं। इस विचारधारा में समय-समय
                  पर परिवर्तन होता रहा है।
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
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
  detail1: {
    width: "100%",
  },
  detail2: {
    width: "100%",
  },
});
