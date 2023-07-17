import GameCard from "@/components/cards/gameCard/gameCard";
import SaleCard from "@/components/cards/saleCard/saleCard";
import Container from "@/components/container/container";
import Navbar from "@/components/navbar/navbar";
import Subtitle from "@/components/tipography/subtitle/subititle";
import styles from "@/styles/index.module.css";
import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [cart, setCart] = useState([]);
  const handleAddProduct = (info) => {
    setCart([...cart, info]);
  };

  const handleRemoveProduct = (pos) => {
    setCart(cart.filter((obj, posObj) => posObj !== pos));
  };

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
      <Navbar cart={cart} onRemove={handleRemoveProduct} />
      <Container>
        <div className={styles.session}>
          <Subtitle>Promoçoes</Subtitle>
          <div className={styles.salecontainer}>
            <SaleCard
              image={"league-of-legends.jpg"}
              discount="10%"
              discountPrice="89,90"
              fullPrice="99,90"
              onAdd={() =>
                handleAddProduct({
                  name: "league-of-legends",
                  price: 99.9,
                  image: "league-of-legends.jpg",
                })
              }
            />
            <SaleCard
              image={"dota-2.jpg"}
              discount="40%"
              discountPrice="59,90"
              fullPrice="89,90"
              onAdd={() =>
                handleAddProduct({
                  name: "Dota 2",
                  price: 89.9,
                  image: "dota-2.jpg",
                })
              }
            />
            <SaleCard
              image={"valorant.jpg"}
              discount="30%"
              discountPrice="69,90"
              fullPrice="109,90"
              onAdd={() =>
                handleAddProduct({
                  name: "Valorant",
                  price: 109.9,
                  image: "valorant.jpg",
                })
              }
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
              onAdd={() =>
                handleAddProduct({
                  name: "Counte Strike",
                  price: 90.9,
                  image: "counter-strike.jpg",
                })
              }
            />
          </div>
        </div>
      </Container>
    </>
  );
}
