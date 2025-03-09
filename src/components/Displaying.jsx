import React from "react";

const Displaying = ({ title }) => (
  <div className="w-full flex justify-center items-center flex-col">
    <h1 className="font-bold text-2xl text-white mt-2">{title || "Sorry"}</h1>
  </div>
);

export default Displaying;
