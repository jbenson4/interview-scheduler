import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData(initial) {
  // State construction
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: [],
    interviewers: []
  });

  const setDay = day => setState({...state, day})

  // API requests
  useEffect(() => {
    Promise.all([
      axios.get('/api/days'),
      axios.get('/api/appointments'),
      axios.get('/api/interviewers'),
    ]).then((all) => {
      const [ days, appointments, interviewers ] = all;
      setState(prev => ({...prev, days: days.data, appointments: appointments.data, interviewers: interviewers.data}))
    })
  }, []);

  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    return axios
      .put(`/api/appointments/${id}`, appointments[id])
      .then((res) => {
        const days = updateSpots(appointments);
        setState({...state, appointments, days})
      })
  };

  function cancelInterview(id) {
    const appointment = {
      ...state.appointments[id],
      interview: null
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    return axios
      .delete(`/api/appointments/${id}`, appointments[id])
      .then((res) => {
        const days = updateSpots(appointments);
        setState({...state, appointments, days})
      })
  };
    
  function updateSpots(appointments) {
    const { days } = state;
    const newDays = [...state.days];
    for (const day of days) {
      let count = 0;
      let index = days.indexOf(day)
      for (const time of day.appointments) {
        if (appointments[time].interview === null) {
          count += 1;
        }
      }
      newDays[index].spots = count;
    }
    return newDays;
  }
  
  return (
    { state,
      bookInterview,
      cancelInterview,
      setDay,
      updateSpots
    }
  );
}