import React from "react";
import { useParams } from "react-router-dom";
import Delivery from "../Components/Delivery";
import Dining from "../Components/Dining";
import NightLife from "../Components/NightLife";
import Nutrition from "../Components/Nutrition";

const Homes = () => {
    const { type } = useParams();
    return <div className="my-5">
              {(type === "delivery" || null) && <Delivery />}
              {type === "dining" && <Dining />}
              {type === "night" && <NightLife />}
              {type === "nutri" && <Nutrition />}
           </div>;
};

export default Homes;
