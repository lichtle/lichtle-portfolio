import {
  Card,
  ProjectsContainer,
  List,
  ProjectTechnologies as Technologies,
} from "./styles";
import { Title } from "../About/styles";

import { Projects as ProjectsArray } from "../../utils/projects";

const Projects = () => (
  <>
    <Title id="projects">Projetos</Title>
    <ProjectsContainer>
      <p>
        Uma listinha dos projetos que mais gostei de fazer! Clique em cada um
        para saber detalhes e ver o deploy.
      </p>
      <List>
        {ProjectsArray.map((item) => (
          <li key={item.id}>
            <Card>
              <img src={item.image} alt={item.name} />
              <Technologies>
                {item.technologies.map((tech) => (
                  <img key={item.id} src={tech} alt={tech} />
                ))}
              </Technologies>
            </Card>
          </li>
        ))}
      </List>
    </ProjectsContainer>
  </>
);

export default Projects;
