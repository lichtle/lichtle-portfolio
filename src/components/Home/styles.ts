import styled from "styled-components";

import { breakpoints, colors } from "../../styles";

export const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 80px 32px;

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    padding: 32px;
  }

  @media (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    padding: 32px;
  }
`;

export const Intro = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;

  h1 {
    font-size: 40px;
    transition: 0.3s ease-in-out;

    &:hover {
      color: ${colors.hover};
    }
  }

  span {
    font-size: 18px;
  }

  img.divider {
    width: 500px;
    padding: 48px 0;
  }

  @media (max-width: ${breakpoints.mobile}) {
    align-items: center;
    justify-content: space-around;
    text-align: center;

    h1 {
      font-size: 28px;
    }

    span {
      font-size: 16px;
    }

    img.divider {
      width: 100%;
      padding: 32px 0;
    }
  }

  @media (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}) {
    align-items: center;
    text-align: center;
  }
`;

export const Technologies = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 16px;

  div {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;

    img {
      width: 25px;
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    margin-bottom: 32px;

    div {
      justify-content: center;
      align-items: center;
      padding: 0 32px;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  justify-content: flex-end;

  img {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    padding: 8px;
    border: 2px solid ${colors.text};
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 16px 0;

    img {
      width: 200px;
      height: 200px;
    }
  }

  @media (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}) {
    padding: 32px 0;

    img {
      width: 200px;
      height: 200px;
    }
  }
`;
