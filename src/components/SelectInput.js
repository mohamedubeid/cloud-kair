import { FormHelperText, Typography } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const SelectInput = ({ name, value, onChange, onBlur, selectError }) => {
  const healthcareLevels = [
    "Primary",
    "Secondary",
    "Tertiary",
    "Quaternary Care",
  ];
  const healthcareOptions = healthcareLevels.map((level) => (
    <MenuItem key={level} value={level}>
      {level}
    </MenuItem>
  ));
  return (
    <FormControl focused={false} error={selectError ? true : false} fullWidth>
      <Select
        displayEmpty
        renderValue={(selected) => {
          if (!selected) {
            return (
              <Typography
                sx={{
                  opacity: "50%",
                  textAlign: "start",
                }}
              >
                Healthcare Level
              </Typography>
            );
          }

          return selected;
        }}
        sx={{
          ".css-1rxz5jq-MuiSelect-select-MuiInputBase-input-MuiInput-input:focus":
            {
              backgroundColor: "white",
            },
        }}
        variant="standard"
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      >
        {healthcareOptions}
      </Select>
      <FormHelperText>{selectError}</FormHelperText>
    </FormControl>
  );
};

export default SelectInput;
