import React from "react";
import toast from "react-hot-toast";

const Navbar = () => {
  const notify = () => toast("Here is your toast.");

  return (
    <header className="bg-blue-600 shadow-md fixed top-0 left-0 w-full h-16 flex items-center justify-between px-4">
      <h1 className="text-2xl font-serif font-bold text-white">Nosh</h1>
      <button
        onClick={notify}
        className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 focus:outline-none focus:bg-orange-600 font-serif"
      >
        Contact
      </button>
    </header>
  );
};

export default Navbar;
