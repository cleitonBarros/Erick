import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Container } from "./components/HTMLElement/Container/style";
import { Slider } from "./components/Slider";

import { Main } from "./pages";
import { AppRoutes } from "./routes/app.routes";

function App() {
  return (
    <>
      <AppRoutes />
      {/* <Header />
      <Slider />
      <Container>
        <Main />
      </Container>
      <Footer /> */}
    </>
  );
}

export default App;
