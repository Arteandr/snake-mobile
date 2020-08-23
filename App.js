import React from "react";
import {
  StyleSheet,
  Platform,
  StatusBar,
  SafeAreaView,
} from "react-native";
import AllAccountsComponent from "./app/components/AllAccountsComponent";
import colors from "./app/config/colors";

export default function App() {
  return (
    <SafeAreaView
      style={styles.container}>
      <AllAccountsComponent />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    // TODO: доделать с исппользованием редакса
    backgroundColor: colors.primary
  },
});
