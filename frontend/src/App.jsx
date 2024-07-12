import React from "react";
import Home from "./Pages/Home";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div className="w-screen h-screen flex bg-yellow-50">
      <Home />
      <Toaster position="bottom-left" reverseOrder={false} />
    </div>
  );
};

export default App;
