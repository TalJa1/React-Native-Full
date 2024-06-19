import React, { useState, useEffect } from "react";
import {
  Platform,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import * as Location from "expo-location";

interface LocationGetter {
  coords: Coords;
  mocked: boolean;
  timestamp: number;
}

interface Coords {
  accuracy: number;
  longitude: number;
  altitude: number;
  heading: number;
  latitude: number;
  altitudeAccuracy: number;
  speed: number;
}

const GettingLocationPage = () => {
  const [location, setLocation] = useState<any>(null);
  const [errorMsg, setErrorMsg] = useState<string>("");

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  const handleGetLocation = () => {
    if (errorMsg) {
      console.log(errorMsg);
    } else if (location) {
      const geoLocation: LocationGetter = location;

      console.log(geoLocation);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={handleGetLocation}
        style={{
          backgroundColor: "#9DFACC",
          padding: 20,
          borderRadius: 10,
        }}
      >
        <Text>Click here to get location</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  paragraph: {
    fontSize: 18,
    textAlign: "center",
  },
});

export default GettingLocationPage;
