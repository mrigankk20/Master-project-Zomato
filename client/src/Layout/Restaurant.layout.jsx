import React, { useState, useEffect } from "react";
import { TiStarOutline } from "react-icons/ti";
import {RiDirectionLine} from "react-icons/ri";
import {RiShareForwardLine, RiBookmarkLine} from "react-icons/ri";


// components
import RestaurantNavbar from "../Components/Navbar/restaurantNavbar";
import ImageGrid from "../Components/restaurant/ImageGrid";
import InfoButtons from "../Components/restaurant/InfoButtons";
import RestaurantInfo from "../Components/restaurant/RestaurantInfo";
import TabContainer from "../Components/restaurant/Tabs";
import CardContainer from "../Components/Cart/CardContainer";
const RestaurantLayout = (props) => {


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
            <RestaurantInfo name="Pizza Hut" restaurantRating="3.5" deliveryRating="4.0" cuisine="North Indian, Chinese, Continental, Italian, Mughlai" address="Ground Floor, Ansal Plaza, Greater Noida" />
            <div className="flex flex-wrap gap-3 my-4">
               <InfoButtons isActive>
                  <TiStarOutline /> Add Review
               </InfoButtons>
               <InfoButtons>
                  <RiDirectionLine /> Direction
               </InfoButtons>
               <InfoButtons>
                  <RiBookmarkLine /> Bookmarks
               </InfoButtons>
               <InfoButtons>
                  <RiShareForwardLine /> Share
               </InfoButtons>
            </div>
            <div className="my-10">
             <TabContainer/>
            </div>
            <div className="relative">{props.children}</div>
            <CardContainer/>
         </div>
      </>
   );
};

export default RestaurantLayout;