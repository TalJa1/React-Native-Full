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

  const running = { key: "running", color: "blue" };
  const cycling = { key: "cycling", color: "green" };
  const walking = { key: "walking", color: "orange" };

  return (
    <View
      style={{
        flex: 1,
        marginTop: 50,
      }}
    >
      <Calendar
        markingType="multi-dot"
        onDayPress={(day) => {
          setSelected(day.dateString);
        }}
        markedDates={{
          "2024-06-10": { dots: [running] },
          "2024-06-12": {},
          "2024-06-13": {
            dots: [running, cycling, walking],
          },
          [selected]: {
            selected: true,

            disableTouchEvent: true,
          },
        }}
      />
    </View>
  );
};

export default CalenderPage;
