import React from "react";
import DayListItem from "./DayListItem";

// Component for holding all DayListItems
export default function DayList(props) {
  // Map over each day in the days props and pass props to each DayListItem
  const daysArray = props.days.map((day) => (
    <DayListItem
      key={day.id}
      setDay={props.onChange}
      selected={day.name === props.value}
      {...day}
    />
  ));

  return <ul>{daysArray}</ul>;
}
