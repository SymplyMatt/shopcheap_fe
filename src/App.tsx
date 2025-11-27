import "./scss/index.scss"
import "./scss/index.css"

import Routes from "./routes/Router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "./redux/store";
import { setLoggedInUser } from "./redux/states/app";
import utils from "./utils/utils";

function App() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    // Check token expiry and load user on app initialization
    const user = utils.getUserFromStorage();
    if (user) {
      dispatch(setLoggedInUser(user));
    } else {
      // Clear user from Redux if token expired
      dispatch(setLoggedInUser(null));
    }
  }, [dispatch]);

  return (
      <Routes />
  );
}

export default App;
