import React from "react";
import { IoMdArrowDropright } from "react-icons/io";
const PictureCard = () => {
  return (
    <>
      <div className="w-full h-96 relative px-4 overflow-hidden">
        <div className="w-full h-full relative">
          <img
            src="data:image/jpeg;base64,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"
            alt="food"
            className="w-full h-full object-cover transition duration-700 ease-in-out rounded-lg"
          />
          <div
            className="w-full h-full absolute inset-0  rounded-lg"
            style={{
              background:
                "linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.05) 50%, rgba(0, 0, 0, 0.05) 85%)",
            }}
          />
        </div>
        <div className="absolute w-full left-8  bottom-2 text-white ">
          <h4 className="z-10">Dineout Special</h4>
          <h6 className="z-10 flex items-center ">
            15 Places <IoMdArrowDropright />
          </h6>
        </div>
      </div>
    </>
  );
};

export default PictureCard;