import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import colors from "../config/colors";

export default function AllAccountsComponent() {
  return (
    <View style={styles.container}>
      <View style={styles.stats}>
        <Text style={styles.stats__balance}>balance</Text>
        <Text style={styles.stats__count}>-$171 559.80</Text>
        <Text style={styles.stats__persent}>+4.28%</Text>
        <View style={styles.stats__buttons}>
          <View style={[styles.stats__button, styles.stats__button__left]} />
          <View style={styles.stats__button} />
        </View>
      </View>
      <View style={styles.cards}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  // Блок статистики(баланса)
  stats: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "25%",
  },
  stats__balance: {
    textTransform: "uppercase",
    color: colors.white,
    opacity: 0.5,
  },
  stats__count: {
    fontSize: 40,
    color: colors.white,
  },
  stats__persent: {
    fontSize: 16,
    color: colors.white,
    opacity: 0.8,
  },
  stats__buttons: {
    position: "absolute",
    bottom: 12,
    flexDirection: "row",
  },
  stats__button: {
    backgroundColor: colors.white,
    opacity: 0.3,
    borderRadius: 100,
    width: 7,
    height: 7,
  },
  stats__button__left: {
    marginRight: 8,
    opacity: 1,
  },
});
