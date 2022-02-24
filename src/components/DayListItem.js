import React from "react";
import "components/DayListItem.scss"
import classNames from "classnames";

export default function DayListItem(props) {
  const formatSpots = () => {
    let spots = null;
    if (props.spots === 0) {
      spots = "no spots"
    } else if (props.spots === 1) {
      spots = "1 spot";
    } else {
      spots = `${props.spots} spots`;
    }
    return <h3 className="text--light">{spots} remaining</h3>
  };

  const dayClass = classNames("day-list__item", {
    "day-list__item--selected": props.selected,
    "day-list__item--full": !props.spots
  });
  return (
    <li className={dayClass} onClick={() => props.onChange(props.name)}>
      <h2 className="text--regular">{props.name}</h2> 
      {formatSpots()}
    </li>
  );
}