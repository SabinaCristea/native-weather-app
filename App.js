import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import SearchScreen from "./screens/SearchScreen";
import DetailsScreen from "./screens/DetailsScreen";
import { useFonts } from "expo-font";
import { ActivityIndicator } from "react-native";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    RalewayMedium: require("./assets/fonts/Raleway-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Weather",
            headerStyle: {
              backgroundColor: "#00A1F2",
            },
            headerTintColor: "#F1FBFF",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontFamily: "RalewayMedium",
              fontSize: 26,
            },
          }}
        />
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{
            title: "Search City",

            headerTitleStyle: {
              fontFamily: "RalewayMedium",
              fontSize: 26,
            },
          }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{
            title: "Weather in Cluj",
            headerStyle: {
              backgroundColor: "#00A1F2",
            },
            headerTintColor: "#F1FBFF",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontFamily: "RalewayMedium",
              fontSize: 26,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
