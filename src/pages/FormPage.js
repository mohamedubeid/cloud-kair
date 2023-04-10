import { Box, Typography } from "@mui/material";
import Form from "../components/Form";
function App() {
  return (
    <Box
      component="main"
      display="flex"
      justifyContent={{ xs: "start", lg: "space-between" }}
      alignItems={{ xs: "center", lg: "start" }}
      flexDirection={{ xs: "column", lg: "row" }}
      sx={{
        p: { xs: 0, lg: "2.88vh 1.67vw 2.88vh 8.14vw" },
      }}

      // height="100vh"
    >
      <Form />
      <Box
        display={{ xs: "none", lg: "inline-block" }}
        height={{ xs: "auto", lg: "90%", xl: "100%" }}
        // width={{ xs: "auto", lg: "60%", xl: "50%" }}
        position="relative"
      >
        <img src="Photo.svg" height="100%" alt="health care" />
        <Box
          sx={{
            position: "absolute",
            width: "80%",
            bottom: { lg: "2%", xl: "11%" },
            left: "6%",
          }}
        >
          <Typography
            sx={{
              fontSize: "32px",
              fontWeight: "500",
              color: "white",
              textTransform: "capitalize",
              lineHeight: "42px",
            }}
          >
            Without health insurance, getting sick or injured could mean going
            bankrupt, going without needed care, or even dying needlessly.
          </Typography>
          <Typography
            fontSize="24px"
            mt="40px"
            sx={{
              color: "white",
              textTransform: "capitalize",
              lineHeight: "42px",
            }}
          >
            Jan Schakowsky
          </Typography>
          <Typography
            fontSize="16px"
            mt="16px"
            sx={{
              color: "white",
              textTransform: "capitalize",
              lineHeight: "42px",
            }}
          >
            American Author
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
