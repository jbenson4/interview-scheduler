import React from "react";
import DayListItem from "./DayListItem";

export default function DayList(props) {
  const daysArray = props.days.map((day) => 
    <DayListItem
      key={day.id}
      setDay={props.onChange}
      selected={day.name === props.value}
      {...day}
    />
  );

  return (
    <ul>
     {daysArray}
    </ul>
  )
}