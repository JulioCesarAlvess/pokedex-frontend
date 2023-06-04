import { PokemonTypeBadge } from "@poc/components/atoms/PokemonTypeBadge";

export const PokemonTypes = ({ types }) => (
  <div className="w-full flex justify-center gap-2 -mt-8">
    {types.map((pokemonType, index) => (
      <PokemonTypeBadge
        type={pokemonType.type.name}
        key={`pokemon-type-${index}-${pokemonType.type.name}`}
      />
    ))}
  </div>
);
