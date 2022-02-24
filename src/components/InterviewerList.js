import React from "react";
import "components/InterviewerList.scss"
import InterviewerListItem from "./InterviewerListItem";

export default function interviewerList(props) {
  const interviewerArray = props.interviewers.map((interviewer) => 
    <InterviewerListItem
      key={interviewer.id}
      selected={interviewer.id === props.value}
      setInterviewer={() => props.onChange(interviewer.id)}
      {...interviewer}
    />
  );
  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light"></h4>
      <ul className="interviewers__list">{interviewerArray}</ul>
    </section>
  );
};