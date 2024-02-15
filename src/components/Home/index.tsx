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
        <div>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
            alt="HTML"
            title="HTML"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
            alt="CSS"
            title="CSS"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
            alt="JavaScript"
            title="JavaScript"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
            alt="TypeScript"
            title="TypeScript"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
            alt="Git"
            title="Git"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
            alt="React"
            title="React"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg"
            alt="Redux"
            title="Redux"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg"
            alt="Bootstrap"
            title="Bootstrap"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg"
            alt="Sass"
            title="Sass"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/less/less-plain-wordmark.svg"
            alt="Less"
            title="Less"
          />
        </div>
      </Technologies>
      <Technologies>
        <p>Intermediário:</p>
        <div>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gulp/gulp-plain.svg"
            alt="Gulp"
            title="Gulp"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/grunt/grunt-original.svg"
            alt="Grunt"
            title="Grunt"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg"
            alt="Jest"
            title="Jest"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cypressio/cypressio-original.svg"
            alt="Cypress"
            title="Cypress"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original.svg"
            alt="jQuery"
            title="jQuery"
          />
        </div>
      </Technologies>
      <Technologies>
        <p>Básico:</p>
        <div>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg"
            alt="Vue.js"
            title="Vue.js"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ruby/ruby-original.svg"
            alt="Ruby"
            title="Ruby"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rubymine/rubymine-original.svg"
            alt="RubyMine"
            title="RubyMine"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"
            alt="MySQL"
            title="MySQL"
          />
        </div>
      </Technologies>
    </Intro>
    <Profile>
      <img src={profile} alt="Foto de perfil" />
    </Profile>
  </HomeContainer>
);

export default Home;
