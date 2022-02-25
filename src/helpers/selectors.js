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
        appointmentObjects.push(state.appointments[appointment])
      }
    }
  }
  return appointmentObjects;
}