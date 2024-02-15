import styled from "styled-components";

import { Technologies } from "../Home/styles";
import { breakpoints, colors } from "../../styles";

export const Card = styled.div`
  button {
    border: none;
    background-color: transparent;

    img {
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
  }
`;

export const ProjectTechnologies = styled(Technologies)`
  align-items: center;
  justify-content: center;
`;

// Modal

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;

  &.visivel {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`;

export const ModalContent = styled.div`
  background-color: ${colors.background};
  color: ${colors.text};
  width: 650px;
  padding: 48px 22px 22px;
  position: relative;
  z-index: 1;

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
  }

  @media (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}) {
    width: 90%;
  }
`;

export const InfosContainer = styled.div`
  .close-button {
    width: 24px;
    height: 24px;
    position: absolute;
    top: 12px;
    right: 12px;
    cursor: pointer;
  }

  h3 {
    font-size: 18px;
    font-weight: 900;
  }

  p {
    font-size: 16px;
    max-width: 100%;
    text-align: justify;
    line-height: 22px;
  }

  .project-image {
    width: 100%;
    height: 330px;
    object-fit: cover;
    margin-bottom: 16px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    text-align: center;

    .close-button {
      width: 16px;
      height: 16px;
      top: 16px;
      right: 16px;
    }

    h3 {
      font-size: 14px;
    }

    p {
      font-size: 12px;
      text-align: center;
    }

    .project-image {
      height: 110px;
    }
  }

  @media (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}) {
    .project-image {
      height: 200px;
    }

    p {
      font-size: 14px;
    }
  }
`;

export const ProjectDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;

  .details {
    display: flex;
    flex-direction: column;
    gap: 32px;
    font-weight: 700;

    .technologies {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 16px;

      img {
        width: 18px;
        height: 18px;
      }
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    gap: 16px;

    .details {
      .technologies {
        font-size: 12px;
      }
    }
  }

  @media (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}) {
    gap: 32px;

    .details {
      .technologies {
        font-size: 14px;
      }
    }
  }
`;

export const LinkGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;

  a {
    border-bottom: 3px solid #fff;
    padding-bottom: 8px;
    transition: 0.3s ease-in-out;

    &:hover {
      border-color: ${colors.footerHover};
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    gap: 16px;

    a {
      font-size: 12px;
    }
  }

  @media (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}) {
    a {
      font-size: 14px;
    }
  }
`;
