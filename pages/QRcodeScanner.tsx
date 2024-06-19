import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";

export default function QRcodeScanner() {
  const [facing, setFacing] = useState<any>("back");
  const [flash, setFlash] = useState<any>("off");
  const [permission, requestPermission] = useCameraPermissions();
  const [scanned, setScanned] = useState(false); // State to track if QR code has been scanned

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="Grant Permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing((current: any) => (current === "back" ? "front" : "back"));
  }

  function toggleCameraFlashLight() {
    // console.log(flash);

    setFlash((current: any) => (current === "off" ? "on" : "off"));
  }

  const handleScanCode = (data: string) => {
    if (!scanned) {
      // Check if QR code has not been scanned already
      setScanned(true); // Mark QR code as scanned
      Alert.alert(
        "QR code data",
        data,
        [
          {
            text: "OK",
            onPress: () => setScanned(false), // Reset scanned state for further scanning
          },
        ],
        { cancelable: false }
      );
    }
  };

  return (
    <View style={styles.container}>
      <CameraView
        style={styles.camera}
        flash={flash}
        facing={facing}
        barcodeScannerSettings={{
          barcodeTypes: ["qr"],
        }}
        onBarcodeScanned={({ data }) => handleScanCode(data)}
      >
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
            <Text style={styles.text}>
              {facing === "back" ? "Front camera" : "Back camera"}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={toggleCameraFlashLight}
          >
            <Text style={styles.text}>
              {flash === "off" ? "Flash on" : "Flash off"}
            </Text>
          </TouchableOpacity>
        </View>
      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    marginBottom: 64,
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});
