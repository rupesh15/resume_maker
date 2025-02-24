// src/App.tsx
import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";
import { resetUser, setEmail, setName, setphoneNumber } from "../store/reducer";
import { useNavigate } from "react-router-dom";

const App: React.FC = () => {
  const [user, handleuserName] = useState<string>("");
  const [email, handleEmail] = useState<string>("");
  const [phoneNumber, handlePhonenumber] = useState<string>();
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const handleValidation = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (user && email && phoneNumber) {
      dispatch(setEmail(email));
      dispatch(setName(user));
      dispatch(setphoneNumber(phoneNumber));
      navigate('/homepage')

    } else {
      alert("ooops.. something went wrong");
    }
  };

  return (
    <Container
      fluid
      className="min-vh-100 d-flex justify-content-center align-items-center"
    >
      <Row className="w-100">
        <Col className="d-flex justify-content-center">
          <form
            className="border border-1 border-dark p-5 inputbox_background"
            onSubmit={handleValidation}
          >
            <div className="input-group mb-3">
              <span className="input-group-text">Email</span>
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                onChange={(event) => handleEmail(event.target.value)}
                required
              />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text">Name</span>
              <input
                type="string"
                className="form-control"
                placeholder="Name"
                onChange={(event) => handleuserName(event.target.value)}
                required
              />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text">{"\u{1F4F1}"}</span>
              <input
                type="number"
                className="form-control"
                placeholder="Phone no."
                onChange={(event) => handlePhonenumber(event.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary me-5">
              submit
            </button>
            <button
              type="reset"
              className="btn btn-clear"
              onClick={() => {
                dispatch(resetUser());
              }}
            >
              Clear
            </button>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
