import React, { useState } from 'react';
import { HiMenu } from "react-icons/hi";
import { IoMdCloseCircleOutline } from "react-icons/io";
import MenuListContainer from "./MenuListContainer";

const FloatMenuBtn = () => {
    const [isClicked, setIsCliscked] = useState(false);
    const toggleMenu = () => setIsCliscked((prev) => !prev);
    return (
        <>
            <div className="fixed Z-30 w-8/12 flex flex-col gap-3 items-end bottom-2 right-2 md:hidden">
                {
                    isClicked && (
                        <div className="p-2 bg-white h-48 overflow-y-scroll">
                            <MenuListContainer />
                        </div>
                    )
                }
                <button onClick={toggleMenu} className="text-white flex items-center gap-2 bg-blue-900 px-3 py-3 rounded-full md:hidden">
                    {isClicked ? <IoMdCloseCircleOutline /> : <HiMenu />} Menu
                </button>
            </div>
        </>
    );
};

export default FloatMenuBtn;