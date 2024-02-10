import { HeaderContainer, Navbar, Button } from "./styles";

const Header = () => (
  <HeaderContainer>
    <button>LIGHT THEME</button>
    <nav>
      <Navbar>
        <li>
          <Button type="button">Home</Button>
        </li>
        <li>
          <Button type="button">Sobre</Button>
        </li>
        <li>
          <Button type="button">Projetos</Button>
        </li>
        <li>
          <Button type="button">Contato</Button>
        </li>
      </Navbar>
    </nav>
  </HeaderContainer>
);

export default Header;
