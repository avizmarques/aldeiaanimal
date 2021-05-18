import { AppProps } from "next/app";
import "tailwindcss/tailwind.css";

import Layout from "../components/layout";

export const url = "https://aldeia-animal-cms.herokuapp.com";
// export const url = "https://localhost:1337";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
