import axios from "axios";

const actionWeather = {
  START_WEATHER_FETCH: "START_WEATHER_FETCH",
  WEATHER_FETCHED: "WEATHER_FETCHED",
};

const startWeatherFetch = () => (dispatch) => {
  dispatch({ type: actionWeather.START_WEATHER_FETCH });
};

const getWeatherByCoords = (coords) => async (dispatch) => {
  startWeatherFetch();
  const res = await axios
    .get(`/api/darksky/${coords[0]}/${coords[1]}`)
    .then(({ data }) => {
      dispatch({
        type: actionWeather.WEATHER_FETCHED,
        payload: data,
      });
      return data;
    })
    .catch((error) =>
      console.log("ERROR in getWeatherByCoords: ", error.message)
    );
  if (res) {
    return res;
  }
};

export { startWeatherFetch, getWeatherByCoords };
