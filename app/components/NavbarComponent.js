import React from "react";
import { StyleSheet, Text, View, TouchableNativeFeedback } from "react-native";
import colors from "../config/colors";
import SettingsIcon from "../assets/ico/SettingsIcon";
import SearchIcon from "../assets/ico/SearchIcon";
import PlusIcon from "../assets/ico/PlusIcon";

export default function NavbarComponent() {
  return (
    <View style={styles.container}>
      <View style={styles.navigation}>
        <View style={styles.navigation__settingsIcon}>
          <SettingsIcon />
        </View>
        <Text style={styles.navigation__title}>Accounts</Text>
        <View style={styles.navigation__right}>
          <View>
            <SearchIcon />
          </View>
          <View>
            <PlusIcon />
          </View>
        </View>
      </View>
      <View style={styles.pages__center}>
        <View style={styles.pages__button}>
          <TouchableNativeFeedback>
            <Text style={styles.pages__button__text}>daily</Text>
          </TouchableNativeFeedback>
        </View>
        <View style={styles.pages__button}>
          <TouchableNativeFeedback>
            <Text style={styles.pages__button__text}>weekly</Text>
          </TouchableNativeFeedback>
        </View>
        <View style={[styles.pages__button, styles.pages__button__active]}>
          <TouchableNativeFeedback>
            <Text
              style={[
                styles.pages__button__text,
                styles.pages__button__text__active,
              ]}
            >
              monthly
            </Text>
          </TouchableNativeFeedback>
        </View>
        <View style={styles.pages__button}>
          <TouchableNativeFeedback>
            <Text style={styles.pages__button__text}>yearly</Text>
          </TouchableNativeFeedback>
        </View>
      </View>
      <View style={styles.borderBottom}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
  },
  //текущая странциа
  navigation: {
    justifyContent: "center",
    flexDirection: "row",
    textAlign: "center",
    width: "100%",
    paddingBottom: 12,
    marginTop: 12,
  },
  navigation__title: {
    color: colors.white,
    fontSize: 17,
  },
  navigation__right: {
    flexDirection: "row",
    width: 60,
    justifyContent: "space-between",
    position: "absolute",
    right: 15,
  },
  navigation__settingsIcon: {
    position: "absolute",
    left: 15,
  },
  // переключение страниц в нафигации
  test: {
    borderBottomWidth: 1,
  },
  pages__center: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 12,
  },
  pages__button__text: {
    color: colors.white,
    textTransform: "uppercase",
    opacity: 0.7,
  },
  pages__button__text__active: {
    opacity: 1,
  },
  pages__button__active: {
    paddingBottom: 10,
    borderBottomColor: colors.white,
    borderBottomWidth: 2,
  },
  borderBottom: {
    width: "100%",
    height: 1,
    backgroundColor: "rgba(255,255,255,0.1)",
    position: "absolute",
    bottom: 0,
  },
});
