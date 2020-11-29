import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { login } from "../store/user/actions";
import { selectToken } from "../store/user/selectors";
import {
  Button,
  Form,
  StyledLink,
  PageTitle,
} from "../general-styles/styledElements";

export default function LoginPage() {
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

    dispatch(login(email, password));

    setEmail("");
    setPassword("");
  }

  return (
    <div>
      <PageTitle>Log in</PageTitle>
      <Form onSubmit={submitForm}>
        <div>
          <label htmlFor="loginEmail">Email</label>
          <input
            id="loginEmail"
            name="loginEmail"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            placeholder="Enter email"
            required
          ></input>
        </div>
        <div>
          <label htmlFor="loginPassword">Password</label>
          <input
            id="loginPassword"
            name="loginPassword"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
            placeholder="Password"
            required
          ></input>
        </div>
        <div>
          <Button type="submit">Login</Button>
        </div>
        <div>
          <StyledLink to="/signup">Or click here to make an account</StyledLink>
        </div>
      </Form>
    </div>
  );
}
