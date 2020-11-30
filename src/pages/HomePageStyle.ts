import styled from "styled-components";

export const HomePageStyle = styled.div`
  background-color: yellow;

  > div {
    margin-bottom: 50px;
  }

  .homeNav {
    display: flex;
    justify-content: space-evenly;

    > div {
      height: 100px;
      width: 40%;
      min-width: 250px;
      background-color: pink;
    }
  }
`;

// > div {
//   margin: 20px 10px;
// }

// p {
//   margin-left: 10px;
// }

// input,
// select {
//   width: 200px;
//   padding: 3px;
// }

// .actorCreaterContainer {
//   display: flex;
// }

// .actorCreater {
//   margin-right: 20px;

//   p {
//     margin: 15px 0 3px 0;
//   }
// }

// button {
//   align-self: flex-end;
// }
