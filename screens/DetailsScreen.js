import { View } from "react-native";
import { getConditionIcon } from "../styles/weather-icons";
import Card from "../components/Card";
import Btn from "../components/Btn";
import { useLayoutEffect } from "react";
import TimeAndPlace from "../components/TimeAndPlace";

export default function DetailsScreen({ route, navigation }) {
  const { cityData, location } = route.params;
  const { request, current } = cityData;

  useLayoutEffect(() => {
    navigation.setOptions({ title: `Weather in ${location}` });
  }, [navigation, location]);

  const weatherIcon = getConditionIcon(current.weather_descriptions[0]);

  return (
    <View style={{ padding: 40, backgroundColor: "#E6F4F1" }}>
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
      <Btn
        onPress={() => navigation.navigate("Search")}
        style={{
          marginTop: -15,
          marginBottom: 20,
          backgroundColor: "#001E45",
        }}
        btnTextStyle={{ color: "#F1FBFF" }}
      >
        Search another
      </Btn>
      <Btn onPress={() => navigation.navigate("Home")}>Back to homepage</Btn>
    </View>
  );
}
