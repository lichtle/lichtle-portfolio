import { useEffect, useState } from "react";

import { ProjectsContainer, List } from "./styles";
import { Title } from "../About/styles";

import Project from "../Project";

import { Projects as ProjectsArray, ProjectsType } from "../../utils/projects";

const Projects = () => {
  const [projects, setProjects] = useState<ProjectsType[]>([]);

  useEffect(() => {
    setProjects(ProjectsArray);
  }, []);

  return (
    <>
      <Title id="projects">Projetos</Title>
      <ProjectsContainer>
        <p>
          Uma listinha dos projetos que mais gostei de fazer! Clique em cada um
          para saber detalhes e ver o deploy.
        </p>
        <List>
          {projects.map((item) => {
            return (
              <li key={item.id}>
                <Project project={item} />
              </li>
            );
          })}
        </List>
      </ProjectsContainer>
    </>
  );
};

export default Projects;
