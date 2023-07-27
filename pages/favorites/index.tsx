import { Layout } from "@/components/layouts";
import { FavoritePokemons } from "@/components/pokemon";
import { NoFavorites } from "@/components/ui";
import { localFavorites } from "@/utils";
import React, { useEffect, useState } from "react";

const FavoritesPage = () => {
  const [favoritesPokemons, seTfavoritesPokemons] = useState<number[]>([]);

  useEffect(() => {
    seTfavoritesPokemons(localFavorites.pokemons());
  }, []);

  return (
    <Layout title="Favorites">
      {favoritesPokemons.length === 0 ? (
        <NoFavorites />
      ) : (
        <FavoritePokemons pokemons={favoritesPokemons} />
      )}
    </Layout>
  );
};

export default FavoritesPage;
