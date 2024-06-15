import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const GradientPage = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={[
          "rgba(255, 200, 228, 0.8)",
          "rgba(243, 237, 240, 0.8)",
          "rgba(247, 130, 190, 0.8)",
        ]}
        style={styles.background}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1
  },
});

export default GradientPage;
