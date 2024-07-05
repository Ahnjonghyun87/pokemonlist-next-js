"use client";

import { Pokemon } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import Image from "next/image";
import Link from "next/link";

const ITEM_PER_PAGE = 300;

const PokemonListPage = () => {
  const {
    data: pokemons,
    isPending,
    error,
  } = useQuery<Pokemon[], AxiosError, Pokemon[], [string]>({
    queryKey: ["pokemons"],

    queryFn: async () => {
      const response = await fetch("/api/pokemon");
      return response.json();
    },
    staleTime: 5 * 60 * 1000, // 5분
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
    return <div>무언가 잘못되었습니다{error.message}</div>;
  }

  if (!Array.isArray(pokemons)) {
    return (
      <div className="flex flex-col justify-center items-center">
        <p className="text-xl font-semibold">데이터가 올바르지 않습니다.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto">
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
    </div>
  );
};

export default PokemonListPage;

// "use client";

// import { Pokemon } from "@/types";
// import { useQuery } from "@tanstack/react-query";
// import { AxiosError } from "axios";
// import Image from "next/image";
// import Link from "next/link";

// const ITEM_PER_PAGE = 30;

// const PokemonListPage = () => {
//   const [page, setPage] = useState(1);

//   const {
//     data: pokemons,
//     isPending,
//     error,
//   } = useQuery<Pokemon[], AxiosError, Pokemon[], [string]>({
//     queryKey: ["pokemons", page],

//     queryFn: async () => {
//       const response = await fetch("/api/pokemon", {
//         params:{_page:page, _limit:ITEM_PER_PAGE},
//       });
//       return {
//         pokemons:response.json(),
//         totalCount: response.headers["x-total-count"],
//       }
//     },
//     staleTime: 5 * 60 * 1000, // 5분
//   });

//   if (isPending) {
//     return (
//       <div className="flex flex-col justify-center items-center">
//         <Image
//           src="/images/monsterball.png"
//           alt="Loading..."
//           width={256}
//           height={256}
//           className="mb-4 animate-bounce"
//         />
//         <p className="text-xl font-semibold">불러오는 중..</p>
//       </div>
//     );
//   }

//   if (error) {
//     return <div>무언가 잘못되었습니다{error.message}</div>;
//   }

//   if (!Array.isArray(pokemons)) {
//     return (
//       <div className="flex flex-col justify-center items-center">
//         <p className="text-xl font-semibold">데이터가 올바르지 않습니다.</p>
//       </div>
//     );
//   }

//   return (
//     <div className="container mx-auto">
//       <div className="grid grid-cols-2 sm:grid-cols3 md:grid-cols-4 lg:grid-cols-6 gap-4 item-center">
//         {pokemons.map((pokemon) => (
//           <div
//             key={pokemon.id}
//             className="pokemon p-4 border rounded-lg flex flex-col items-center"
//           >
//             <Link href={`/pokemon/${pokemon.id}`}>
//               <Image
//                 src={pokemon.sprites.front_default}
//                 alt={pokemon.korean_name}
//                 width={96}
//                 height={96}
//               />
//               <p>{pokemon.korean_name}</p>
//               <p>도감번호: {pokemon.id}</p>
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PokemonListPage;
