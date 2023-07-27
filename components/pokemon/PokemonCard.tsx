import { SmallPokemon } from "@/interfaces";
import { Card, Grid, Row, Text } from "@nextui-org/react";
import { NextPage } from "next";
import { useRouter } from "next/router";

interface Props {
  pokemon: SmallPokemon;
}

export const PokemonCard: NextPage<Props> = ({ pokemon }) => {
  const router = useRouter();
  const { id, img, name, url } = pokemon;

  const onPokemonClick = () => {
    router.push(`/name/${name}`);
  };

  return (
    <Grid xs={6} sm={3} md={2} xl={1} key={id}>
      <Card isHoverable>
        <Card.Body css={{ p: 1 }}>
          <Card.Image src={img} width="100%" height={140} onClick={onPokemonClick} />
        </Card.Body>
        <Card.Footer>
          <Row justify="space-between">
            <Text transform="capitalize">{name}</Text>
            <Text>#{id}</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
};
