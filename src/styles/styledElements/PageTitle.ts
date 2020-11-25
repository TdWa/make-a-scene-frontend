import styled from "styled-components";

export const PageTitle = styled.h1`
  text-align: center;
  padding: 50px 0;
`;

// type TitleProps = {
//   primary?: boolean;
// };

// const Title = styled.h1<TitleProps>`
//   color: red;
//   background-color: ${(props: TitleProps) =>
//     props.primary ? "yellow" : "pink"};
//   background-color: ${({ primary }) => (primary ? "yellow" : "pink")};
// `;

// <Title primary={true}>Welcome primary</Title>
// <Title>Welcome non-primary</Title>
