import * as React from "react";
import "./chat.scss";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Divider } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { FiCircle } from "react-icons/fi";
import { AiOutlineWechat } from "react-icons/ai";

export default function Chatwindow() {
  const [open, setOpen] = React.useState(false);
  const [getHistory, setHistory] = useState([]);
  const [qaArray, setQaArray] = useState([]);
  const [showIndicator, setShowIndicator] = useState(true);
  const [showResult, setShowResult] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  React.useEffect(() => {
    handleClickOpen();
  }, []);

  const handleClose = () => {
    setOpen(false);
  };
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send a request to the server with the prompt
    axios
      .post("/chat", { prompt })
      .then((res) => {
        // Update the response state with the server's response
        const noSpecialChars = res.data.replace(/[^a-zA-Z0-9 ]/g, "");
        setResponse(noSpecialChars);
      })
      .catch((err) => {
        console.error(err);
      });
    const timer = setTimeout(() => {
      setShowIndicator(false);
      setShowResult(true);
    }, 4000);

    return () => clearTimeout(timer);
  };

  React.useEffect(() => {
    console.log("............$...", qaArray);
    const question = prompt;
    const answer = response;
    const qaObject = { question, answer };
    if (answer.length > 0) {
      setQaArray((prevArray) => [...prevArray, qaObject]);
    }
  }, [response]);

  return (
    <>
      <div className="chat-window-main">
        <Dialog open={open} onClose={handleClose}>
          <div className="chat-gpt-dialog">
            <DialogTitle className="chat-gpt-dialog-title">
              <AiOutlineWechat color="green" fontSize={"30px"} /> Lets chat with
              Chat GPT for all your questions{" "}
            </DialogTitle>

            <Divider />
            <DialogContent className="chat-gpt-dialog-title">
              <div className="chat-container">
                <Divider />
                {qaArray.map((qa, index) => (
                  <div className="chat-area" key={index}>
                    <div className="chat-questions">
                      <div>
                        <AccountBoxIcon className="avatar" />
                      </div>
                      <div>{qa.question}</div>
                    </div>
                    <div>
                      <div>
                        {showIndicator && (
                          <div className="typing-indicator-container">
                            <div className="typing-indicator"></div>
                            <div className="typing-indicator"></div>
                            <div className="typing-indicator"></div>
                          </div>
                        )}
                        {showResult && (
                          <div>
                            {" "}
                            <div className="chat-questions">
                              <div>
                                <AccountBoxIcon className="avatar-answer" />
                              </div>
                              <div> {qa.answer}</div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="chat-content">
                {/* {response} */}
                <TextField
                  className="chat-gpt-text-field"
                  type="text"
                  color="warning"
                  value={prompt}
                  inputProps={{ style: { color: "white" } }}
                  onChangeCapture={(e) => setPrompt(e.target.value)}
                />
              </div>
            </DialogContent>
            <DialogActions className="chat-gpt-dialog-title">
              <Button
                className="chat-gpt-button"
                onClick={handleSubmit}
                sx={{
                  color: "#ef7a14",
                  border: 1,
                }}
              >
                Submit
              </Button>
              <Button
                onClick={handleClose}
                sx={{
                  color: "#ef7a14",
                  border: 1,
                }}
              >
                Cancel
              </Button>
            </DialogActions>
          </div>
        </Dialog>
      </div>
    </>
  );
}
