import React, { useEffect, useState } from "react";
import { Home } from "./Pages/Home";

const App = () => {
  return (
    <div className="w-screen h-screen flex bg-gradient-to-r from-gray-100 to-gray-200">
      <Home />
    </div>
  );
};

export default App;
