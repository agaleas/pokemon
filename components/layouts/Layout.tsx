import { useRouter } from "next/router";
import Head from "next/head";
import { Navbar } from "../ui";

const origin = typeof window === "undefined" ? "" : window.location.origin;

export const Layout = ({
  children,
  title = "PokemonApp",
}: {
  children: React.ReactNode;
  title?: string;
}) => {
  console.log(origin);
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="author" content="Allan Galeas" />
        <meta
          name="description"
          content={`Información sobre el Pokemon ${title}`}
        />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />
        <meta property="og:title" content={`Información sobre ${title}`} />
        <meta
          property="og:description"
          content={`Esta es la página sobre ${title}`}
        />
        <meta
          property="og:image"
          content={`${origin}/_next/image?url=%2Fimg%2Fcsharp.jpg&w=384&q=75`}
        />
      </Head>

      <Navbar />

      <main
        style={{
          padding: "0px 20px",
        }}
      >
        {children}
      </main>
    </>
  );
};
