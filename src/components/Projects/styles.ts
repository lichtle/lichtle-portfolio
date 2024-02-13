import styled from "styled-components";

import { Technologies } from "../Home/styles";

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
`;

export const Card = styled.div`
  > img {
    margin-bottom: 16px;
    width: 200px;
    height: 200px;
    object-fit: cover;
    cursor: pointer;
    transition: 0.3s ease-in-out;
    border-radius: 8px;

    &:hover {
      opacity: 0.7;
    }
  }
`;

export const List = styled.ul`
  display: flex;
  gap: 64px;
  margin-top: 16px;
`;

export const ProjectTechnologies = styled(Technologies)`
  align-items: center;
  justify-content: center;
`;
