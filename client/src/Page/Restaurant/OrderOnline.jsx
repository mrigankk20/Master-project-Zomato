import React from "react";
import FloatMenuBtn from "../../Components/restaurant/Order-Online/FloatMenuBtn";
import MenuListContainer from "../../Components/restaurant/Order-Online/MenuListContainer";
import {AiOutlineCompass} from "react-icons/ai";
import {BiTimer} from "react-icons/bi";
import FoodItem from "../../Components/restaurant/Order-Online/FoodItem";


const OrderOnline = () => {
    return (
        <>
         <div className="w-full flex">
             <aside className="hidden md:flex flex-col gap-3 border-r overflow-y-scroll border-gray-200 h-screen w-1/4">
                 <MenuListContainer/>
                 <MenuListContainer/>
             </aside>
             <div className="w-full md:w-3/4">
                 <h2 className="text-xl font-semibold">Order Online</h2>
                 <h4 className="flex items-center gap-2 font-light text-gray-500">
                     <AiOutlineCompass/> Live Track Your Order | <BiTimer/> 45 min
                 </h4>
                 <section>
                     <FoodItem image="https://b.zmtcdn.com/data/dish_photos/fbf/74eddddcab3331e9bc7b3b00969bbfbf.jpg" title="Zika Purani Dill Ka" price="1000" rating={3} description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi asperiores doloribus consectetur itaque molestias repellat earum, fugit iure et, libero esse doloremque? Voluptatibus accusantium necessitatibus autem aliquam possimus quibusdam quos."/>
                 </section>
             </div>
         </div>   
         <FloatMenuBtn/>
        </>
    );
};

export default OrderOnline;
