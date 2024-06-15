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
      <Text style={styles.file}>Upload CSV File</Text>
      <View style={styles.button}>
        <TouchableOpacity>
          <Button
            title="upload your file"
            color="black"
            onPress={pickDocument}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  file: {
    color: "black",
    marginHorizontal: 145,
  },
  button: {
    marginHorizontal: 60,
  },
});

export default FilePickerPage;
