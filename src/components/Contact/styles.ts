import styled from "styled-components";

import { colors } from "../../styles";

export const ContactContainer = styled.div`
  padding: 80px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  font-size: 18px;
`;

export const ContactIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  a {
    color: ${colors.hover};
    transition: 0.3s ease-in-out;

    &:hover {
      color: ${colors.footerHover};
    }
  }
`;
