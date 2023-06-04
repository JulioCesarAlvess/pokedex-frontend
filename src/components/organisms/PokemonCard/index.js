import { PokemonImage } from "@poc/components/molecules/PokemonImage";
import { PokemonName } from "@poc/components/molecules/PokemonName";
import { PokemonStatus } from "@poc/components/molecules/PokemonStatus";
import { PokemonTypes } from "@poc/components/molecules/PokemonTypes";
import { COLOR_TYPES } from "@poc/utils/colorTypes";

export const PokemonCard = ({ name, image, types, status }) => (
  <div className="w-[50rem] rounded-xl bg-white border border-black pb-4">
    <div className={`h-48 ${COLOR_TYPES[types[0].type.name]} rounded-t-xl p-8`}>
      <PokemonName name={name} />
    </div>
    <div className="-mt-[10rem] flex flex-col gap-8">
      <PokemonImage image={image} />
      <PokemonTypes types={types} />
      <PokemonStatus status={status} />
    </div>
  </div>
);
