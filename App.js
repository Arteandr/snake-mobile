import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AllAccountsComponent from "./app/components/AllAccountsComponent";

export default function App() {
  return (
    <View style={styles.container}>
      <AllAccountsComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
