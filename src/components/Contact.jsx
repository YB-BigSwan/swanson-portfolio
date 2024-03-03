/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import "../styles/Homepage.css";

const Contact = () => {
  const formSpreeKey = import.meta.env.VITE_FORM_KEY;
  console.log(formSpreeKey.toString());
  const [state, handleSubmit] = useForm(formSpreeKey);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  useEffect(() => {
    if (state.succeeded) {
      setOpenSnackbar(true);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }
  }, [state.succeeded]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="form-container">
      <h2>Contact</h2>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="info-wrapper">
          <div className="field-wrapper">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="info-input"
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>

          <div className="field-wrapper">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="info-input"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
        </div>

        <div className="message-wrapper">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>

        <button
          className="form-submit"
          type="submit"
          disabled={state.submitting}
        >
          Submit
        </button>
      </form>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        className="snackbar"
      >
        <MuiAlert
          elevation={6}
          variant="filled"
          onClose={handleSnackbarClose}
          severity="success"
          className="snackbar"
        >
          Thanks for reaching out! I'll be in touch as soon as possible!
        </MuiAlert>
      </Snackbar>
    </div>
  );
};
export default Contact;
