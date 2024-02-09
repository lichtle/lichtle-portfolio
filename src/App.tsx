import GlobalStyle from "./styles";
import Header from "./components/Header";

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header />
      </div>
    </>
  );
}

export default App;
