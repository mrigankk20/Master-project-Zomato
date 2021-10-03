import { findByDisplayValue } from "@testing-library/dom";
import React, { useState, useEffect } from "react";
// components
import RestaurantNavbar from "../Components/Navbar/restaurantNavbar";
import ImageGrid from "../Components/restaurant/ImageGrid";
import { TiStarFullOutline } from "react-icons/ti";
const RestaurantLayout = () => {


   return (
      <>
         {" "}
         <RestaurantNavbar />
         <div className="container mx-auto px-4 lg:px-30 py-5">
            <ImageGrid images={[
               "https://b.zmtcdn.com/data/pictures/6/246/ba50a5176f9b3abf84a4b734543474a2.jpg",
               "https://b.zmtcdn.com/data/pictures/9/18391129/c4df7b5df77846e9441540da9cbd9fd7_o2_featured_v2.jpg",
               "https://b.zmtcdn.com/data/pictures/5/19564455/2334bd0094d0eb1fb7541d7090935c6c_o2_featured_v2.jpg",
               "https://b.zmtcdn.com/data/pictures/5/19564455/2334bd0094d0eb1fb7541d7090935c6c_o2_featured_v2.jpg",
               "https://b.zmtcdn.com/data/pictures/5/19564455/2334bd0094d0eb1fb7541d7090935c6c_o2_featured_v2.jpg"
            ]} />
            <div className="my-4">
               <div className="flex flex-col flex-col-reverse md:flex-row md:items-center justify-between gap-3">
                  <h1 className="py-5 text-xl md:text-3xl font-semibold md:font-bold">Pizza Hut</h1>
                  <div className="flex items-center gap-6 text:xs md:text-base">
                     <div className="flex items-center gap-2">
                        <span className="flex rounded items-center gap-1 text-white font-medium bg-green-600 p-1">
                           3.8 <TiStarFullOutline />
                        </span>
                        <span>
                           <strong>2</strong>
                           <p className="border-dashed border-b">Dining Reviews</p>
                        </span>
                     </div>

                     <div className="flex items-center gap-2">
                        <span className="flex rounded items-center gap-1 text-white font-medium bg-green-600 p-1">
                           3.8 <TiStarFullOutline />
                        </span>
                        <span>
                           <strong>2</strong>
                           <p className="border-dashed border-b">Delivery Reviews</p>
                        </span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default RestaurantLayout;