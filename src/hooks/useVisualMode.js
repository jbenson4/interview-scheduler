import { useState } from "react";

// Custom hook for handling state between appointment cards
export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  // Transition function with capability to replace previous state
  const transition = function (newMode, replace = false) {
    setHistory((prev) => {
      const newHistory = [...prev];
      if (replace) {
        newHistory.pop();
      }
      newHistory.push(newMode);
      return setHistory(newHistory);
    });
    setMode(newMode);
  };

  // Function to go back one previous state in the state history
  const back = function () {
    if (history.length === 1) {
      return;
    }
    const newHistory = [...history];
    newHistory.pop();
    setHistory(newHistory);
    setMode(newHistory[newHistory.length - 1]);
  };
  return { mode, transition, back };
}
