import { View, Text, Button, ActivityIndicator, Image } from "react-native";
import getWeatherApi from "../apis/getWeatherApi";
import { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { getConditionIcon } from "../weather-icons";

// const getConditionIcon = (type) => {
//   switch (type.toLowerCase()) {
//     case "overcast":
//       return { color: "#FFD700", name: "☁" };
//     case "sunny":
//       return { color: "#FFD700", name: "sunny-outline" };
//     case "clear":
//       return { color: "#FFD700", name: "⚡️" };
//     case "rain":
//       return { color: "#6493EA", name: "💧" };
//     case "showers":
//       return { color: "#6493EA", name: "💧" };
//     case "thunder":
//       return { color: "#6493EA", name: "💧" };
//     case "cloudy":
//       return { color: "#FF5733", name: "🔥" };
//     case "partly cloudy":
//       return { color: "#66CC66", name: "🌿" };
//     case "snow":
//       return { color: "#66CC66", name: "🌿" };
//     case "windy":
//       return { color: "#66CC66", name: "🌿" };
//     case "fog":
//       return { color: "#66CC66", name: "🌿" };
//     default:
//       return { color: "#A0A0A0", name: "❓" };
//   }
// };

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

  if (isLoading) {
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
    <View>
      <Text>Location: {request.query} </Text>
      <Text>Temperature: {current.temperature} °C</Text>
      <Text>Weather Condition: {current.weather_descriptions[0]}</Text>
      {/* <Ionicons name="sunny-outline" size={100} color="orange" /> */}
      <Ionicons name={weatherIcon.name} size={100} color={weatherIcon.color} />
      {/* <Text>Location: Location </Text>
      <Text>Temperature: temp °C</Text>
      <Text>Weather Condition: how is weather</Text> */}
      <Button
        title="Search for another city"
        onPress={() => navigation.navigate("Search")}
      />
    </View>
  );
}
