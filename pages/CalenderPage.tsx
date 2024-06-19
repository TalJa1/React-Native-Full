import { View, Text } from "react-native";
import React from "react";
import { Calendar, LocaleConfig } from "react-native-calendars";

const CalenderPage = () => {
  const [selected, setSelected] = React.useState(
    new Date().getDate().toString()
  );

  const handleChangeDate = () => {
    console.log(selected);
  };

  React.useEffect(() => {
    handleChangeDate();
  }, [selected]);

  return (
    <View
      style={{
        flex: 1,
        marginTop: 50,
      }}
    >
      <Calendar
        onDayPress={(day) => {
          setSelected(day.dateString);
        }}
        markedDates={{
          [selected]: {
            selected: true,
            disableTouchEvent: true,
            // selectedTextColor: "red",
          },
        }}
      />
    </View>
  );
};

export default CalenderPage;
