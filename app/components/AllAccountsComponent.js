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
      <View style={styles.cards}>
        <View style={styles.cards__item}>
          <Text style={styles.cards__item__text}>Cash</Text>
          <Text style={styles.cards__item__count}>$23 092.20</Text>
        </View>
        <View style={styles.cards__item}>
          <Text style={styles.cards__item__text}>Credit card</Text>
          <Text style={styles.cards__item__count}>-$532</Text>
        </View>
        <View style={styles.cards__item}>
          <Text style={styles.cards__item__text}>Wife’s credit card</Text>
          <Text style={styles.cards__item__count}>$2 139</Text>
        </View>
        <View style={styles.cards__item}>
          <Text style={styles.cards__item__text}>Bank deposit</Text>
          <Text style={styles.cards__item__count}>$200 000</Text>
        </View>
        <View style={styles.cards__item}>
          <Text style={styles.cards__item__text}>Car loan</Text>
          <Text style={styles.cards__item__count}>-$67 231</Text>
        </View>
        <View style={styles.cards__item}>
          <Text style={styles.cards__item__text}>Home loan</Text>
          <Text style={styles.cards__item__count}>-$329 027</Text>
        </View>
      </View>
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

  // Блок карточек
  cards: {
    width: "100 %",
    paddingLeft: 16,
    paddingRight: 16
  },
  cards__item: {
    width: "100%",
    height: 82,
    backgroundColor: colors.white,
    borderRadius: 8,
    marginBottom: 10,
    paddingTop: 12,
    paddingLeft: 12
  },
  cards__item__text: {
    color: colors.darkgray,
    opacity: 0.6,
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 4,
  },
  cards__item__count: {
    color: colors.secondary,
    fontSize: 28,
    lineHeight: 33,
    fontWeight: "600"
  }
});
