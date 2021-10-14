import React from "react";
import { Link, useParams } from "react-router-dom";
import { IoMdArrowDropright } from "react-icons/io";
import Slider from "react-slick";
import ReactStars from "react-rating-stars-component";
import MenuCollection from "../../Components/restaurant/MenuCollection";
import MenuSimilarRestaurantcard from "../../Components/restaurant/MenuSimilarRestaurantcard";
import { NextArrow, PrevArrow } from "../../Components/carousalArrow";
import ReviewCard from "../../Components/restaurant/Reviews/reviewCard";
import Mapview from "../../Components/restaurant/Mapview";

const Overview = () => {
    const { id } = useParams();
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 4,
        initialSlide: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <>
            <div className="flex flex-col md:flex-row relative">
                <div className="w-full md:w-8/12">
                    <h2 className="font-semibold text-lg md:text-xl my-4">
                        About this place
                    </h2>
                    <div className="flex justify-between items-center">
                        <h4 className="text-lg font-medium">Menu</h4>
                        <Link to={`/restaurant/${id}/menu`}>
                            <span className="flex items-center gap-1 text-zomato-400">
                                See all menu<IoMdArrowDropright />
                            </span>
                        </Link>
                    </div>
                    <div className="flex flex-wrap gap-3 my-4">
                        <MenuCollection menuTitle="Menu" pages="3" image={["https://b.zmtcdn.com/data/menus/067/18619067/010acbf212e3547595eae6f2635a1a66.jpg","https://b.zmtcdn.com/data/menus/246/246/9f31c649f83f2df2e45e17475855f3b9.jpg"]} />
                    </div>

                    <h4 className="text-lg font-medium my-4">Cuisines</h4>
                    <div className="flex flex-wrap gap-2">
                        <span className="border border-gray-600 text-blue-900 px-2 py-1 rounded-full">
                            Street Food
                        </span>
                        <span className="border border-gray-600 text-blue-600 px-2 py-1 rounded-full">
                            Street Food
                        </span>
                        <span className="border border-gray-600 text-blue-600 px-2 py-1 rounded-full">
                            Street Food
                        </span>
                    </div>
                    <div className="my-4">
                        <h4 className="text-lg font-medium">Average Cost</h4>
                        <h6>₹100 for one order (approx.)</h6>
                        <small className="text-gray-500">
                            Exclusive of applicable taxes and charges, if any
                        </small>
                    </div>
                    <div className="my-4">
                        <h4 className="text-lg font-medium">Similar Restaurants</h4>
                        <div>
                            <Slider {...settings}>
                                <MenuSimilarRestaurantcard
                                    image="https://b.zmtcdn.com/data/pictures/chains/3/143/c9996dd70c88230268cb00d20a92b7cf_o2_featured_v2.jpg"
                                    title="Domino's"
                                />
                                <MenuSimilarRestaurantcard
                                    image="https://b.zmtcdn.com/data/pictures/2/1122/827d47fff8401d05715c9cb3e7f8867d_o2_featured_v2.jpg"
                                    title="The Good Food Cafe"
                                />
                                <MenuSimilarRestaurantcard
                                    image="https://b.zmtcdn.com/data/pictures/chains/1/931/9410759d611db9c62c3acc23c1f27e06_o2_featured_v2.jpg"
                                    title="KFC"
                                />
                                <MenuSimilarRestaurantcard
                                    image="https://b.zmtcdn.com/data/pictures/chains/8/310078/9f2f843523d0e8b9ecd9ee9ee32c1c46_o2_featured_v2.jpg"
                                    title="Burger King"
                                />
                                <MenuSimilarRestaurantcard
                                    image="https://b.zmtcdn.com/data/pictures/chains/6/18384116/775511645710570785c421c2119bbf01_o2_featured_v2.jpg"
                                    title="Theobroma"
                                />
                                <MenuSimilarRestaurantcard
                                    image="https://b.zmtcdn.com/data/pictures/chains/7/18619067/5052a28d4cc694258ae6611da4fbbb70_o2_featured_v2.jpg"
                                    title="La Pino'z Pizza"
                                />
                            </Slider>
                        </div>
                    </div>

                    <div className="my-4">
                        <h4 className="text-lg font-medium">
                            Rate your delivery experience
                        </h4>
                        <ReactStars
                            count={5}
                            onChange={6}
                            size={24}
                            activeColor="#ffd700"
                        />
                    </div>
                    <div className="my-4 w-full md:hidden flex flex-col gap-4">
                    <Mapview title="Pizza Hut" phno="+914442465446" mapLocation={[28.466069600022877, 77.50757016322306]} address="Ground Floor, Ansal Plaza, Greater Noida, Uttar Pradesh 201310"/>
                    </div>
                    <div className="my-4 flex flex-col gap-4">
                        <ReviewCard />
                        <ReviewCard />
                        <ReviewCard />
                    </div>
                </div>
                <aside
                    style={{ height: "fit-content" }}
                    className="hidden md:flex md:w-4/12 sticky rounded-xl top-2 bg-white p-3 shadow-md flex flex-col gap-4"
                >
                    <Mapview title="Pizza Hut" phno="+914442465446" mapLocation={[28.466069600022877, 77.50757016322306]} address="Ground Floor, Ansal Plaza, Greater Noida, Uttar Pradesh 201310"/>  
                </aside>
            </div>
        </>
    );
};

export default Overview;