import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { signUp } from "../../store/user/actions";
// import { selectToken } from "../../store/user/selectors";
// import { Link } from "react-router-dom";

import { Button, Form, StyledLink, PageTitle } from "../styles/styledElements";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const dispatch = useDispatch();
  // const token = useSelector(selectToken);

  function submitForm(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log("hey hey test");
    // dispatch(signUp(name, email, password));
    setEmail("");
    setPassword("");
    setName("");
  }

  return (
    <div>
      <PageTitle>Make an account</PageTitle>
      <Form onSubmit={submitForm}>
        <div className="formRow">
          <label htmlFor="signupName">Name</label>
          <input
            id="signupName"
            name="signupName"
            value={name}
            onChange={(event) => setName(event.target.value)}
            type="text"
            placeholder="Enter name"
            required
          ></input>
        </div>
        <div className="formRow">
          <label htmlFor="signupEmail">Email</label>
          <input
            id="signupEmail"
            name="signupEmail"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            placeholder="Enter email"
            required
          ></input>
        </div>
        <div className="formRow">
          <label htmlFor="signupPassword">Password</label>
          <input
            id="signupPassword"
            name="signupPassword"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
            placeholder="Password"
            required
          ></input>
        </div>
        <div className="formRow">
          <Button type="submit">Sign up</Button>
        </div>
        <div className="formRow">
          <StyledLink to="/login">Click here to log in</StyledLink>
        </div>
      </Form>
    </div>
  );
}
