import { useFonts } from "expo-font";
import { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  KeyboardAvoidingView,
} from "react-native";
import getWeatherApi from "../apis/getWeatherApi";
import Btn from "../components/Btn";

export default function SearchScreen({ navigation }) {
  const [city, setCity] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

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

  const handleSearch = async () => {
    if (!city.trim()) {
      setErrorMessage("Please enter a city name.");
      return;
    }

    try {
      const cityData = await getWeatherApi(city);
      if (
        !cityData ||
        !cityData.current ||
        !cityData.current.weather_descriptions
      ) {
        setErrorMessage("City data is invalid. Please try again.");
        return;
      }
      navigation.navigate("Details", { cityData: cityData, location: city });
      setCity("");
      setErrorMessage("");
    } catch (error) {
      console.error("Error fetching city data:", error);
      setErrorMessage("City not found. Please enter a valid city name.");
    }
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.searchContainer}>
      <Text style={styles.searchText}>Please type in the city:</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="eg. Bucharest"
        value={city}
        onChangeText={setCity}
      />
      {errorMessage && <Text style={styles.errorText}>{errorMessage}</Text>}

      <Btn onPress={handleSearch} style={{ width: 270 }}>
        Search
      </Btn>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    flex: 1,
    backgroundColor: "#003560",
    alignItems: "center",
    paddingTop: 150,
  },
  searchText: {
    fontFamily: "RalewayMedium",
    fontSize: 20,
    color: "#F1FBFF",
  },
  searchInput: {
    height: 70,
    width: 270,
    backgroundColor: "#F1FBFF",
    color: "#001E45",
    borderRadius: 100,
    marginVertical: 40,
    paddingHorizontal: 40,
  },
  errorText: {
    fontFamily: "RalewayRegular",
    fontSize: 16,
    color: "red",
    marginTop: 10,
    marginBottom: 10,
  },
});
