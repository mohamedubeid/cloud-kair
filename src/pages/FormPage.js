import { Box } from "@mui/material";
import Form from "../components/Form";
function App() {
  return (
    <Box
      component="main"
      display="flex"
      justifyContent="space-between"
      sx={{ p: "2.88vh 1.67vw 2.88vh 8.14vw" }}
      height="100vh"
    >
      <Form />
      <Box display={{ xs: "none", md: "block" }}>
        <img src="Photo.svg" height="100%" alt="health care" />
      </Box>
    </Box>
  );
}

export default App;
