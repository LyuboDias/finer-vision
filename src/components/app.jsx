import React, { Component, useEffect } from "react";
import { Accordion, Card } from "react-bootstrap";
import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import "./app.scss";

const App = () => {
  return (
    <div className="outer-wrap">
      <div className="inner-wrap">
        <Accordion defaultActiveKey="0">
          <Card className="card">
            <Accordion.Toggle as={Card.Header} eventKey="0" className="button">
              <h2>Step 1: Your details</h2>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body className="card-body">
                <form>
                  <div className="d-flex first-wrap">
                    {" "}
                    <div className="input-wrap">
                      <label>First Name</label>
                      <input
                        type="text"
                        name="first-name"
                        className="form-control"
                      />{" "}
                    </div>
                    <div className="input-wrap">
                      <label>Surname</label>
                      <input
                        type="text"
                        name="surname"
                        className="form-control"
                      />{" "}
                    </div>
                    <div className="input-wrap">
                      <label>Email Address:</label>
                      <input
                        type="text"
                        name="email"
                        className="form-control"
                      />{" "}
                    </div>{" "}
                  </div>
                </form>
                <div className="next-div flex-row-reverse align-items-end">
                  <input
                    type="submit"
                    id="submit1"
                    className="next-btn"
                    value="Next >"
                  />
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1" className="button">
              <h2>Step 2: More comments</h2>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body className="card-body">
                <form>
                  <div className="d-flex first-wrap">
                    {" "}
                    <div className="input-wrap">
                      <label>Telephone number</label>
                      <input
                        type="text"
                        name="number"
                        className="form-control"
                      />
                    </div>
                    <div className="input-wrap">
                      <label>Gender</label>
                      <select>
                        <option value="" disabled selected>
                          Select gender
                        </option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="input-wrap">
                      <label>Date of birth:</label>
                      <div className="dob">
                        <input
                          type="text"
                          name="dob-day"
                          className="form-control"
                        />
                        <input
                          type="text"
                          name="dob-month"
                          className="form-control"
                        />
                        <input
                          type="text"
                          name="dob-year"
                          className="form-control"
                        />
                      </div>
                    </div>{" "}
                  </div>
                </form>
                <div className="next-div flex-row-reverse align-items-end">
                  <input
                    type="submit"
                    id="submit2"
                    className="next-btn"
                    value="Next >"
                  />
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="2" className="button">
              <h2>Step 3: Final comments</h2>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="2">
              <Card.Body className="card-body">
                <div className="form-group">
                  <label htmlFor="text">Comments</label>
                  <textarea className="form-control textarea"></textarea>
                </div>
                <div className="next-div flex-row-reverse align-items-end">
                  <input
                    type="submit"
                    id="submit3"
                    className="next-btn"
                    value="Next >"
                  />
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    </div>
  );
};

export default App;
