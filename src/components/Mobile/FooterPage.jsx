import React from "react";

const BottomNav = () => {
  return (
    <nav className="fixed bottom-0 w-full bg-white border-t border-gray-300">
      <div className="flex justify-around items-center py-2">
        <NavItem icon="home" label="Home" active />
        {/* <NavItem icon="document-text" label="Orders" /> */}
        {/* <NavItem icon="chat" label="Chats" /> */}
        <NavItem icon="bell" label="Notification" />
        <NavItem icon="user" label="Profile" />
      </div>
    </nav>
  );
};

const NavItem = ({ icon, label, active }) => {
  return (
    <div className="flex flex-col items-center text-sm">
      <div
        className={`p-2 rounded-full ${
          active ? "bg-orange-500 text-white" : "text-gray-500"
        }`}
      >
        <i className={`fas fa-${icon} text-xl`}></i>
      </div>
      <span className={`mt-1 ${active ? "text-orange-500" : "text-gray-500"}`}>
        {label}
      </span>
    </div>
  );
};

export default BottomNav;
