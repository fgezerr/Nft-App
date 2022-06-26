import "./App.css";
import Products from "./Pages/Products";
import Header from "./components/Header";
import { Container } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Header />

      <Container px={[5, 4, 3, 0]} maxW="5xl">
        <Products />
      </Container>
    </>
  );
}

export default App;
