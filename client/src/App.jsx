import { Route, Redirect } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import React, { useEffect } from "react";
import Home from "./HOC/Home.Hoc";
import RestaurantLayoutHOC from "./HOC/Restaurant.HOC";
import Homes from "./Page/Home";
import Overview from "./Page/Restaurant/Overview";
import OrderOnline from "./Page/Restaurant/OrderOnline";
import Reviews from "./Page/Restaurant/Reviews";
import Menu from "./Page/Restaurant/Menu";
import Photos from "./Page/Restaurant/Photos";
import CheckoutHOC from "./HOC/Checkout.HOC";
import Checkout from "./Page/Checkout";
import GoogleAuth from "./Page/GoogleAuth";
import HomeLayoutHOC from "./HOC/Home.Hoc";
import RedirectRestaurant from "./Page/Restaurant/Redirect";
import { getMyself } from "./Redux/Reducer/User/user.action";

if (localStorage.zomatoUser) {
  const { token } = JSON.parse(localStorage.zomatoUser);
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.zomatoUser) dispatch(getMyself());
  }, []);
  return (
    <>
      <Route path="/" exact>
        <Redirect to="/delivery" />
      </Route>
      <Route path="/restaurant/:id" exact component={RedirectRestaurant} />
      
      <Route path="/restaurant/:id" exact>
        <Redirect to="/restaurant/:id/overview" />
      </Route>
      <Home path="/:type" exact component={Homes} />
      <HomeLayoutHOC path="/google/:token" exact component={GoogleAuth} />
      <RestaurantLayoutHOC path="/restaurant/:id/overview" exact component={Overview} />
      <RestaurantLayoutHOC path="/restaurant/:id/order-online" exact component={OrderOnline} />
      <RestaurantLayoutHOC path="/restaurant/:id/menu" exact component={Menu} />
      <RestaurantLayoutHOC path="/restaurant/:id/reviews" exact component={Reviews} />
      <RestaurantLayoutHOC path="/restaurant/:id/photos" exact component={Photos} />
      <CheckoutHOC path="/checkout/orders" exact component={Checkout}/>
    </>
  );
};

export default App;
