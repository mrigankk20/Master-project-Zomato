import {Route, Redirect} from "react-router-dom";
import Home from "./HOC/Home.Hoc";
import RestaurantLayoutHOC from "./HOC/Restaurant.HOC";
import Homes from "./Page/Home";
import Temp from "./Components/temp";

function App() {
  return (
    <>
      <Route path="/" exact>
        <Redirect to="/delivery" />
      </Route>
      <Home path="/:type" exact component={Homes} />
      <RestaurantLayoutHOC path="/restaurant/:id" exact component={Temp} />
    </>
  );
};

export default App;
