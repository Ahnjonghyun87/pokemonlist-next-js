"use client";

import { Pokemon } from "@/types";
import { useInfiniteQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

const ITEMS_PER_PAGE = 30;

const PokemonListPage = () => {
  const {
    data: pokemons,
    isPending,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery<Pokemon[], AxiosError, Pokemon[], [string], number>({
    queryKey: ["Pokemons"],
    initialPageParam: 1,
    queryFn: async ({ pageParam }) => {
      const response = await fetch(
        `/api/pokemon?_page=${pageParam}&_limit=${ITEMS_PER_PAGE}`
      );
      const pokemons = await response.json();
      return pokemons;
    },

    // queryFn: async () => {
    //   const response = await fetch(
    //     `/api/pokemon?_page=${page}&_limit=${ITEMS_PER_PAGE}`
    //   );
    //   const result = await response.json();
    //   return { pokemons: result.pokemons, totalCount: result.totalCount };
    // },

    getNextPageParam: (lastPage, allPages, lastPageParam) => {
      const nextPage = lastPageParam + 1;
      return lastPage.length === ITEMS_PER_PAGE ? nextPage : undefined;
    },
    select: ({ pages }) => pages.flat(),
    staleTime: 5 * 60 * 1000, // 5분
  });

  const { ref } = useInView({
    threshold: 1,
    onChange: (inView) => {
      if (inView && hasNextPage && !isFetchingNextPage) {
        fetchNextPage();
      }
    },
  });

  if (isPending) {
    return (
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
    );
  }

  if (error) {
    return <div>무언가 잘못되었습니다: {error.message}</div>;
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 item-center">
      {pokemons.map((pokemon, idx) => {
        const isLastItem = pokemons.length - 1 === idx;
        return (
          <div
            key={pokemon.id}
            className="pokemon p-4 border rounded-lg flex flex-col items-center"
            ref={isLastItem ? ref : null}
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
        );
      })}
    </div>
  );
};

export default PokemonListPage;
