import Image from "next/image";

export const PokemonCard = ({ name, image, types, moves }) => (
  <div>
    <h1>{name}</h1>
    <Image src={image} width={100} height={100} />
    <h2>type: </h2>
    {types.map((pokemonType) => (
      <p key={pokemonType.type.name}>{pokemonType.type.name}</p>
    ))}
    <h2>moves: </h2>
    {moves.map((pokemonMove) => (
      <p key={pokemonMove.move.name}>{pokemonMove.move.name}</p>
    ))}
  </div>
);
