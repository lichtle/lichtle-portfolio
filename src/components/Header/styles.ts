import styled from "styled-components";

import { breakpoints, colors } from "../../styles";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px;

  @media (max-width: ${breakpoints.mobile}) {
    padding: 24px;
  }
`;

export const Navbar = styled.ul`
  display: flex;
  align-items: center;
  gap: 40px;

  @media (max-width: ${breakpoints.mobile}) {
    gap: 16px;
  }
`;

export const Link = styled.a`
  padding: 8px 22px;
  border-bottom: 3px solid ${colors.text};
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    border-bottom: 3px solid ${colors.hover};
    color: ${colors.hover};
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 16px;
    padding: 8px;
    border-bottom: 3px solid ${colors.hover};
  }
`;
