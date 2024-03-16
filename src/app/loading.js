import React from "react";

const loading = () => {
  return (
    <div className="fixed bg-white z-[9999] w-full h-screen grid place-items-center">
      <div className="spinner"></div>
    </div>
  );
};

export default loading;
