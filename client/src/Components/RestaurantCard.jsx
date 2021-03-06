import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getImage } from "../Redux/Reducer/Image/Image.action";
import { AiTwotoneStar } from "react-icons/ai";

const RestaurantCard = (props) => {
    /*const [image, setImage] = useState({
        images: [],
    });
    const dispatch = useDispatch();
    useEffect(() => {
        props.photos &&
        dispatch(getImage(props.photos)).then((data) =>
        setImage(data.payload.image)
        );
        */
    //[input]);
    //},[props.photos]);
    return (
            <Link to={`/restaurant/${props._id}`} className="w-3/12" >
                <div className="bg-white p-4 w-ful mb-5 rounded-2xl transition duration-700 ease-in-out hover:shadow-lg md:w-1/2 lg:w-1/3 ">
                    <div className="w-full h-56 lg:h-64 relative rounded-2xl">
                        <div className="absolute flex items-end justify-between w-full bottom-4">
                            <div className="flex flex-col gap-2 items-start">
                                {props.isPro && (
                                    <span className="bg-zomato-600 text-white px-2 py-1 rounded text-sm">
                                        Pro Extra 10% off
                                    </span>
                                )}
                                {props.isOff && (
                                    <span className="bg-blue-600 text-white px-2 py-1 rounded text-sm">
                                        ₹{`${props.isOff}`} OFF
                                    </span>
                                )}
                            </div>
                            <div>
                                <span className="bg-white bg-opacity-50 p-1 rounded mr-3">
                                    {props.durationOfdelivery} min
                                </span>
                            </div>
                        </div>
                        <img //src={image.images.length && image.images[0].location}
                            src={props.photos.length && props.photos[0]}
                            //src="https://b.zmtcdn.com/data/pictures/7/19355277/425a2665372f7d68dcb8e27be4db425e_o2_featured_v2.jpg"
                            alt="restaurant"
                            className="w-full h-full rounded-2xl"
                        />
                    </div>
                    <div className="my-2 flex flex-col gap-2">
                        <div className="flex items-center justify-between">
                            <h4 className="text-xl font-medium">{props.name}</h4>
                            <span className="bg-green-800 text-sm text-white p-1 flex items-center rounded">
                                {props.restaurantReviewValue}
                                <AiTwotoneStar />
                            </span>
                        </div>
                        <div className="flex items-center justify-between text-gray-500">
                            <p>{props.cuisine.join(", ")}</p>
                            <p>₹ {props.averageCost} for one</p>
                        </div>
                    </div>
                </div>
            </Link>
        
    );
};

export default RestaurantCard;