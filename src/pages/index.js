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
            <SaleCard
              image={"league-of-legends.jpg"}
              discount="10%"
              discountPrice="89,90"
              fullPrice="99,90"
            />
            <SaleCard
              image={"dota-2.jpg"}
              discount="40%"
              discountPrice="59,90"
              fullPrice="99,90"
            />
            <SaleCard
              image={"valorant.jpg"}
              discount="30%"
              discountPrice="69,90"
              fullPrice="99,90"
            />
          </div>
        </div>
        <div className={styles.session}>
          <Subtitle>Outros jogos</Subtitle>
          <div className={styles.gamecontainer}>
            <GameCard
              image={"counter-strike.jpg"}
              title="Counter strike: Global offensive"
              category="Ação, estratégia, multijogador."
              fullPrice="90,90"
            />
            <GameCard
              image={"counter-strike.jpg"}
              title="Counter strike: Global offensive"
              category="Ação, estratégia, multijogador."
              fullPrice="90,90"
            />
            <GameCard
              image={"counter-strike.jpg"}
              title="Counter strike: Global offensive"
              category="Ação, estratégia, multijogador."
              fullPrice="90,90"
            />
            <GameCard
              image={"counter-strike.jpg"}
              title="Counter strike: Global offensive"
              category="Ação, estratégia, multijogador."
              fullPrice="90,90"
            />
          </div>
        </div>
      </Container>
    </>
  );
}
