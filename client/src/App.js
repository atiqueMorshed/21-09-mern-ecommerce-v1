import { Route, Switch } from "react-router-dom";

import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";

import Container from "react-bootstrap/Container";

import "./App.scss";
import HomePage from "./pages/homepage/homepage.component";
import ProductPage from "./pages/product-page/product-page.component";

const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <Switch>
            <Route path="/product/:id" exact component={ProductPage} />
            <Route path="/" exact component={HomePage} />
          </Switch>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
