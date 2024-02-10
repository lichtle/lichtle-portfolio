import GlobalStyle from "./styles";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header />
        <Home />
        <About />
      </div>
    </>
  );
}

export default App;
