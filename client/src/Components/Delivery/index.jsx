import React,{useState, useEffect} from "react";
import { useSelector } from "react-redux";
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
            _id:"12467",
            photos:["https://b.zmtcdn.com/data/dish_photos/12c/526b43e678cf2d8f524544881c3a812c.jpg"],
            name:"Pizza Hut",
            cuisine:["Pizza hut"],
            averageCost:500,
            isPro:true,
            isOff: 70,
            durationOfdelivery: 30,
            restaurantReviewValue: 4.2,
            
        },
        
    ]);
    const reduxState = useSelector((globalStore) => globalStore.restaurant.restaurants);
    useEffect(() => {
        reduxState.restaurants && setRestaurantList(reduxState.restaurants);
    }, [reduxState.restaurants]);
    
    return (
        <>
            <DeliveryCarousel />
            <Brand />
            <h1 className="text-xl mt-4 mb-2 md:mt-8 md:text-3xl md:font-semibold">
                Delivery in Pari Chowk
            </h1>
            <div className="flex justify-between flex-wrap">
                {restaurantList.map((restaurant) =>(
                    <RestaurantCard {...restaurant} key ={restaurant._id} whereIsthisres="Ansal Plaza, Greater Noida" />
                ))}
            </div>
        </>
    );
};

export default Delivery;
