export const getConditionIcon = (description) => {
  const lowerDescription = description.toLowerCase();

  if (lowerDescription.includes("overcast")) {
    return { name: "cloudy-outline" };
  } else if (lowerDescription.includes("sunny")) {
    return { name: "sunny-outline" };
  } else if (lowerDescription.includes("clear")) {
    return { name: "sunny-outline" };
  } else if (
    lowerDescription.includes("rain") ||
    lowerDescription.includes("showers") ||
    lowerDescription.includes("thunder") ||
    lowerDescription.includes("drizzle")
  ) {
    return { name: "rainy-outline" };
  } else if (lowerDescription.includes("partly cloudy")) {
    return { name: "partly-sunny-outline" };
  } else if (lowerDescription.includes("cloudy")) {
    return { name: "cloudy-outline" };
  } else if (lowerDescription.includes("snow")) {
    return { name: "snow-outline" };
  } else if (lowerDescription.includes("mist")) {
    return { name: "water-outline" };
  } else if (lowerDescription.includes("windy")) {
    // return {  name: "wind" };
  } else if (lowerDescription.includes("fog")) {
    // return {  name: "fog" };
  } else {
    return { name: "❓" };
  }
};
