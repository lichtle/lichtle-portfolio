import styled from "styled-components";

import { colors } from "../../styles";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px;
`;

export const Navbar = styled.ul`
  display: flex;
  gap: 40px;
`;

export const Link = styled.a`
  background-color: ${colors.background};
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
`;
