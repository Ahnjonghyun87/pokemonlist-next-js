import { Pokemon } from "@/types";
import { QueryFunctionContext } from "@tanstack/react-query";

export const fetchPokemonData = async ({
  queryKey,
}: QueryFunctionContext<[string, string]>): Promise<Pokemon> => {
  const [_, id] = queryKey;
  const apiUrl = "http://localhost:3000";
  const response = await fetch(`${apiUrl}/api/pokemon/${id}`);

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data: Pokemon = await response.json();
  return data;
};
