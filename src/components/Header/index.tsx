import { HeaderContainer, Navbar, Link } from "./styles";

const Header = () => (
  <HeaderContainer>
    <nav>
      <Navbar>
        <li>
          <Link href="#home">Home</Link>
        </li>
        <li>
          <Link href="#about">Sobre</Link>
        </li>
        <li>
          <Link href="#projects">Projetos</Link>
        </li>
        <li>
          <Link href="#contact">Contato</Link>
        </li>
      </Navbar>
    </nav>
  </HeaderContainer>
);

export default Header;
