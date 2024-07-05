import axios from "axios";
import { NextResponse } from "next/server";
const TOTAL_POKEMON = 300;

export const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get("_page") || "1", 10);
  const limit = parseInt(searchParams.get("_limit") || "30", 10);
  const offset = (page - 1) * limit;

  try {
    const allPokemonPromises = Array.from({ length: limit }, (_, index) => {
      const id = offset + index + 1;
      return Promise.all([
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`),
        axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`),
      ]);
    });

    const allPokemonResponses = await Promise.all(allPokemonPromises);

    const allPokemonData = allPokemonResponses.map(
      ([response, speciesResponse]) => {
        const koreanName = speciesResponse.data.names.find(
          (name: any) => name.language.name === "ko"
        );
        return { ...response.data, korean_name: koreanName?.name || null };
      }
    );

    return NextResponse.json({
      pokemons: allPokemonData,
      totalCount: TOTAL_POKEMON,
    });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch data" });
  }
};
