import styled from "styled-components";

type ActorWrapperProps = {
  type: "man" | "woman";
  scenePlayer?: boolean;
};

export const ActorWrapper = styled.div<ActorWrapperProps>`
  width: 200px;
  height: 250px;
  margin: ${({ scenePlayer }) => (scenePlayer ? "100px 0 10px 0" : "10px 0")};
  display: flex;
  flex-direction: column;
  align-items: center;

  .actorName {
    margin-top: 5px;
    max-width: 180px;
    z-index: 98;
  }

  .actorBody {
    position: relative;
    width: 164px;
    width: ${({ type }) => (type === "man" ? "164px" : "131px")};
    position: relative;
    height: 215px;
  }

  /* ///// HEAD ///// */
  .head {
    width: 50px;
    height: 55px;
    border-radius: 50%;
    top: 1px;
    left: 43px;
  }

  .eye1 {
    top: 17px;
    left: 8px;
    transform: rotate(-90deg);
  }
  .eye2 {
    top: 17px;
    left: 30px;
    transform: rotate(-90deg);
  }

  .moustache {
    font-size: 1.4rem;
    transform: rotate(90deg);
    top: 24px;
    left: 23px;
  }

  .mouth {
    transform: rotate(90deg);
    top: 35px;
    left: ${({ type }) => (type === "man" ? "21px" : "20px")};
  }

  /* ///// UPPER BODY ///// */
  .upperBody {
    height: 90px;
    width: 65px;
    border-radius: 40%;
    left: 34px;
    top: 55px;
    animation: breathe 3s infinite;
  }

  @keyframes breathe {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.03);
    }
    100% {
      transform: scale(1);
    }
  }

  .arm1a {
    width: 50px;
    height: 15px;
    transform: rotate(150deg);
    border-bottom-right-radius: 6px;
    left: 4px;
    top: 72px;
  }
  .arm1b {
    width: 50px;
    height: 15px;
    transform: rotate(50deg);
    border-top-left-radius: 3px;
    left: -5px;
    top: 98px;
  }
  .hand1 {
    width: 35px;
    height: 10px;
    border-radius: 50%;
    border-bottom-left-radius: 5px;
    left: 30px;
    top: 120px;
  }

  .arm2a {
    width: 50px;
    height: 15px;
    transform: rotate(50deg);
    left: 70px;
    top: 75px;
  }
  .arm2b {
    width: 50px;
    height: 15px;
    transform: rotate(-50deg);
    left: 93px;
    top: 77px;
  }
  .hand2 {
    width: 35px;
    height: 12px;
    border-radius: 50%;
    border-bottom-right-radius: 5px;
    left: 130px;
    top: 58px;
  }
  .womanArm2a {
    width: 50px;
    height: 15px;
    transform: rotate(30deg);
    border-top-right-radius: 6px;
    left: 78px;
    top: 71px;
  }
  .womanArm2b {
    width: 50px;
    height: 15px;
    transform: rotate(130deg);
    left: 88px;
    top: 98px;
  }
  .womanHand2 {
    width: 35px;
    height: 12px;
    border-radius: 50%;
    border-bottom-right-radius: 5px;
    left: 68px;
    top: 117px;
  }

  /* ///// LEGS ///// */
  .skirt {
    background-color: transparent;
    border-left: 48px solid transparent;
    border-right: 48px solid transparent;
    left: 18px;
    top: 60px;
  }

  .leg1 {
    width: 18px;
    height: 80px;
    top: 130px;
    left: 43px;
  }

  .leg2 {
    width: 18px;
    height: 80px;
    left: 73px;
    top: 130px;
  }

  .foot1 {
    width: 40px;
    height: 15px;
    border-top-left-radius: 50%;
    left: -22px;
    top: 70px;
    /* ${({ type }) => type === "woman" && "animation: tapfoot 1s infinite;"} */
  }

  .foot2 {
    width: 40px;
    height: 15px;
    border-top-right-radius: 50%;
    left: 0px;
    top: 70px;
  }

  /* @keyframes tapfoot {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(8deg);
    }
    100% {
      transform: rotate(0deg);
    }
  } */
`;
