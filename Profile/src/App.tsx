import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Container } from "./components/HTMLElement/Container/style";
import { Slider } from "./components/Slider";

import { Main } from "./pages";

function App() {
  return (
    <>
      <Header />
      <Slider />
      <Container>
        <Main />
      </Container>
      <Footer />
    </>
  );
}

export default App;
