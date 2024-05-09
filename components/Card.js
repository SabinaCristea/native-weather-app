import {
  View,
  Text,
  Button,
  ActivityIndicator,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import getWeatherApi from "../apis/getWeatherApi";
import { useEffect, useState } from "react";
import { Ionicons, Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { getConditionIcon } from "../styles/weather-icons";

export default function Card({
  condition,
  icon,
  temperature,
  wind,
  humidity,
  uv,
  visibility,
}) {
  const [fontsLoaded] = useFonts({
    RalewayThin: require("../assets/fonts/Raleway-Thin.ttf"),
    RalewayExtraLight: require("../assets/fonts/Raleway-ExtraLight.ttf"),
    RalewayMedium: require("../assets/fonts/Raleway-Medium.ttf"),
    RalewayRegular: require("../assets/fonts/Raleway-Regular.ttf"),
    RalewayBold: require("../assets/fonts/Raleway-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }

  return (
    <View style={styles.weatherCard}>
      <View style={styles.conditionContainer}>
        <Ionicons name={icon} size={80} color="#57BEF3" />
        <Text style={styles.conditionText}>{condition}</Text>
      </View>
      <Text style={styles.temperatureText}>{temperature}°C</Text>
      <View style={styles.line}></View>
      <View style={styles.details}>
        <View style={styles.detail}>
          <View style={styles.detailDescription}>
            <Feather name="wind" size={20} />
            <Text style={styles.detailText}>Wind</Text>
          </View>
          <Text style={styles.detailResult}>{wind} km/h</Text>
        </View>
        <View style={styles.detail}>
          <View style={styles.detailDescription}>
            <Ionicons name="water-outline" size={20} />
            <Text style={styles.detailText}>Humidity</Text>
          </View>
          <Text style={styles.detailResult}>{humidity}%</Text>
        </View>
        <View style={styles.detail}>
          <View style={styles.detailDescription}>
            <MaterialCommunityIcons name="shield-sun-outline" size={20} />
            <Text style={styles.detailText}>UV index</Text>
          </View>
          <Text style={styles.detailResult}>{uv}</Text>
        </View>
        <View style={styles.detail}>
          <View style={styles.detailDescription}>
            <Ionicons name="eye-outline" size={20} />
            <Text style={styles.detailText}>Visibility</Text>
          </View>
          <Text style={styles.detailResult}>{visibility} km</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  weatherCard: {
    marginBottom: 50,
    paddingHorizontal: 25,
    paddingVertical: 15,
    backgroundColor: "#F1FBFF",
    borderRadius: 20,
    elevation: 10,
    // flexGrow: 1,
    // justifyContent: "space-between",
  },
  conditionContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 5,
  },
  conditionText: {
    fontFamily: "RalewayExtraLight",
    fontSize: 30,
    textTransform: "capitalize",
  },
  temperatureText: {
    fontFamily: "RalewayThin",
    fontSize: 90,
    alignSelf: "center",
    marginBottom: 20,
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: "black",
    marginBottom: 30,
  },
  details: {
    // flex: 1,
    justifyContent: "space-between",
    gap: 25,
  },
  detail: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  detailDescription: {
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
  },
  detailResult: {
    fontFamily: "RalewayRegular",
  },
  detailText: {
    fontFamily: "RalewayRegular",
  },
});
