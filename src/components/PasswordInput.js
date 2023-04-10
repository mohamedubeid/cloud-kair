import { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import { TextField } from "@mui/material";

const PasswordInput = ({ name, value, onChange, onBlur, passwordError }) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <TextField
      placeholder="Password"
      type={showPassword ? "text" : "password"}
      InputProps={{
        endAdornment: (
          <IconButton
            onClick={handleClickShowPassword}
            edge="end"
            sx={{ opacity: "80%" }}
          >
            {showPassword ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        ),
      }}
      variant="standard"
      name={name}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      error={passwordError ? true : false}
      helperText={passwordError}
    />
  );
};

export default PasswordInput;
