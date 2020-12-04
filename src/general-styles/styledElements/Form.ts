import styled from "styled-components";

type FormProp = {
  left?: boolean;
};

export const Form = styled.form<FormProp>`
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
    width: 100%;
    resize: vertical;
    height: 70px;
    min-height: 70px;
    padding: 5px;
    font-size: 0.9rem;
  }

  > div {
    margin: ${({ left }) => (left ? "10px auto 10px 5%" : "10px auto")};
  }

  > div.wide {
    width: 90%;
  }
`;
