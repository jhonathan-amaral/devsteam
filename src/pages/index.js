import GameCard from "@/components/cards/gameCard/gameCard";
import SaleCard from "@/components/cards/saleCard/saleCard";
import Container from "@/components/container/container";
import Navbar from "@/components/navbar/navbar";
import Subtitle from "@/components/tipography/subtitle/subititle";
import styles from "@/styles/index.module.css";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>DevSteam: A sua loja online de games</title>
        <meta
          name="description"
          content="DevSteam: A sua loja online de games"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Container>
        <div className={styles.session}>
          <Subtitle>Promoçoes</Subtitle>
          <div className={styles.salecontainer}>
            <SaleCard />
            <SaleCard />
            <SaleCard />
          </div>
        </div>
        <div className={styles.session}>
          <Subtitle>Outros jogos</Subtitle>
          <div className={styles.gamecontainer}>
            <GameCard />
            <GameCard />
            <GameCard />
            <GameCard />
            <GameCard />
          </div>
        </div>
      </Container>
    </>
  );
}
