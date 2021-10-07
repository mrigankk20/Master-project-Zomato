import {Route, Redirect} from "react-router-dom";
import Home from "./HOC/Home.Hoc";
import RestaurantLayoutHOC from "./HOC/Restaurant.HOC";
import Homes from "./Page/Home";
import Temp from "./Components/temp";
import Overview from "./Page/Restaurant/Overview";
import OrderOnline from "./Page/Restaurant/OrderOnline";
function App() {
  return (
    <>
      <Route path="/" exact>
        <Redirect to="/delivery" />
      </Route>
      <Route path="/restaurant/:id" exact>
        <Redirect to="/restaurant/:id/overview" />
      </Route>
      <Home path="/:type" exact component={Homes} />
      <RestaurantLayoutHOC path="/restaurant/:id/overview" exact component={Overview} />
      <RestaurantLayoutHOC path="/restaurant/:id/order-online" exact component={OrderOnline} />
      <RestaurantLayoutHOC path="/restaurant/:id/menu" exact component={Temp} />
      <RestaurantLayoutHOC path="/restaurant/:id/reviews" exact component={Temp} />
      <RestaurantLayoutHOC path="/restaurant/:id/photos" exact component={Temp} />
    </>
  );
};

export default App;
