export const getConditionIcon = (description) => {
  const lowerDescription = description.toLowerCase();

  if (lowerDescription.includes("overcast")) {
    return { color: "#FFD700", name: "cloudy-outline" };
  } else if (lowerDescription.includes("sunny")) {
    return { color: "#FFD700", name: "sunny-outline" };
  } else if (lowerDescription.includes("clear")) {
    return { color: "#FFD700", name: "sunny-outline" };
  } else if (
    lowerDescription.includes("rain") ||
    lowerDescription.includes("showers") ||
    lowerDescription.includes("thunder")
  ) {
    return { color: "#6493EA", name: "rainy-outline" };
  } else if (lowerDescription.includes("partly cloudy")) {
    return { color: "#66CC66", name: "partly-sunny-outline" };
  } else if (lowerDescription.includes("cloudy")) {
    return { color: "#FF5733", name: "cloudy-outline" };
  } else if (lowerDescription.includes("snow")) {
    return { color: "#66CC66", name: "snow-outline" };
  } else if (lowerDescription.includes("windy")) {
    // return { color: "#66CC66", name: "wind" };
  } else if (lowerDescription.includes("fog")) {
    // return { color: "#66CC66", name: "fog" };
  } else {
    return { color: "#A0A0A0", name: "❓" };
  }
};
