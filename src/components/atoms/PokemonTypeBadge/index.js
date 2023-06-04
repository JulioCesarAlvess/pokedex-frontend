import { COLOR_TYPES } from "@poc/utils/colorTypes";

export const PokemonTypeBadge = ({ type }) => (
  <div
    className={`${COLOR_TYPES[type]} rounded-3xl px-4 flex items-center justify-center`}
  >
    <p className="text-3xl text-white font-bold capitalize">{type}</p>
  </div>
);
