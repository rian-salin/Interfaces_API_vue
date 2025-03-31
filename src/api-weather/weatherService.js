import axios from "axios";

export const fetchWeather = async (city) => {
  if (!city) return "Digite uma cidade.";
  try {
    const response = await axios.get(`https://wttr.in/${city}?format=%C+%t+%l`);
    return response.data;
  } catch {
    return "Erro ao buscar o clima.";
  }
};
