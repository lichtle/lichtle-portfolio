import { ContactContainer, ContactIcon } from "./styles";
import { Title } from "../About/styles";

const Contact = () => (
  <>
    <Title id="contact">Contato</Title>
    <ContactContainer>
      <ContactIcon>
        <i className="bi bi-linkedin" />
        <span>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/leticianegreiros/"
            target="_blank"
          >
            /leticianegreiros
          </a>
        </span>
      </ContactIcon>
      <ContactIcon>
        <i className="bi bi-github" />
        <span>
          GitHub:{" "}
          <a href="https://github.com/lichtle" target="_blank">
            /lichtle
          </a>
        </span>
      </ContactIcon>
      <ContactIcon>
        <i className="bi bi-envelope" />
        E-mail:
        <a href="mailto:leticia.negreiros@outlook.com">
          leticia.negreiros@outlook.com
        </a>
      </ContactIcon>
      <ContactIcon>
        <i className="bi bi-telephone" />
        <span>
          Telefone: <a href="tel:35987044117">(35)98704-4117</a>
        </span>
      </ContactIcon>
      <ContactIcon>
        <i className="bi bi-instagram" />
        <span>
          Instagram:{" "}
          <a href="https://www.instagram.com/frontendkitty/" target="_blank">
            @frontendkitty
          </a>
        </span>
      </ContactIcon>
    </ContactContainer>
  </>
);

export default Contact;
