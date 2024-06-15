import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";
import React from "react";
import * as DocumentPicker from "expo-document-picker";

const FilePickerPage = () => {
  const pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    // console.log(result.uri);
    console.log(result);
  };

  return (
    <View style={styles.background}>
      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <Text>Upload CSV File</Text>
        <View>
          <TouchableOpacity>
            <Button
              title="upload your file"
              color="black"
              onPress={pickDocument}
            />
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
