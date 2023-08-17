import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#F87E04",
    },
    text: {
      primary: "#ffffff", // Set the text color to white
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          marginTop: "20px",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#F87E04",
              color: "white",
            },
            "&:hover fieldset": {
              borderColor: "#F87E04",
              color: "#F87E04",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#F87E04",
              color: "#F87E04",
            },
          },
          "& .MuiInputLabel-root": {
            color: "#fff", // Set the label color to white
          },
        },
      },
    },
  },
});

export default theme;
