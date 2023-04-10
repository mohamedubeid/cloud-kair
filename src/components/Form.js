import { Box, Button, TextField, Typography } from "@mui/material";
import DateInput from "./DateInput";
import SelectInput from "./SelectInput";
import { useState } from "react";
import PasswordInput from "./PasswordInput";
import { formSchema } from "../schema/signupForm.schema";
import SucceedNotification from "./SucceedNotification";
const Form = () => {
  const [signupForm, setSignupForm] = useState({
    name: "",
    email: "",
    password: "",
    dateOfBirth: "",
    healthCareLevel: "",
  });
  const [errors, setErrors] = useState({});

  const handleBlur = (event) => {
    const field = event.target.name;
    const value = event.target.value;

    const { error } = formSchema.validate(
      { [field]: value },
      { abortEarly: true }
    );
    if (!error) {
      setErrors((prevErrors) => ({ ...prevErrors, [field]: null }));
    } else {
      const message = error.details[0].message;
      setErrors((prevErrors) => ({ ...prevErrors, [field]: message }));
    }
  };

  const handleChange = (event) => {
    setSignupForm({
      ...signupForm,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { error } = formSchema.validate(signupForm, { abortEarly: false });
    if (!error) {
      console.log("this is submit button", signupForm);
      setOpenAlert(true);
      setSignupForm({
        name: "",
        email: "",
        password: "",
        dateOfBirth: "",
        healthCareLevel: "",
      });
    } else {
      const newErrors = {};
      error.details.forEach((detail) => {
        const path = detail.path[0];
        const message = detail.message;
        newErrors[path] = message;
      });
      setErrors(newErrors);
    }
  };

  //Alert
  const [openAlert, setOpenAlert] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenAlert(false);
  };
  return (
    <Box
      sx={{ mt: "24px", mb: "24px", pl: "0.28vw" }}
      width={{ xs: "80%", sm: "60%", md: "50%", lg: "25vw" }}
      textAlign={{ xs: "center", lg: "left" }}
    >
      <img src="logo.svg" alt="logo" />
      <Typography component="h1" sx={{ mt: "3vh", fontSize: "32px" }}>
        Create An Account
      </Typography>
      <Typography
        component="h3"
        sx={{
          fontSize: "16px",
          marginTop: "3.84vh",
          color: "#000000b5",
        }}
      >
        Let’s get started with your free date trail.
      </Typography>

      <Box
        component="form"
        onSubmit={handleSubmit}
        display="flex"
        flexDirection="column"
        alignItems={{ xs: "center", lg: "start" }}
        sx={{
          mt: "3vh",
          "& .MuiInputBase-root": {
            marginTop: "3.84vh",
          },
        }}
      >
        <TextField
          fullWidth
          variant="standard"
          placeholder="Full Name"
          type="text"
          autoComplete="off"
          name="name"
          value={signupForm.name}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors?.name ? true : false}
          helperText={errors?.name}
        />
        <TextField
          fullWidth
          variant="standard"
          placeholder="Email Address"
          type="email"
          autoComplete="off"
          name="email"
          value={signupForm.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors?.email ? true : false}
          helperText={errors?.email}
        />
        <PasswordInput
          name="password"
          value={signupForm.password}
          onChange={handleChange}
          onBlur={handleBlur}
          passwordError={errors?.password}
        />
        <DateInput
          name="dateOfBirth"
          value={signupForm.dateOfBirth}
          onChange={handleChange}
          onBlur={handleBlur}
          dateError={errors?.dateOfBirth}
        />
        <SelectInput
          name="healthCareLevel"
          value={signupForm.healthCareLevel}
          onChange={handleChange}
          onBlur={handleBlur}
          selectError={errors?.healthCareLevel}
        />
        <Button
          fullWidth
          type="submit"
          sx={{
            mt: "7.68vh",
            color: "white",
            background: "linear-gradient(to right, #6273E5, #50F5D5)",
            // width: "25vw",
            height: "5.64vh",
            fontSize: "16px",
            borderRadius: "10px",
            textTransform: "capitalize",
          }}
        >
          Create An Account
        </Button>
      </Box>
      <Button
        sx={{
          fontSize: "16px",
          fontWeight: "400",
          width: "100%",
          m: "2.5vh auto 0 auto",
          color: "#000",
          textTransform: "capitalize",
          "&: hover": {
            textDecoration: "underLine",
          },
        }}
        disableRipple
      >
        Already have an account? log in
      </Button>
      <SucceedNotification open={openAlert} handleClose={handleClose} />
    </Box>
  );
};

export default Form;
