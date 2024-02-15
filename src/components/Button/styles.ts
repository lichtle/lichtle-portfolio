import styled from "styled-components";
import { breakpoints } from "../../styles";

export const ButtonContainer = styled.div`
  position: fixed;
  right: 64px;

  img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    cursor: pointer;
  }

  @media (max-width: ${breakpoints.mobile}) {
    right: 16px;

    img {
      width: 32px;
      height: 32px;
    }
  }

  @media (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}) {
    right: 24px;

    img {
      width: 42px;
      height: 42px;
    }
  }
`;
