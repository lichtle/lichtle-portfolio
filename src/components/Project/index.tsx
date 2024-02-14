import { useState } from "react";

import {
  Card,
  ProjectDetails,
  ProjectTechnologies as Technologies,
  Modal,
  ModalContent,
  InfosContainer,
  LinkGroup,
} from "./styles";

import { ProjectsType } from "../../utils/projects";

import close from "../../assets/close.png";

type Props = {
  project: ProjectsType;
};

const Project = ({ project }: Props) => {
  type ModalType = {
    isVisible: boolean;
  };

  const [modal, setModal] = useState<ModalType>({
    isVisible: false,
  });

  const closeModal = () => {
    setModal({
      isVisible: false,
    });
  };

  return (
    <>
      <Card>
        <button
          onClick={() => {
            setModal({
              isVisible: true,
            });
          }}
        >
          <img src={project.icon} alt={project.name} />
        </button>
        <Technologies>
          {project.technologies.map((tech) => (
            <img key={tech} src={tech} alt="Tecnologias" />
          ))}
        </Technologies>
      </Card>

      <Modal className={modal.isVisible ? "visivel" : ""}>
        <ModalContent className="container">
          <InfosContainer>
            <img
              className="close-button"
              src={close}
              alt="Ícone de fechar"
              onClick={() => {
                closeModal();
              }}
            />
            <img
              src={project.image}
              className="project-image"
              alt="Imagem do projeto"
            />
            <ProjectDetails>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="details">
                <LinkGroup>
                  <a href={project.repository} target="_blank">
                    Link do repositório
                  </a>
                  <a href={project.repository} target="_blank">
                    Link do projeto (deploy)
                  </a>
                </LinkGroup>
                <p className="technologies">
                  Tecnologias utilizadas:
                  {project.technologies.map((tech) => (
                    <img key={tech} src={tech} alt="Tecnologias" />
                  ))}
                </p>
              </div>
            </ProjectDetails>
          </InfosContainer>
        </ModalContent>
        <div
          onClick={() => {
            closeModal();
          }}
          className="overlay"
        ></div>
      </Modal>
    </>
  );
};

export default Project;
