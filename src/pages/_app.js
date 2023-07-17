import { Inter } from "next/font/google";

import "@/styles/globals.css";
import { RecoilRoot } from "recoil";
const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <main className={inter.className}>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </main>
  );
}
