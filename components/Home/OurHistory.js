import { StyleSheet, Text, View, Linking, Alert } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome6, FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const OurHistory = () => {
  const navigation = useNavigation();
  const sendWhatsAppMessage = () => {
    const phoneNumber = "+919431303935";
    const message = `Namaste%20%5BYour%20relationship%20with%20Mithilesh%20Choudhary%5D%2C%0A%0AI%20am%20%5BYour%20Name%5D%2C%20son%20of%20%5BFather%27s%20Name%5D.%20I%20would%20like%20to%20request%20an%20update%20to%20the%20family%20tree.%0A%0APlease%20add%20details%20for%20the%20updation%3A%0A%0A-%20%5BDetails%20to%20be%20added%5D%0A%0AThank%20you%20for%20your%20assistance.%0A%0ABest%20regards%2C%0A%5BYour%20Name%5D`;

    const url = `whatsapp://send?phone=${phoneNumber}&text=${message}`;

    Linking.canOpenURL(url)
      .then((supported) => {
        if (!supported) {
          Alert.alert("Error", "WhatsApp is not installed on your device");
        } else {
          return Linking.openURL(url);
        }
      })
      .catch((err) => console.error("An error occurred", err));
  };

  return (
    <>
      <View
        style={{
          width: "33.33%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: 20,
        }}
        Generation
      >
        <TouchableOpacity onPress={() => navigation.navigate("OurHistoryData")}>
          <View
            style={{
              height: 80,
              backgroundColor: "white",
              width: 80,
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FontAwesome6 name={"book"} size={35} color={"#4c669f"} />
          </View>
        </TouchableOpacity>
        <View
          style={{
            height: 80,
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "black", fontWeight: "bold" }}>History</Text>
        </View>
      </View>
      <View
        style={{
          width: "33.33%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: 20,
        }}
        Generation
      >
        <TouchableOpacity onPress={() => navigation.navigate("Gallery")}>
          <View
            style={{
              height: 80,
              backgroundColor: "white",
              width: 80,
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FontAwesome6 name={"images"} size={35} color={"#4c669f"} />
          </View>
        </TouchableOpacity>
        <View
          style={{
            height: 80,
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "black", fontWeight: "bold" }}>Gallery </Text>
        </View>
      </View>
      <View
        style={{
          width: "33.33%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: 20,
        }}
        Generation
      >
        <TouchableOpacity onPress={sendWhatsAppMessage}>
          <View
            style={{
              height: 80,
              backgroundColor: "white",
              width: 80,
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FontAwesome name={"whatsapp"} size={35} color={"#4c669f"} />
          </View>
        </TouchableOpacity>
        <View
          style={{
            height: 80,
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "black", fontWeight: "bold" }}>Update </Text>
        </View>
      </View>
    </>
  );
};

export default OurHistory;

const styles = StyleSheet.create({});
