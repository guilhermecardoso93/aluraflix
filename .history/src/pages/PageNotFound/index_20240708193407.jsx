import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { TitleCard } from "../../components/Main/components/styles";
import { Container } from "./styles";

export function PageNotFound() {
  return (
    <>
      <Header />
      <Container>
        <TitleCard>Página Não encontrada</TitleCard>
      </Container>
      <Footer />
    </>
  );
}
