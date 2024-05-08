import { View, Text, Button } from "react-native";
import { getConditionIcon } from "../weather-icons";
import { Ionicons } from "@expo/vector-icons";

export default function DetailsScreen({ route, navigation }) {
  const { cityData } = route.params;

  const { request, location, current } = cityData;

  const weatherIcon = getConditionIcon(current.weather_descriptions[0]);

  return (
    <View>
      <Text>In {location.name}, the temperature is:</Text>
      <Text>Location: {request.query} </Text>
      <Text>Temperature: {current.temperature} °C</Text>
      <Text>Weather Condition: {current.weather_descriptions[0]}</Text>
      <Ionicons name={weatherIcon.name} size={100} color={weatherIcon.color} />

      <Button
        title="Back to homepage"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
}
