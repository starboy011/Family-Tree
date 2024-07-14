import React, { useRef, useEffect } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Animated,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import InputSearchContainer from "./InputSearchContainer";
import KnowByNameContainer from "./KnowByNameContainer";

const FamilyTree = () => {
  const navigation = useNavigation();
  const moveAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const moveRightAndBack = Animated.sequence([
      Animated.timing(moveAnim, {
        toValue: 10,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(moveAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
    ]);

    Animated.loop(moveRightAndBack).start();
  }, [moveAnim]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <View
          style={{
            width: "80%",
            backgroundColor: "rgba(79,255,176,.1)",
            height: "60%",
            borderRadius: 10,
            flexDirection: "row",
          }}
        >
          <View
            style={{
              width: "70%",
              height: "100%",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                marginLeft: 10,
                fontSize: 25,
                color: "black",
                textShadowColor: "rgba(0, 0, 0, .25)",
                textShadowOffset: { width: -1, height: 1 },
                textShadowRadius: 10,
                textTransform: "uppercase",
                letterSpacing: 2,
              }}
            >
              VIEW FULL TREE
            </Text>
          </View>
          <Animated.View
            style={{
              justifyContent: "center",
              alignItems: "center",
              width: "30%",
              height: "100%",
              transform: [{ translateX: moveAnim }],
            }}
          >
            <AntDesign name={"arrowright"} size={40} color={"black"} />
          </Animated.View>
        </View>
        <View
          style={{
            width: 50,
            height: 100,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("FullFamilyTree")}
          >
            <MaterialCommunityIcons name={"tree"} size={50} color={"green"} />
          </TouchableOpacity>
        </View>
      </View>
      <InputSearchContainer />
      <ScrollView>
        <KnowByNameContainer />
      </ScrollView>
    </SafeAreaView>
  );
};

export default FamilyTree;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  searchContainer: {
    height: 100,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  scrollViewContent: {
    paddingBottom: 20,
  },
  personContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  modalText: {
    marginBottom: 20,
    textAlign: "center",
  },
  modalButton: {
    backgroundColor: "green",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  modalButtonText: {
    color: "white",
    fontSize: 16,
  },
});
