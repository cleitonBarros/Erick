import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Container } from "./components/HTMLElement/Container/style";

import { Main } from "./pages";

function App() {
  return (
    <>
      <Header />
      <Container>
        <Main />
      </Container>
      <Footer />
    </>
  );
}

export default App;
