import React, { useState } from "react";
import ReadText from "./ReadText";

const ReadMore = ({ children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className=" space-y-3">
      <p>{isExpanded ? <ReadText /> : ""}</p>
      <button
        onClick={toggleReadMore}
        className="text-[#000] bg-gray-100 hover:bg-gray-300  focus:outline-none px-[20px] py-[10px] rounded-[10px] "
      >
        {isExpanded ? "Show Less" : "Read More"}
      </button>
    </div>
  );
};

export default ReadMore;
