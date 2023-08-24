import React from "react";

const PageHeader = ({ children }) => {
  return (
    <div className="w-full px-32 py-20 bg-smartGray fle">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-6xl font-semibold">
        {children}
      </h1>
    </div>
  );
};

export default PageHeader;
