import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function Button({ children, onPress, style, btnTextStyle }) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      <Text style={[styles.buttonText, btnTextStyle]}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#57BEF3",
    paddingVertical: 20,
    borderRadius: 100,
    alignItems: "center",
    elevation: 5,
  },
  buttonText: {
    fontFamily: "RalewayMedium",
    fontSize: 18,
  },
});
