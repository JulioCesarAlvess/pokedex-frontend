import { PokemonStatusDetail } from "@poc/components/atoms/PokemonStatusDetail";

export const PokemonStatus = ({ status }) => (
  <div className="w-full flex flex-col px-10">
    {status.map((pokemonStatus, index) => (
      <div
        key={`pokemon-status-${index}-${pokemonStatus.stat.name}-${pokemonStatus.base_stat}`}
      >
        <PokemonStatusDetail
          index={index}
          value={pokemonStatus.base_stat}
          name={pokemonStatus.stat.name}
        />
      </div>
    ))}
  </div>
);
