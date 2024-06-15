import { View, Text, StyleSheet } from "react-native";
import React from "react";
import * as Progress from "react-native-progress";

const ReactNativeProgressPage = () => {
  return (
    <View style={styles.container}>
      {/* <Progress.Circle size={30} indeterminate={true} /> */}
      {/* <Progress.Bar progress={0.9} width={200} /> */}
      {/* <Progress.Pie progress={0.4} size={50} /> */}
      <Progress.CircleSnail color={['red', 'green', 'blue']} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ReactNativeProgressPage;
