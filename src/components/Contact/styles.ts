import styled from "styled-components";

import { breakpoints, colors } from "../../styles";

export const ContactContainer = styled.div`
  padding: 80px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  font-size: 18px;

  @media (max-width: ${breakpoints.mobile}) {
    padding: 32px;
    font-size: 14px;
    gap: 48px;
  }
`;

export const ContactIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;

  a {
    color: ${colors.hover};
    transition: 0.3s ease-in-out;

    &:hover {
      color: ${colors.footerHover};
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    justify-content: center;
    text-align: center;
  }
`;
