import styled from "styled-components";

export const Form = styled.form`
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  font-size: 1.125rem;

  & input {
    width: 200px;
    height: 25px;
    padding: 0 5px;
    font-size: 1rem;
  }

  & label {
    display: inline-block;
    width: 100px;
    height: 25px;
  }

  > div {
    margin: 10px auto;
  }
`;
