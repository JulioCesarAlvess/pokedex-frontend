import { PokemonCard } from "@poc/components/organisms/PokemonCard";
import axios from "axios";

export default function Posts({ forms, moves, sprites, types }) {
  return (
    <PokemonCard
      name={forms[0].name}
      image={sprites.other.home.front_default}
      types={types}
      moves={moves}
    />
  );
}

export async function getStaticPaths() {
  const posts = await axios
    .get("http://127.0.0.1:1337/api/posts")
    .then((res) => res.data);
  const ids = posts.data.map((post) => post.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const pokemonData = await axios
    .get(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
    .then((res) => {
      return res.data;
    });
  return {
    props: {
      ...pokemonData,
    },
  };
}
