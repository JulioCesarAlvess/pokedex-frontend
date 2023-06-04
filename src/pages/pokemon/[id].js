import { PokemonCard } from "@poc/components/organisms/PokemonCard";
import axios from "axios";

export default function Posts({ forms, stats, sprites, types }) {
  return (
    <div className="w-full p-4 flex justify-center">
      <PokemonCard
        name={forms[0].name}
        image={sprites.other.home.front_default}
        types={types}
        status={stats}
      />
    </div>
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
