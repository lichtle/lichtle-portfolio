import styled from "styled-components";

export const Intro = styled.div`
  background-color: red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;

  h1 {
    font-size: 40px;
  }

  span {
    font-size: 18px;
  }
`;

export const Technologies = styled.div`
  background-color: yellow;
  img {
    margin-right: 16px;
  }
`;

export const Profile = styled.div`
  background-color: blue;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    border-radius: 50%;
  }
`;
