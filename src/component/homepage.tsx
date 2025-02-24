import React, { useState } from "react";
import { Form, Button, Container, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { setAddress, setSkills, setSummary } from "../store/reducer";

const FormComponent: React.FC = () => {
  const name = useSelector((state: RootState) => state.user.name);
  const phoneNumber = useSelector((state: RootState) => state.user.phoneNumber);
  const email = useSelector((state: RootState) => state.user.email);
  const [address, handleAddress] = useState<string>("");
  const [summary, handleSummary] = useState<string>("");
  const [skill, handleSkill] = useState<string>("");
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setAddress(address));
    dispatch(setSummary(summary));
    dispatch(setSkills(skill));
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card
        className="p-4 shadow-lg border-0"
        style={{ width: "400px", borderRadius: "12px" }}
      >
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" value={name} readOnly />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="tel" value={phoneNumber} readOnly />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter address"
              onChange={(val) => handleAddress(val.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" value={email} readOnly />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Summary</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter summary"
              onChange={(val) => handleSummary(val.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Skills</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter skills"
              onChange={(val) => handleSkill(val.target.value)}
              required
            />
          </Form.Group>

          <Button variant="primary" className="w-100" type="submit">
            Submit
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default FormComponent;
