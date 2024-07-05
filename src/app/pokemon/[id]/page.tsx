import { fetchPokemonData } from "@/apis/pokemon";
import { typeColors } from "@/constants/typeColors";
import { Pokemon } from "@/types";
import classNames from "classnames";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "포켓몬 디테일 페이지",
  description: "포켓몬의 상세한 정보 페이지입니다",
};

const PokemonDetailPage = async ({ params }: { params: { id: string } }) => {
  const pokemon: Pokemon = await fetchPokemonData(params.id);

  console.log(pokemon);
  return (
    <div className="flex justify-center ">
      <div className=" pt-10 flex justify-center">
        <div
          key={pokemon.id}
          className="p-4 border rounded-lg flex flex-col items-center"
        >
          <h1>No. {pokemon.id.toString().padStart(3, "0")}</h1>
          <Image
            src={pokemon.sprites.front_default}
            alt={pokemon.korean_name}
            width={96}
            height={96}
          />
          <h1 className="font-bold text-2xl">{pokemon.korean_name}</h1>
          <p>도감번호: {pokemon.id}</p>
          <div className="text-center pt-2">
            <p>키 {pokemon.height / 10} m</p>
            <p>무게 {pokemon.weight / 10} kg</p>
          </div>

          {pokemon.cries && pokemon.cries.latest && (
            <audio controls className="mt-4">
              <source src={pokemon.cries.latest} type="audio/ogg" />
              Your browser does not support the audio element.
            </audio>
          )}

          <div className="flex">
            <h1 className="p-4 font-bold">타입:</h1>
            {pokemon.types.map((type) => {
              const typeName = type.type.korean_name;
              const colors = typeColors[typeName] || typeColors["기본"];

              console.log(`Type: ${typeName}, Colors:`, colors);

              return (
                <div
                  key={type.type.name}
                  className={classNames(
                    "border-2 p-2 m-2 rounded text-center",
                    colors.bg,
                    colors.text
                  )}
                >
                  {typeName}
                </div>
              );
            })}
            <h1 className="p-4 font-bold">어빌리티:</h1>

            {pokemon.abilities.map((ability) => (
              <div
                key={ability.ability.name}
                className="border-2 border-white-300 bg-gray-300 p-2 m-2 rounded text-center"
              >
                {ability.ability.korean_name}
              </div>
            ))}
          </div>
          <h2 className=" font-bold text-center ">
            <p>기술 :</p>
          </h2>
          <div className="text-center grid grid-cols-5 gap-2">
            {pokemon.moves.map((move) => (
              <div
                key={move.move.name}
                className="border-2 border-grey-500  p-2 m-2 rounded text-center "
              >
                {move.move.korean_name}
              </div>
            ))}
          </div>
          <Link
            href="/"
            className="text-center border-2 border-purple-400  bg-cyan-800 hover:bg-sky-400 text-white p-2 m-2 rounded "
          >
            뒤로가기
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetailPage;

{
  /* <h1 className="p-4 font-bold">스탯:</h1>

{pokemon.stats.map((stat) => (
  <div
    key={stat.stat.name}
    className="border-2 border-white-300 bg-black-500 p-2 m-2 rounded text-center"
  >
    {stat.stat.korean_name}
  </div>
))} */
}

{
  /* <h1 className="p-4 font-bold">타입:</h1>
{pokemon.types.map((type) => (
  <div
    key={type.type.name}
    className="border-2 border-white-300 bg-sky-500 p-2 m-2 rounded text-center"
  >
    {type.type.korean_name}
  </div>
))} */
}
