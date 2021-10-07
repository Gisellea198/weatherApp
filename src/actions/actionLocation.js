import axios from "axios";
import { mapBoxError } from "./actionError";

const actionLocation = {
  START_LOCATION_FETCH_BY_COORDS: "START_LOCATION_FETCH_BY_COORDS",
  START_LOCATION_FETCH_BY_PLACENAME: "START_LOCATION_FETCH_BY_PLACENAME",
  LOCATION_FETCHED: "LOCATION_FETCHED",
  GEO_DENIED: "GEO_DENIED",
};

const startLocationFetchByCoords = () => (dispatch) => {
  dispatch({ type: actionLocation.START_LOCATION_FETCH_BY_COORDS });
};
const startLocationFetchByPlaceName = () => (dispatch) => {
  dispatch({ type: actionLocation.START_LOCATION_FETCH_BY_PLACENAME });
};

const denyGeo = () => (dispatch) => {
  return dispatch({
    type: actionLocation.GEO_DENIED,
  });
};

const getLocationByCoords = (coords) => async (dispatch) => {
  startLocationFetchByCoords();
  const res = await axios
    .get(`/api/mapbox/${coords[0]}/${coords[1]}`)
    .then(({ data }) => {
      dispatch({
        type: actionLocation.LOCATION_FETCHED,
        payload: data,
      });
      return data;
    })
    .catch((error) => mapBoxError(coords, error.message));

  if (res) {
    return res;
  }
};

const getLocationByPlaceName = (placeName) => async (dispatch) => {
  startLocationFetchByPlaceName();
  const res = await axios
    .get(`/api/mapbox/${placeName}`)
    .then(({ data }) => {
      dispatch({
        type: actionLocation.LOCATION_FETCHED,
        payload: data,
      });
      return data;
    })
    .catch((error) => mapBoxError(placeName, error.message)(dispatch));

  if (res) {
    return res;
  }
};

export {
  getLocationByPlaceName,
  getLocationByCoords,
  denyGeo,
  startLocationFetchByPlaceName,
  startLocationFetchByCoords,
};
