import styled from "styled-components";

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

export const List = styled.ul`
  display: flex;
  gap: 64px;
  margin-top: 32px;
`;
