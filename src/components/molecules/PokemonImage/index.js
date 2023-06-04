import Image from "next/image";

export const PokemonImage = ({ image }) => (
  <div className="w-full flex justify-center">
    <Image src={image} width={300} height={300} />
  </div>
);
