export const fetchPokemonData = async (id: string) => {
  const apiUrl = "http://localhost:3000";
  const response = await fetch(`${apiUrl}/api/pokemon/${id}`);

  return response.json();
};
