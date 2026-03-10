import React from "react";
import { View, StyleSheet } from "react-native";
import Button from "./ui/button";
import Ionicons from "@expo/vector-icons/Ionicons";
import TextComp from "./ui/Text";
import { router } from "expo-router";

interface navProps{
    screenTitle: string
}
const NaviagtionHeader = ({screenTitle}:navProps) => {
  return (
    <View style={styles.header}>
      <Button onPressed={() => router.back()}>
        <Ionicons name="arrow-back-sharp" size={24} color="white" />
      </Button>
      <View style={styles.screenTitle}>
        <TextComp color="white" size={17} text={screenTitle} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "black",
    paddingHorizontal: 4,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingVertical: 10
  },
  screenTitle: {
    marginLeft: 10,
  }
});

export default NaviagtionHeader
