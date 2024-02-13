import styled from "styled-components";

import { colors } from "../../styles";

export const AboutContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 64px;
  padding: 80px 64px;

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
`;

export const Title = styled.h2`
  font-size: 32px;
  text-align: center;
  padding: 8px;
  border-top: 2px solid ${colors.hover};
  border-bottom: 2px solid ${colors.hover};
`;
