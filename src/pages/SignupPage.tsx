import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { signUp } from "../store/user/actions";
import { selectToken } from "../store/user/selectors";

import { Button, Form, StyledLink, PageTitle } from "../styles/styledElements";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const history = useHistory();

  useEffect(() => {
    if (token !== null) {
      history.push("/");
    }
  }, [token, history]);

  function submitForm(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    dispatch(signUp(name, email, password));

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
