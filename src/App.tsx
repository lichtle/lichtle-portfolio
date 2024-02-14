import GlobalStyle from "./styles";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Button from "./components/Button";

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header />
        <Home />
        <About />
        <Projects />
        <Contact />
        <Button />
      </div>
    </>
  );
}

export default App;
