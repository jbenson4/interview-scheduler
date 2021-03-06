import React from "react";
import "components/InterviewerList.scss";
import InterviewerListItem from "./InterviewerListItem";
import PropTypes from "prop-types";

// Component for holding all the InterviewerListItems
function InterviewerList(props) {
  // Map over each interviewer in the interviewer props and pass props to InterviewerListItems
  const interviewerArray = props.interviewers.map((interviewer) => (
    <InterviewerListItem
      key={interviewer.id}
      selected={interviewer.id === props.value}
      setInterviewer={() => props.onChange(interviewer.id)}
      {...interviewer}
    />
  ));
  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{interviewerArray}</ul>
    </section>
  );
}

InterviewerList.propTypes = {
  interviewers: PropTypes.array.isRequired,
};

export default InterviewerList;
