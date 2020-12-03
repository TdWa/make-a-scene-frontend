import styled from "styled-components";

export const CommentWrapper = styled.div`
  position: relative;
  background-color: white;
  margin: 20px 0;
  padding: 5px;
  border-radius: 8px;

  span {
    color: #666;
  }

  .deleteComment {
    height: 25px;
    background-color: black;
    color: white;
    position: absolute;
    border: none;
  }

  button:hover {
    background-color: #01135c;
    cursor: pointer;
    transform: scale(1.03);
  }

  button:active {
    transform: scale(1);
  }

  button:focus {
    outline: none;
  }

  button:focus-visible {
    border: 2px solid blue;
    box-shadow: none;
  }

  .deleteComment {
    width: 60px;
    top: 0;
    right: 0;
    border-radius: 0 8px 0 8px;
  }
`;
