import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";

import Container from "react-bootstrap/Container";

import "./App.scss";
import HomePage from "./pages/homepage/homepage.component";

const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <HomePage />
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
