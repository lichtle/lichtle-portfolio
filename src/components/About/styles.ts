import styled from "styled-components";

import { breakpoints, colors } from "../../styles";

export const AboutContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 64px;
  padding: 80px 32px;

  div {
    a {
      color: ${colors.hover};
    }

    p {
      line-height: 28px;
      margin-bottom: 16px;
      text-align: justify;
    }

    a {
      transition: 0.3s ease-in-out;

      &:hover {
        color: ${colors.footerHover};
      }
    }
  }

  img {
    width: 150px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    gap: 64px;
    padding: 64px 32px 24px;

    div {
      p {
        line-height: 26px;
        text-align: center;
        margin-bottom: 32px;
      }
    }

    img {
      width: 120px;
    }
  }

  @media (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    padding: 64px;

    div {
      p {
        text-align: center;
      }
    }
  }
`;

export const Title = styled.h2`
  font-size: 32px;
  text-align: center;
  padding: 8px;
  border-top: 2px solid ${colors.hover};
  border-bottom: 2px solid ${colors.hover};
`;
