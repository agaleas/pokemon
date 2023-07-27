import { Inter } from "next/font/google";
import type { NextPage, GetStaticProps } from "next";
import { Layout } from "@/components/layouts";
import { pokeApi } from "@/api";
import { PokemonListResponse, SmallPokemon } from "@/interfaces";
import { Grid } from "@nextui-org/react";
import { PokemonCard } from "@/components/pokemon";

const inter = Inter({ subsets: ["latin"] });
interface Props {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  return (
    <Layout title="Listado de Pokémons">
      <Grid.Container gap={2} justify="flex-start">
        {pokemons.map((pokemon) => (
          <PokemonCard pokemon={pokemon} key={pokemon.name} />
        ))}
      </Grid.Container>
    </Layout>
  );
};

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.

export const getStaticProps: GetStaticProps = async (ctx) => {
  // const { data } = await  // your fetch function here
  const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=151");
  let pokemons: SmallPokemon[] = data.results.map((poke, i) => ({
    ...poke,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      i + 1
    }.svg`,
  }));

  // const baseUrl =
  //   "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/{id}.svg";
  // let cutMessage: string = "";

  // for (let index = 0; index < pokemons.length; index++) {
  //   cutMessage = pokemons[index].url.slice(
  //     0,
  //     pokemons[index].url.lastIndexOf("/")
  //   );
  //   pokemons[index].id = parseInt(
  //     cutMessage.slice(cutMessage.lastIndexOf("/") + 1)
  //   );
  //   pokemons[index].img = baseUrl.replace(
  //     "{id}",
  //     pokemons[index].id.toString()
  //   );
  // }
  return {
    props: {
      pokemons,
    },
  };
};

export default HomePage;
