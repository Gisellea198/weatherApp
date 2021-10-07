/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import FormControl from "@material-ui/core/FormControl";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import { clearMapBoxError } from "../actions/actionError";
import toast from "./toast";
import { FiSearch } from "react-icons/fi";

import {
  startLocationFetchByPlaceName,
  getLocationByPlaceName,
} from "../actions/actionLocation";
import {
  startWeatherFetch,
  getWeatherByCoords,
} from "../actions/actionWeather";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

const SearchPage = (props) => {
  const [userInput, setUserInput] = useState("");
  const [showSpinner, setShowSpinner] = useState(false);
  const [displayToast, setDisplayToast] = useState(false);
  const [toastMessage] = useState("");
  const classes = useStyles();

  const {
    // Action Creators
    startLocationFetchByPlaceName,
    getLocationByPlaceName,
    startWeatherFetch,
    getWeatherByCoords,
    clearMapBoxError,
    // State
    latitude,
    longitude,
  } = props;

  const submitHandler = async (event) => {
    event.preventDefault();
    setShowSpinner(true);
    startLocationFetchByPlaceName();
    await getLocationByPlaceName(userInput);
    setUserInput("");
  };

  useEffect(() => {
    if (latitude && longitude) {
      startWeatherFetch();
      getWeatherByCoords([latitude, longitude]);
    }
  }, [latitude, longitude]);

  const handleToastClose = () => {
    setDisplayToast(false);
    clearMapBoxError();
  };

  return (
    <Container maxWidth="lg" className={classes.container} >
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={3}
      >

        {showSpinner ? (
          <Grid item>
            <CircularProgress
              color="secondary"
              style={{ height: "100px", width: "100px" }}
              justify="center"
            />
          </Grid>
        ) : (
          <Grid item xs={12} md={8} lg={6}>
            <form onSubmit={submitHandler}>
              <FormControl
                fullWidth
                className={classes.margin}
                variant="outlined"
              >
                <OutlinedInput
                  id="outlined-adornment-amount"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  startAdornment={
                    <InputAdornment position="start">
                      <FiSearch />
                    </InputAdornment>
                  }
                />
              </FormControl>
            </form>
          </Grid>
        )}
        {toast(displayToast, handleToastClose, toastMessage, "warning")}
      </Grid>
    </Container>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    startLocationFetchByPlaceName: bindActionCreators(
      startLocationFetchByPlaceName,
      dispatch
    ),
    getLocationByPlaceName: bindActionCreators(
      getLocationByPlaceName,
      dispatch
    ),
    startWeatherFetch: bindActionCreators(startWeatherFetch, dispatch),
    getWeatherByCoords: bindActionCreators(getWeatherByCoords, dispatch),
    clearMapBoxError: bindActionCreators(clearMapBoxError, dispatch),
  };
};
const mapStateToProps = (location, weather, error) => {
  const { urlSlug, latitude, longitude } = location;
  const { noWeatherData, weatherLoading } = weather;
  return { urlSlug, latitude, longitude, noWeatherData, error, weatherLoading };
};
export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
