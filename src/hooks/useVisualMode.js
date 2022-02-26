import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);
  const transition = function (mode, replace = false) {
    if (replace) {
      setMode(mode);
      const newHistory = [...history];
      newHistory[newHistory.length - 1] = mode;
      setHistory(newHistory);      
    }
    history.push(mode);
    setMode(mode);
  };
  const back = function () {
    if (history.length > 1)
    history.pop()
    setMode(history[history.length - 1]);
  };
  return { mode, transition, back };
};