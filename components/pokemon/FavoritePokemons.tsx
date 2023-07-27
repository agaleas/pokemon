import { Grid } from "@nextui-org/react";
import { NextPage } from "next";
import { FavoritePokemonCard } from "./";

interface Props {
  pokemons: number[];
}

export const FavoritePokemons: NextPage<Props> = ({ pokemons }) => {
  return (
    <Grid.Container gap={2} direction="row" justify="flex-start">
      {pokemons.map((id) => (
        <FavoritePokemonCard id={id} key={id} />
      ))}
    </Grid.Container>
  );
};
