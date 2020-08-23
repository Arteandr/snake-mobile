import React from "react";
import {
  StyleSheet,
  Platform,
  StatusBar,
  SafeAreaView,
  View,
} from "react-native";
import AllAccountsComponent from "./app/components/AllAccountsComponent";
import colors from "./app/config/colors";
import NavbarComponent from "./app/components/NavbarComponent";

export default function App() {
  return (
    <View style={styles.app}>
      <SafeAreaView style={styles.container}>
        <NavbarComponent />
      </SafeAreaView>
      <AllAccountsComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,

    // TODO: доделать с исппользованием редакса
  },
});
