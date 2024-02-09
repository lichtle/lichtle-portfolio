import styled from "styled-components";

import { colors } from "../../styles";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32px 0;
`;

export const Navbar = styled.ul`
  display: flex;
  gap: 32px;
`;

export const Button = styled.button`
  background-color: ${colors.button};
  color: ${colors.text};
  padding: 8px 22px;
  border-radius: 20px;
  border: none;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: ${colors.hover};
    box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
      rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
  }
`;
