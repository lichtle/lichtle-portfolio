import { Container } from "./styles";

type Props = {
  children: JSX.Element;
};

const Section = ({ children }: Props) => <Container>{children}</Container>;

export default Section;
