import React from "react";
import "components/Appointment/styles.scss";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import Error from "./Error";
import Form from "./Form";
import Status from "./Status";
import Confirm from "./Confirm";
import useVisualMode from "hooks/useVisualMode";

// Component for creating an interview appointment
export default function Appointment(props) {

  // Create mode variables
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const CONFIRM = "CONFIRM";
  const ERROR_SAVE = "ERROR_SAVE";
  const ERROR_DELETE = "ERROR_DELETE";
  const SAVING = "SAVING";
  const DELETE = "DELETE";
  const EDIT = "EDIT";

  // Use custom hook to set state based on whether interview exists or not
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  // Function to create an interview
  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer,
    };
    transition(SAVING);  // Show status message after confirming appointment 
    props
      .bookInterview(props.id, interview)
      .then(() => transition(SHOW))
      .catch(() => transition(ERROR_SAVE, true));  // Display error message if issue during axios PUT request
  }

  function destroy() {
    transition(DELETE, true);  // Transition with parameter 'true' to show correct component after deletion
    props
      .cancelInterview(props.id)
      .then(() => transition(EMPTY))
      .catch(() => transition(ERROR_DELETE, true));  // Display error message if issue during axios DELETE request
  }

  return (
    <article className="appointment">
      <Header time={props.time} />
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}

      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          onDelete={() => transition(CONFIRM)}
          onEdit={() => transition(EDIT)}
        />
      )}

      {mode === CREATE && (
        <Form
          onCancel={() => back()}
          student={props.student}
          interviewers={props.interviewers}
          onSave={save}
        />
      )}

      {mode === SAVING && <Status message={"SAVING"} />}

      {mode === DELETE && <Status message={"DELETING"} />}

      {mode === CONFIRM && (
        <Confirm
          message={"Are you sure you would like to delete?"}
          onCancel={() => back()}
          onConfirm={() => destroy()}
        />
      )}

      {mode === EDIT && (
        <Form
          onSave={save}
          onCancel={() => back()}
          student={props.interview.student}
          interviewer={props.interview.interviewer.id}
          interviewers={props.interviewers}
        />
      )}

      {mode === ERROR_DELETE && (
        <Error
          message={"Could not cancel appointment."}
          onClose={() => back()}
        />
      )}

      {mode === ERROR_SAVE && (
        <Error
          message={"Could not create appointment."}
          onClose={() => back()}
        />
      )}
    </article>
  );
}
