import { useEffect, useState } from "react";
import { View, TextInput, Button, StyleSheet, Text } from "react-native";
import getWeatherApi from "../apis/getWeatherApi";

export default function SearchScreen({ navigation }) {
  const [city, setCity] = useState("");

  // useEffect(() => {
  //   const fetchCity = async () => {
  //     try {
  //       const cityData = await getWeatherApi(city);
  //       setData(cityData);
  //     } catch (error) {
  //       console.error("Error fetching city data:", error);
  //     }
  //   };
  // }, []);

  const handleSearch = async () => {
    try {
      const cityData = await getWeatherApi(city);
      // console.log(city);
      navigation.navigate("Details", { cityData: cityData });
    } catch (error) {
      console.error("Error fetching city data:", error);
    }
  };

  const renderItem = ({ item }) => (
    <Button
      title={item}
      onPress={() => navigation.navigate("Details", { city: item })}
    />
  );

  return (
    <View style={styles.searchContainer}>
      <Text style={styles.searchText}>Please type in the city:</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="eg. Bucharest"
        value={city}
        onChangeText={setCity}
      />
      <Button
        title="Search"
        style={styles.searchButton}
        onPress={handleSearch}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    flex: 1,
    backgroundColor: "#c4b5c6",
    alignItems: "center",
    paddingTop: 60,
  },
  searchText: {
    fontSize: 20,
  },
  searchInput: {
    height: 50,
    width: 200,
    backgroundColor: "white",
    marginVertical: 40,
    paddingHorizontal: 12,
  },
  searchButton: {},
});
