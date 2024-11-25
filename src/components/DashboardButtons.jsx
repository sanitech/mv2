import React from "react";
import { FaPlus, FaList } from "react-icons/fa"; // Importing icons from react-icons
import BusinessTable from "./BusinessTable";

const ActionButtons = () => {
  return (
    <div>
      <div className="flex gap-4 p-4 h-20 flex-1">
        {/* New Order Button */}
        <button className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-orange-600">
          <FaPlus /> {/* Plus icon */}
          <span>New Order</span>
        </button>

        {/* Manage Menu Button */}
        <button className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-orange-600">
          <FaList /> {/* List icon */}
          <span>Manage Menu</span>
        </button>
        {/* Manage Menu Button */}
        <button className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-orange-600">
          <FaList /> {/* List icon */}
          <span>Manage Menu</span>
        </button>
        {/* Manage Menu Button */}
        <button className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-orange-600">
          <FaList /> {/* List icon */}
          <span>Manage Menu</span>
        </button>
      </div>
      <BusinessTable />
    </div>
  );
};

export default ActionButtons;
