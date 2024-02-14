import { useState, useEffect } from "react";

import { ButtonContainer } from "./styles";

import arrow from "../../assets/arrow.png";

const Button = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 90);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <ButtonContainer
      style={{
        opacity: isVisible ? 1 : 0,
        bottom: isVisible ? "32px" : "-32px",
        transition: "opacity 0.3s, bottom 0.3s",
      }}
      onClick={scrollToTop}
    >
      <img src={arrow} alt="Voltar para o topo" />
    </ButtonContainer>
  );
};

export default Button;
