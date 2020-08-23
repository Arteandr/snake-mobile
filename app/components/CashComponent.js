import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";

import colors from "../config/colors";
import HouseIcon from "../assets/ico/HouseIcon";
import CarIcon from "../assets/ico/CarIcon";
import MoneyIcon from "../assets/ico/MoneyIcon";
import RestaurantIcon from "../assets/ico/RestaurantIcon";
import CoffeeIcon from "../assets/ico/CoffeeIcon";
import PhoneIcon from "../assets/ico/PhoneIcon";
import EntertainmentIcon from "../assets/ico/EntertainmentIcon";

export default function CashComponent() {
  useEffect(() => {}, []);

  return (
    <View style={styles.container}>
      <View style={styles.stats}>
        <Text style={styles.stats__balance}>balance</Text>
        <Text style={styles.stats__count}>$23 092.20</Text>
        <Text style={styles.stats__persent}>+28.03%</Text>
        <View style={styles.stats__buttons}>
          <View style={[styles.stats__button, styles.stats__button__left]} />
          <View style={styles.stats__button} />
        </View>
      </View>
      <ScrollView style={styles.operations}>
        <View style={styles.operations__card}>
          <View style={styles.operations__card__icon}>
            <HouseIcon />
          </View>
          <Text style={styles.opeations__card__name}>Rental revenue</Text>
          <Text style={styles.opeations__card__sum}>$1500</Text>
        </View>
        <View style={styles.operations__card}>
          <View style={styles.operations__card__icon}>
            <CarIcon />
          </View>
          <Text style={styles.opeations__card__name}>Car</Text>
          <Text
            style={[
              styles.opeations__card__sum,
              styles.opeations__card__sum__minus,
            ]}
          >
            -$193.02
          </Text>
        </View>
        <View style={styles.operations__card}>
          <View style={styles.operations__card__icon}>
            <MoneyIcon />
          </View>
          <Text style={styles.opeations__card__name}>Salary</Text>
          <Text style={styles.opeations__card__sum}>$7500</Text>
        </View>
        <View style={styles.operations__card}>
          <View style={styles.operations__card__icon}>
            <RestaurantIcon />
          </View>
          <Text style={styles.opeations__card__name}>Food & Restaurants</Text>
          <Text
            style={[
              styles.opeations__card__sum,
              styles.opeations__card__sum__minus,
            ]}
          >
            -$37
          </Text>
        </View>
        <View style={styles.operations__card}>
          <View style={styles.operations__card__icon}>
            <CoffeeIcon />
          </View>
          <Text style={styles.opeations__card__name}>Coffee</Text>
          <Text
            style={[
              styles.opeations__card__sum,
              styles.opeations__card__sum__minus,
            ]}
          >
            -$2
          </Text>
        </View>
        <View style={styles.operations__card}>
          <View style={styles.operations__card__icon}>
            <RestaurantIcon />
          </View>
          <Text style={styles.opeations__card__name}>Food & Restaurants</Text>
          <Text
            style={[
              styles.opeations__card__sum,
              styles.opeations__card__sum__minus,
            ]}
          >
            -$5
          </Text>
        </View>
        <View style={styles.operations__card}>
          <View style={styles.operations__card__icon}>
            <PhoneIcon />
          </View>
          <Text style={styles.opeations__card__name}>Mobile Account</Text>
          <Text
            style={[
              styles.opeations__card__sum,
              styles.opeations__card__sum__minus,
            ]}
          >
            -$19.99
          </Text>
        </View>
        <View style={styles.operations__date}>
          <Text style={styles.operations__date__text}>yesterday</Text>
        </View>
        <View style={styles.operations__card}>
          <View style={styles.operations__card__icon}>
            <EntertainmentIcon />
          </View>
          <Text style={styles.opeations__card__name}>Entertainment</Text>
          <Text
            style={[
              styles.opeations__card__sum,
              styles.opeations__card__sum__minus,
            ]}
          >
            -$138
          </Text>
        </View>
        <View style={styles.operations__card}>
          <View style={styles.operations__card__icon}>
            <PhoneIcon />
          </View>
          <Text style={styles.opeations__card__name}>Mobile Account</Text>
          <Text
            style={[
              styles.opeations__card__sum,
              styles.opeations__card__sum__minus,
            ]}
          >
            -$19.99
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    paddingTop: 30,
    paddingLeft: 4,
    paddingRight: 4,
  },
  // Блок статистики(баланса)
  stats: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingBottom: 50,
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
  // блок операций
  operations: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  operations__card: {
    flexDirection: "row",
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(35, 44, 45,0.1)",
    position: "relative",
    alignItems: "center",
  },
  operations__card__icon: {
    backgroundColor: "rgba(101, 188, 191, 0.1)",
    borderRadius: 100,
    padding: 5,
    marginLeft: 15,
  },
  opeations__card__name: {
    color: colors.darkgray,
    opacity: 0.8,
    fontSize: 16,
    marginLeft: 10,
  },
  opeations__card__sum: {
    color: colors.secondary,
    fontSize: 22,
    position: "absolute",
    right: 15,
  },
  opeations__card__sum__minus: {
    color: colors.primary,
  },
  operations__date: {
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(35, 44, 45,0.1)",
    paddingTop: 24,
    paddingLeft: 16,
  },
  operations__date__text: {
    textTransform: "uppercase",
    fontSize: 12,
    color: colors.darkgray,
    opacity: 0.3,
  },
});
