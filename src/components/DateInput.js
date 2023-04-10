import { useRef } from "react";
import { TextField } from "@mui/material";

const DateInput = ({ name, value, onChange, onBlur, dateError }) => {
  const dateRef = useRef(null);
  const handleFocus = () => {
    const inputEl = dateRef.current.querySelector("input");
    inputEl.type = "date";
  };
  const handleBlur = (event) => {
    onBlur(event);
    const inputEl = dateRef.current.querySelector("input");
    inputEl.type = "text";
  };

  return (
    <TextField
      ref={dateRef}
      onFocus={handleFocus}
      onBlur={handleBlur}
      variant="standard"
      placeholder="Date Of Birth"
      autoComplete="off"
      name={name}
      value={value}
      onChange={onChange}
      error={dateError ? true : false}
      helperText={dateError}
    />
  );
};

export default DateInput;
