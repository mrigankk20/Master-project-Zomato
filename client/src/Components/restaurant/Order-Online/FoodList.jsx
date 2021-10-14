import React from 'react';
import FoodItem from './FoodItem';


const FoodList = (props) => {
    return (
        <>
            <div>
                <h2 className="bg-white w-full top-0 z-10 px-3 py-2 sticky text-xl font-semibold">{props.title}</h2>
                <div className="flex flex-col gap-3">
                    {props.items.map((item) => (
                        <FoodItem {...item} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default FoodList;
