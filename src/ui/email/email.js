import { Form } from "semantic-ui-react";
import React, { useReducer, useState } from "react";
import "./email.scss";
import { TextField, FormControl, Button } from "@mui/material";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";

const EmailModule = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [phoneNumberCompo, setPhoneNumberCompo] = useState([
    <TextField
      label="Name"
      variant="outlined"
      fullWidth
      margin="normal"
      required
    />,
  ]);

  const reducer = (currentState, action) => {
    // eslint-disable-next-line default-case
    switch (action) {
      case "ADD":
        return currentState + 1;
      case "REMOVE":
        return currentState - 1;
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, 0);

  const styles = (theme) => ({
    multilineColor: {
      color: "red",
    },
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(event.target);
    setEmailError(false);
    setPasswordError(false);

    if (email == "") {
      setEmailError(true);
    }
    if (password == "") {
      setPasswordError(true);
    }

    if (email && password) {
      console.log(email, password);
    }

    emailjs
      .send(
        "service_oybd1i6",
        "template_dovvlrw",
        event.target,
        "J34SsrihH1VJp8tSV"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );
  };

  const addComponent = () => {
    // setPhoneNumberCompo(...phoneNumberCompo);
    const allComponent = [...phoneNumberCompo];
    allComponent.push(
      <TextField
        label="Name"
        variant="outlined"
        fullWidth
        margin="normal"
        required
      />
    );
    setPhoneNumberCompo(allComponent);
  };

  const removeComponent = () => {
    // setPhoneNumberCompo(...phoneNumberCompo);
    const allComponent = [...phoneNumberCompo];
    allComponent.pop();
    setPhoneNumberCompo(allComponent);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        margin="normal"
        required
        type="email"
      />
      <TextField
        label="Message"
        variant="outlined"
        fullWidth
        margin="normal"
        multiline
        rows={4}
        required
      />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
};
export default EmailModule;
