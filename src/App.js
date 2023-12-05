import "./App.css";
import { useState, useEffect } from "react";
import Display from "./Display";

function App() {
  const [input, setInput] = useState("");

  const [days, setDays] = useState("D");
  const [hours, setHours] = useState("O");
  const [minutes, setMinutes] = useState("N");
  const [seconds, setSeconds] = useState("E");

  const handleChange = async (event) => {
    setInput(event.target.value);
  };

  const getDateDiff = (date1, date2) => {
    let d = Math.floor((date1 - date2) / (1000 * 60 * 60 * 24));

    if (d >= 0) {
      let h = Math.floor((date1 - date2) / (1000 * 60 * 60) - d * 24);
      let m = Math.floor((date1 - date2) / (1000 * 60) - d * 24 * 60 - h * 60);
      let s = Math.floor(
        (date1 - date2) / 1000 - d * 24 * 60 * 60 - h * 60 * 60 - m * 60
      );
      setDays(d);
      setHours(h);
      setMinutes(m);
      setSeconds(s);
    } else {
      setDays("D");
      setHours("O");
      setMinutes("N");
      setSeconds("E");
    }
  };

  useEffect(() => {
    const timeIntervalId = setInterval(() => {
      let selectedInp = input;

      let selectedDate = new Date(selectedInp + "T12:00:00");
      let currentDate = new Date();

      getDateDiff(selectedDate, currentDate);
    }, 1000);

    return () => clearInterval(timeIntervalId);
  }, [input]);

  return (
    <div className="text-center">
      <h3 className="my-5">Choose a future date to start the countdown.</h3>
      <input
        value={input}
        onChange={handleChange}
        className="form-control my-5"
        type="date"
      />

      <div className="output">
        <Display h4={days} p="DAYS" />
        <span style={{ fontSize: "2.5rem" }}>:</span>
        <Display h4={hours} p="HOURS" />
        <span style={{ fontSize: "2.5rem" }}>:</span>
        <Display h4={minutes} p="MINUTES" />
        <span style={{ fontSize: "2.5rem" }}>:</span>
        <Display h4={seconds} p="SECONDS" />
      </div>
    </div>
  );
}

export default App;
