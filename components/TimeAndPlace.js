import { View, Text, ActivityIndicator, StyleSheet } from "react-native";

export default function TimeAndPlace({ place }) {
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <View>
      <Text style={styles.locationText}>{place} </Text>
      <Text style={styles.dateText}>{formattedDate}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  locationText: {
    fontFamily: "RalewayBold",
    fontSize: 28,
    color: "#001E45",
  },
  dateText: {
    fontFamily: "RalewayRegular",
    color: "black",
    marginBottom: 40,
    fontSize: 16,
  },
});
