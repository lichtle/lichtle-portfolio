import { AboutContainer, Title } from "./styles";

import kitty from "../../assets/kitty-with-pencil.png";

const About = () => (
  <>
    <Title id="about">Sobre mim</Title>
    <AboutContainer>
      <img src={kitty} alt="Gatinho segurando um lápis" />
      <div>
        <p>
          É um prazer ter você aqui! Me chamo Leticia, tenho 24 anos e moro em
          Santo André - SP. Sou estudante de desenvolvimento front-end,
          metalhead e amante de gatinhos. As coisas que mais gosto de fazer são
          cozinhar, ouvir música, jogar e viajar!
        </p>
        <p>
          Sou formada em Gastronomia pelo Centro Universitário Senac - Campos do
          Jordão (2021), mas estou em transição de carreira para a área da
          programação.
        </p>
        <p>
          Tive a oportunidade de ser trainee back-end em uma empresa americana
          por 3 meses (
          <a href="https://locallabs.com/" target="_blank">
            LocalLabs
          </a>
          ), então também possuo conhecimento básico em Ruby e SQL. Também
          possuo certificado em Excel Básico e habilidades no Canva.
        </p>
      </div>
    </AboutContainer>
  </>
);

export default About;

// Cat icons created by Freepik on Flaticon - https://www.flaticon.com/free-icons/cat
