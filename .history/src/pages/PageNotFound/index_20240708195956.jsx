import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Container } from "./styles";

export function PageNotFound() {
  return (
    <>
      <Header />
      <Container>
        <h1>Página Não encontrada</h1>
      </Container>
      <Footer />
    </>
  );
}
