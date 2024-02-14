import { HomeContainer, Intro, Technologies, Profile } from "./styles";

import profile from "../../assets/profile.jpeg";
import paws from "../../assets/paws.png";

const Home = () => (
  <HomeContainer>
    <Intro>
      <span>Olá! Meu nome é</span>
      <h1>Leticia Fernandes</h1>
      <span>Desenvolvedora Front-end apaixonada por gatinhos</span>
      <img src={paws} className="divider" />
      <Technologies>
        <p>Domínio:</p>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/less/less-plain-wordmark.svg" />
      </Technologies>
      <Technologies>
        <p>Intermediário:</p>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gulp/gulp-plain.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/grunt/grunt-original.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cypressio/cypressio-original.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original.svg" />
      </Technologies>
      <Technologies>
        <p>Básico:</p>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ruby/ruby-original.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rubymine/rubymine-original.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" />
      </Technologies>
    </Intro>
    <Profile>
      <img src={profile} alt="Foto de perfil" />
    </Profile>
  </HomeContainer>
);

export default Home;
