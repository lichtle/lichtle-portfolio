import styled from "styled-components";

import { breakpoints } from "../../styles";

export const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding: 80px 0;

  p {
    text-align: center;
    max-width: 50%;
    line-height: 40px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 64px 32px 24px;

    p {
      max-width: 100%;
      line-height: 26px;
    }
  }
`;

export const List = styled.ul`
  display: flex;
  gap: 64px;
  margin-top: 32px;

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    justify-content: center;
    gap: 32px;
  }

  @media (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;
