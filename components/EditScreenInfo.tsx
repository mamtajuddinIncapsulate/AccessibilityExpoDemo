import React, { useEffect, useRef } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Alert,
  findNodeHandle,
  AccessibilityInfo,
} from "react-native";

export default function EditScreenInfo({ path }: { path: string }) {
  const button1Ref = useRef(null);
  const handlePress = (buttonName: string) => {
    Alert.alert(`${buttonName} Pressed`);
  };
  useEffect(() => {
    // Ensure Button 1 is focused after a short delay
    const focusTimeout = setTimeout(() => {
      if (button1Ref.current) {
        const reactTag = findNodeHandle(button1Ref.current);
        if (reactTag) {
          AccessibilityInfo.setAccessibilityFocus(reactTag);
          AccessibilityInfo.announceForAccessibility("Button 1 is focused");
        }
      }
    }, 500); // Delay to ensure the component is fully rendered

    // Cleanup timeout
    return () => clearTimeout(focusTimeout);
  }, []);
  return (
    <View style={styles.buttonsContainer}>
      <View style={styles.column}>
        <TouchableOpacity
          ref={button1Ref}
          style={styles.button}
          onPress={() => console.log("Button 1")}
          accessibilityLabel="Button 1"
          accessibilityHint="Double-tap or press Enter to activate Button 1"
          accessible={true}
          accessibilityRole="button"
        >
          <Text style={styles.buttonText}>Button 1</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log("Button 2")}
          accessibilityLabel="Button 2"
          accessibilityHint="Double-tap or press Enter to activate Button 2"
          accessible
          accessibilityRole="button"
        >
          <Text style={styles.buttonText}>Button 2</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log("Button 3")}
          accessibilityLabel="Button 3"
          accessibilityHint="Double-tap or press Enter to activate Button 3"
          accessible
          accessibilityRole="button"
        >
          <Text style={styles.buttonText}>Button 3</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.column}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log("Button 4")}
          accessibilityLabel="Button 4"
          accessibilityHint="Double-tap or press Enter to activate Button 4"
          accessible
          accessibilityRole="button"
        >
          <Text style={styles.buttonText}>Button 4</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log("Button 5")}
          accessibilityLabel="Button 5"
          accessibilityHint="Double-tap or press Enter to activate Button 5"
          accessible
          accessibilityRole="button"
        >
          <Text style={styles.buttonText}>Button 5</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log("Button 6")}
          accessibilityLabel="Button 6"
          accessibilityHint="Double-tap or press Enter to activate Button 6"
          accessible
          accessibilityRole="button"
        >
          <Text style={styles.buttonText}>Button 6</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    gap: 10,
    padding: 20,
    marginVertical: 20,
  },
  column: {
    flex: 1,
    gap: 10,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  button: {
    width: 150,
    padding: 15,
    backgroundColor: "#007BFF",
    borderRadius: 5,
    alignItems: "center",
    marginVertical: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});
