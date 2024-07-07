import { Pokemon } from "@/types";

export const fetchPokemonData = async (id: string) => {
  const apiUrl = "http://localhost:3000";
  const response = await fetch(`${apiUrl}/api/pokemon/${id}`);

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data: Pokemon = await response.json();
  return data;
};
