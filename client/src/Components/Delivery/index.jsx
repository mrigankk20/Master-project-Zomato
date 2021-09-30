import React,{useState} from "react";
import RestaurantCard from "../RestaurantCard";
import Brand from "./Brand";
import DeliveryCarousel from "./DeliveryCarousel";


const Delivery = () => {
    const[restaurantList, setRestaurantList] = useState([
        {
            _id:"123456",
            photos:["https://b.zmtcdn.com/data/pictures/chains/5/55/d16abff4c17aa648587e06af24505863_o2_featured_v2.jpg"],
            name:"Berco's",
            cuisine:["Chinese", "Thai", "Asian", "Beverages"],
            averageCost:100,
            isPro:true,
            isOff: 80,
            durationOfdelivery: 45,
            restaurantReviewValue: 4.1,

        },
        {
            _id:"124567",
            photos:["https://b.zmtcdn.com/data/pictures/chains/1/491/fba01c7a0a33fe1d4b2a48ad364e55ec_o2_featured_v2.jpg"],
            name:"Bikanervala",
            cuisine:["Mithai", "North Indian", "South Indian", "Chinese", "Fast Food", "Street Food",],
            averageCost:200,
            isPro:true,
            isOff: 70,
            durationOfdelivery: 30,
            restaurantReviewValue: 4.2,
            
        },
        {
            _id:"124567",
            photos:["https://b.zmtcdn.com/data/pictures/7/313267/63bf34b2267e6d0777d58be89f0c760b_o2_featured_v2.jpg"],
            name:"For God's Cake",
            cuisine:["Bakery"],
            averageCost:200,
            isPro:true,
            isOff: 70,
            durationOfdelivery: 30,
            restaurantReviewValue: 4.2,
            
        },
    ]);
    return (
        <>
            <DeliveryCarousel />
            <Brand />
            <div className="flex justify-between flex-wrap">
                {restaurantList.map((restaurant) =>(
                    <RestaurantCard {...restaurant} key ={restaurant._id} />
                ))}
            </div>
        </>
    );
};

export default Delivery;
