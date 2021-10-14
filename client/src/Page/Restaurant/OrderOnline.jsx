import React from "react";
import FloatMenuBtn from "../../Components/restaurant/Order-Online/FloatMenuBtn";
import MenuListContainer from "../../Components/restaurant/Order-Online/MenuListContainer";
import { AiOutlineCompass } from "react-icons/ai";
import { BiTimer } from "react-icons/bi";
import FoodList from "../../Components/restaurant/Order-Online/FoodList";


const OrderOnline = () => {
    return (
        <>
            <div className="w-full h-screen flex">
                <aside className="hidden md:flex flex-col gap-3 border-r overflow-y-scroll border-gray-200 h-screen w-1/4">
                    <MenuListContainer />
                    <MenuListContainer />
                </aside>
                <div className="w-full px-3 md:w-3/4">
                    <div className="pl-3 mb-4">
                        <h2 className="text-xl font-semibold">Order Online</h2>
                        <h4 className="flex items-center gap-2 font-light text-gray-500">
                            <AiOutlineCompass /> Live Track Your Order | <BiTimer /> 45 min
                        </h4>
                    </div>
                    <section className="flex h-screen overflow-y-scroll flex-col gap-3 md:gap-5">
                       <FoodList title="Recommended" items={[{price:"1000" ,rating:3 ,description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi asperiores doloribus consectetur itaque molestias repellat earum, fugit iure et, libero esse doloremque? Voluptatibus accusantium necessitatibus autem aliquam possimus quibusdam quos.",image:"https://b.zmtcdn.com/data/dish_photos/fbf/74eddddcab3331e9bc7b3b00969bbfbf.jpg"}]} />
                    </section>
                </div>
            </div>
            <FloatMenuBtn />
        </>
    );
};

export default OrderOnline;
