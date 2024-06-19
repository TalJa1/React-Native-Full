import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import QRcodeScanner from "./pages/QRcodeScanner";
import FilePickerPage from "./pages/FilePickerPage";
import ReactNativeProgressPage from "./pages/ReactNativeProgressPage";
import GradientPage from "./pages/GradientPage";
import NotificationPage from "./pages/NotificationPage";
import NetworkPage from "./pages/NetworkPage";

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app</Text>
    //   <StatusBar style="auto" />
    // </View>
    // <QRcodeScanner />
    // <FilePickerPage />
    // <ReactNativeProgressPage />
    // <GradientPage />
    // <NotificationPage />
    <NetworkPage />
  );
}
