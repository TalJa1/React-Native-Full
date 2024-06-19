import { View, Text } from "react-native";
import React, { useMemo, useState } from "react";
import RadioGroup from "react-native-radio-buttons-group";

// npm i react-native-radio-buttons-group --save
const RadioButtonPage = () => {
  const radioButtons = useMemo(
    () => [
      {
        id: "1", // acts as primary key, should be unique and non-empty string
        label: "Option 1",
        value: "option1",
      },
      {
        id: "2",
        label: "Option 2",
        value: "option2",
      },
    ],
    []
  );

  const [selectedId, setSelectedId] = useState<string>();
  // console.log(selectedId);
  return (
    <View
      style={{
        marginTop: 200,
      }}
    >
      <RadioGroup
        radioButtons={radioButtons}
        onPress={setSelectedId}
        selectedId={selectedId}
      />
    </View>
  );
};

export default RadioButtonPage;
