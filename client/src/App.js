import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";

import Container from "react-bootstrap/Container";

import "./App.scss";

const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <h1>Welcome to MERN Ecomm v1</h1>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
