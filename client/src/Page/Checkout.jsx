import React from 'react';
import FoodItem from "../Components/Cart/FoodItem";
import AddressList from '../Components/Checkout/AddressList';

const Checkout = () => {
const address =[
    {
        name: "Home",
        address:"India",
    },
    {
        name: "gym",
        address:"India",
    },
    {
        name: "offlice",
        address:"India",
    },
]
    return (
        <div className="my-3 flex flex-col gap-3 items-center">
            <h1 className="text-xl text-center md:text-2xl font-bold">Checkout</h1>
            <div className="w-full md:w-3/5 rounded-lg py-3 shadow-lg bg-white flex flex-col items-center">
                <h3 className="text-lg font-semibold">Summary</h3>
                <div className="flex w-full flex-col gap-2 items-center">
                    <h5 className="text-base tracking-wider">ORDER FROM</h5>
                    <div className="flex w-full flex-col items-center text-gray-400">
                        <h4>Domino's Pizza</h4>
                        <small>Ground Floor, Pari Chowk, greater Noida</small>
                    </div>
                    <div className="my-4 px-4 flex flex-col gap-2 w-full md:w-3/5">
                        <FoodItem name="Pizza" quantity={7} price={800} />
                        <FoodItem name="Pizza" quantity={7} price={800} />
                        <FoodItem name="Pizza" quantity={7} price={800} />
                    </div>
                    <div className="my-4 flex flex-col gap-2 w-full md:w-3/5">
                    <AddressList address={address}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
