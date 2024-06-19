import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import QRcodeScanner from "./pages/QRcodeScanner";
import FilePickerPage from "./pages/FilePickerPage";
import ReactNativeProgressPage from "./pages/ReactNativeProgressPage";
import GradientPage from "./pages/GradientPage";
import NotificationPage from "./pages/NotificationPage";
import NetworkPage from "./pages/NetworkPage";
import RadioButtonPage from "./pages/RadioButtonPage";
import CarouselSilderPage from "./pages/CarouselSilderPage";
import GettingLocationPage from "./pages/GettingLocationPage";
import CalenderPage from "./pages/CalenderPage";

export default function App() {
  return (
    // <QRcodeScanner />
    // <FilePickerPage />
    // <ReactNativeProgressPage />
    // <GradientPage />
    // <NotificationPage />
    // <NetworkPage />
    // <RadioButtonPage />
    <CarouselSilderPage />
    // <GettingLocationPage />
    // <CalenderPage />
  );
}
