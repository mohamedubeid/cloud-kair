import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const SucceedNotification = ({ open, handleClose }) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
        Your Form Submitted Successfully!
      </Alert>
    </Snackbar>
  );
};

export default SucceedNotification;
