import { useMemo } from "react";

export const PokemonStatusDetail = ({ name, value, index }) => {
  const backgroundColor = useMemo(() => {
    if (index % 2 === 0) return "bg-gray-100";
    return "bg-white";
  }, [index]);
  return (
    <div className={`flex justify-between rounded-3xl p-4 ${backgroundColor}`}>
      <p className="text-3xl">{name}</p>
      <p className="text-3xl">{value}</p>
    </div>
  );
};
