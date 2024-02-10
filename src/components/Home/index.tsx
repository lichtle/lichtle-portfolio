import { Intro, Technologies, Profile } from "./styles";
import Section from "../Section";

const Home = () => (
  <Section>
    <>
      <Intro>
        <span>Olá! Meu nome é</span>
        <h1>Leticia Fernandes</h1>
        <span>Desenvolvedora Front-end apaixonada por gatinhos</span>
        <Technologies>
          <img src="https://placehold.co/25" alt="" />
          <img src="https://placehold.co/25" alt="" />
          <img src="https://placehold.co/25" alt="" />
          <img src="https://placehold.co/25" alt="" />
          <img src="https://placehold.co/25" alt="" />
          <img src="https://placehold.co/25" alt="" />
        </Technologies>
      </Intro>
      <Profile>
        <img src="https://placehold.co/300" alt="Foto de perfil" />
      </Profile>
    </>
  </Section>
);

export default Home;
