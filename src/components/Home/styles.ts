import styled from "styled-components";

import { colors } from "../../styles";

export const HomeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 32px;
  padding: 80px 32px;
`;

export const Intro = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;

  h1 {
    font-size: 40px;
    transition: 0.3s ease-in-out;

    &:hover {
      color: ${colors.hover};
    }
  }

  span {
    font-size: 18px;
  }

  img.divider {
    width: 500px;
    padding: 48px 0;
  }
`;

export const Technologies = styled.div`
  display: flex;
  gap: 16px;

  img {
    width: 25px;
  }
`;

export const Profile = styled.div`
  display: flex;
  justify-content: flex-end;

  img {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    padding: 8px;
    border: 2px solid ${colors.text};
  }
`;
