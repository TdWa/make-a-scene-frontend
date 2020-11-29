import styled from "styled-components";

export const Form = styled.form`
  margin: 20px auto;
  display: flex;
  flex-direction: column;

  & label {
    display: inline-block;
    width: 100px;
    height: 25px;
  }

  & input,
  select {
    width: 200px;
    height: 25px;
    padding: 0 5px;
  }

  & textarea {
    width: 300px;
    resize: vertical;
    height: 70px;
    min-height: 70px;
    padding: 5px;
    font-size: 0.9rem;
  }

  > div {
    margin: 10px auto;
  }
`;

/*
FROM ADDPHRASE FORM
#formContainer {
  background-color: tomato;
  padding: 5px 0;
  color: white;
  font-weight: bold;

  input,
  select {
    min-height: 25px;
  }
}

#textInput {
  height: 70px;
  resize: vertical;
  font-size: 16px;
  margin: 5px 0;
}

#target {
  font-size: 16px;
  margin: 5px 0;
}

.row {
  display: flex;
  flex-direction: column;
  min-width: 400px;
  max-width: 600px;
  width: 60%;
  margin: 20px auto;
}
*/
