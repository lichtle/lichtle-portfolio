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
          Santo André - SP. Sou desenvolvedora front-end,
          metalhead e amante de gatinhos. As coisas que mais gosto de fazer são
          cozinhar, ouvir música, jogar e viajar! Também gosto muito de ajudar
          meus colegas, então criei um{" "}
          <a href="https://www.instagram.com/frontendkitty/" target="_blank">
            perfil no Instagram
          </a>{" "}
          voltado para dicas simples de desenvolvimento front-end. &#x1F638;
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
          possuo certificado em Excel Básico e habilidades no Canva. Fique à
          vontade para me contatar, vamos desenvolver juntos!
        </p>
      </div>
    </AboutContainer>
  </>
);

export default About;

// Cat icons created by Freepik on Flaticon - https://www.flaticon.com/free-icons/cat
