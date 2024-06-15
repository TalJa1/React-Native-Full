import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";
import React from "react";
import * as DocumentPicker from "expo-document-picker";

export interface Root {
  assets: Asset[];
  canceled: boolean;
}

export interface Asset {
  mimeType: string;
  name: string;
  size: number;
  uri: string;
}

const FilePickerPage = () => {
  const [dataStore, setDataStore] = React.useState<Asset[]>();

  const pickDocument = async () => {
    try {
      let result = await DocumentPicker.getDocumentAsync({});

      if (!result.canceled) {
        // Transform result to match Asset[]
        const assets: Asset[] = result.assets.map((doc) => ({
          mimeType: doc.mimeType ?? "", // Handle undefined case
          name: doc.name,
          size: doc.size ?? 0,
          uri: doc.uri,
        }));

        // Update dataStore
        setDataStore(assets);
      } else {
        // Handle cancellation
        setDataStore([]);
      }

      console.log(result);
    } catch (error) {
      console.log("Error picking document:", error);
    }
  };

  const renderAssetName = () => {
    if (dataStore && dataStore.length > 0) {
      return dataStore[0].name; // Render the name of the first asset
    } else {
      return "No file selected"; // Default text when no file is selected
    }
  };
  return (
    <View style={styles.background}>
      <View style={styles.header}>
        <Text
          style={{
            fontWeight: "700",
            fontSize: 20,
          }}
        >
          Chosen File
        </Text>
        <Text>{renderAssetName()}</Text>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Upload CSV File</Text>
        <View>
          <TouchableOpacity
            style={{
              alignItems: "center",
              backgroundColor: "black",
              padding: 10,
              paddingHorizontal: 20,
            }}
            onPress={pickDocument}
          >
            <Text
              style={{
                color: "white",
                textTransform: "uppercase",
              }}
            >
              Upload your file
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Ensure your file is in CSV format.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  background: {
    flex: 1,
  },
  footer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 20,
  },
  footerText: {
    fontSize: 16,
    color: "gray",
  },
});

export default FilePickerPage;
