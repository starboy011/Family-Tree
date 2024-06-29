import React, { useRef, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Animated,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Text, Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const navigation = useNavigation();
  const slideAnim = useRef(new Animated.Value(300)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.spring(slideAnim, {
      toValue: 0,
      friction: 5,
      tension: 100,
      useNativeDriver: true,
    }).start();
    Animated.loop(
      Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 2000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [slideAnim, fadeAnim]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titlecontainer}>
        <Animated.View
          style={[styles.title, { transform: [{ translateX: slideAnim }] }]}
        >
          <Text
            variant="displayMedium"
            style={{ fontWeight: "bold", fontFamily: "serif" }}
          >
            BookCuts
          </Text>
          <Text
            variant="headlineSmall"
            style={{ fontWeight: 300, fontFamily: "serif" }}
          >
            Get your perfect
          </Text>
          <Text
            variant="titleSmall"
            style={{ fontWeight: 100, fontFamily: "serif" }}
          >
            haircut appointment.
          </Text>
        </Animated.View>
      </View>
      <View style={styles.image}>
        <Animated.View style={{ flex: 1, opacity: fadeAnim }}>
          <ImageBackground
            source={require("./haircut.png")}
            style={styles.backgroundImage}
          />
        </Animated.View>
      </View>
      <View style={styles.field}>
        <TouchableOpacity
          style={{ width: "90%" }}
          onPress={() => navigation.navigate("LoginScreen1")}
        >
          <Button icon="book" mode="contained" buttonColor="blue">
            Book Now
          </Button>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#DFF5FF" },
  titlecontainer: {
    width: "100%",
    height: "15%",
    marginTop: "15%",
  },
  title: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    width: "100%",
    height: "50%",
    fontWeight: "bold",
  },
  image: {
    width: "100%",
    height: "55%",
  },
  field: {
    justifyContent: "center",
    alignItems: "center",
    height: "10%",
    width: "100%",
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});
