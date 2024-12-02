import axios from "axios";

const URL =
  "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

const options = {
  params: {
    bl_latitude: "11.847676",
    tr_latitude: "12.838442",
    bl_longitude: "109.095887",
    tr_longitude: "109.149359",
  },
  headers: {
    "x-rapidapi-key": "3ef2a74874msha23dace6369826fp1abf4cjsn7e4e89cdb07f",
    "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
  },
};

export const getPlacesData = async () => {
  try {
    const response = await axios.get(URL, options);
    return response.data;
  } catch (error) {
    console.error("Error fetching places data:", error);
    return [];
  }
};
