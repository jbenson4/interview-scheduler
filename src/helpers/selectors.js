export function getAppointmentsForDay(state, day) {
  const appointmentArray = [];
  for (const dayObj of state.days) {
    if (dayObj.name === day) {
      appointmentArray.push(...dayObj.appointments);
    }
  }
  const appointmentObjects = [];
  for (const appointment in state.appointments) {
    for (const id of appointmentArray) {
      if (Number(appointment) === id) {
        appointmentObjects.push(state.appointments[appointment]);
      }
    }
  }
  return appointmentObjects;
}

export function getInterview(state, interview) {
  if (!interview) {
    return null;
  }
  const interviewObj = {};
  const interviewerId = interview.interviewer;

  interviewObj.student = interview.student;
  for (const ii in state.interviewers) {
    if (state.interviewers[ii].id === interviewerId) {
      interviewObj.interviewer = state.interviewers[ii];
    }
  }
  return interviewObj;
}

export function getInterviewersForDay(state, day) {
  const interviewerArray = [];
  for (const dayObj of state.days) {
    if (dayObj.name === day) {
      interviewerArray.push(...dayObj.interviewers);
    }
  }
  const interviewerObjects = [];
  for (const ii in state.interviewers) {
    for (const id of interviewerArray) {
      if (Number(ii) === id) {
        interviewerObjects.push(state.interviewers[ii]);
      }
    }
  }
  return interviewerObjects;
}
