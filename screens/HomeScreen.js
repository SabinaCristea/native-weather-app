import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import getWeatherApi from "../apis/getWeatherApi";
import { useEffect, useState } from "react";
import { useFonts } from "expo-font";
import Card from "../components/Card";
import Btn from "../components/Btn";
import { getConditionIcon } from "../styles/weather-icons";
import TimeAndPlace from "../components/TimeAndPlace";

export default function HomeScreen({ navigation }) {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const weatherData = await getWeatherApi("Bucharest");
        setData(weatherData);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching weather data:", error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const [fontsLoaded] = useFonts({
    RalewayThin: require("../assets/fonts/Raleway-Thin.ttf"),
    RalewayExtraLight: require("../assets/fonts/Raleway-ExtraLight.ttf"),
    RalewayMedium: require("../assets/fonts/Raleway-Medium.ttf"),
    RalewayRegular: require("../assets/fonts/Raleway-Regular.ttf"),
    RalewayBold: require("../assets/fonts/Raleway-Bold.ttf"),
  });

  if (isLoading || !fontsLoaded) {
    return (
      <View>
        <ActivityIndicator />
        <Text>Loading...</Text>
      </View>
    );
  }

  const { request, current } = data;
  const weatherIcon = getConditionIcon(current.weather_descriptions[0]);

  return (
    <View style={styles.homeContainer}>
      <TimeAndPlace place={request.query} />
      <Card
        condition={current.weather_descriptions[0]}
        icon={weatherIcon.name}
        temperature={current.temperature}
        wind={current.wind_speed}
        humidity={current.humidity}
        uv={current.uv_index}
        visibility={current.visibility}
      />
      <Btn onPress={() => navigation.navigate("Search")}>
        Search for another city
      </Btn>
    </View>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    padding: 40,
    flex: 1,
    backgroundColor: "#E6F4F1",
  },
});
