"use client";
import { Pokemon } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const PokemonListPage: React.FC = () => {
  const [pokemons, setPokemons] = React.useState<Pokemon[]>([]);

  React.useEffect(() => {
    const fetchInitialData = async () => {
      const response = await fetch("/api/pokemon");
      const data = await response.json();
      setPokemons(data);
    };
    fetchInitialData();
  }, []);

  return (
    <div className="container mx-auto">
      {pokemons.length === 0 ? (
        <div className="flex flex-col justify-center items-center">
          <Image
            src="/images/monsterball.png"
            alt="Loading..."
            width={256}
            height={256}
            className="mb-4 animate-bounce"
          />
          <p className="text-xl font-semibold">불러오는 중..</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols3 md:grid-cols-4 lg:grid-cols-6 gap-4 item-center">
          {pokemons.map((pokemon) => (
            <div
              key={pokemon.id}
              className="pokemon p-4 border rounded-lg flex flex-col items-center"
            >
              <Link href={`/pokemon/${pokemon.id}`}>
                <Image
                  src={pokemon.sprites.front_default}
                  alt={pokemon.korean_name}
                  width={96}
                  height={96}
                />
                <p>{pokemon.korean_name}</p>
                <p>도감번호: {pokemon.id}</p>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PokemonListPage;
