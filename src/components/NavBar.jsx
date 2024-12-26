import React from "react";

const NavBar = () => {
  return (
    <div>
      <link href="style.css" rel="stylesheet" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
        integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
      />

      {/* NavBar */}
      <header>
        <>
          <div class="grid grid-cols-3 px-16 w-screen h-20 border-b-[12px] items-center fixed top-0 bg-white">
            <img
              src="https://th.bing.com/th/id/OIP.49gYuUbYD94P17yY2zuYdAHaHa?w=172&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
              alt=""
              class="h-16 w-28"
            />

            <div class="flex justify-evenly items-center border rounded-full shadow-md h-12 w-96">
              <button class="border-r-2 text-sm font-medium px-4">
                Any where
              </button>
              <button class="border-r-2 text-sm font-medium px-4">
                Any Week
              </button>
              <button class="text-sm text-gray-500 font-medium px-4">
                Add guset
              </button>
              <i class="fa-solid fa-magnifying-glass bg-red-500 text-white rounded-full p-2"></i>
            </div>
            <div class="flex justify-end items-center gap-8">
              <button class="text-sm font-medium">your home</button>
              <span class="material-symbols-outlined">Language</span>
              <div class="flex justify-evenly items-center gap-2 rounded-full border shadow-md h-10 w-20 py-1.25 pr-1.25 pl-2">
                <i class="fa-duotone fa-solid fa-bars"></i>
                <button class="bg-black text-white rounded-full text-center w-7 h-7 text-[10px] font-semibold">
                  E
                </button>
              </div>
            </div>
          </div>

          <div class="flex items-center h-24 space-x-5 top-40 mt-20  bg-white">
            <div class="flex items-center justify-center space-x-1">
              <div class="flex flex-col items-center text-gray-400 hover:text-black gap-2 pl-16">
                <img
                  src="https://a0.muscache.com/pictures/c0fa9598-4e37-40f3-b734-4bd0e2377add.jpg"
                  alt=""
                  class="h-6 w-6"
                />
                <p class="text-xs font-normal">Amazing pools</p>
              </div>
              <div class="flex flex-col items-center text-gray-400 hover:text-black gap-2 pl-16">
                <img
                  src="https://a0.muscache.com/pictures/ee9e2a40-ffac-4db9-9080-b351efc3cfc4.jpg"
                  alt=""
                  class="h-6 w-6"
                />
                <p class="text-xs font-normal">Amazing pools</p>
              </div>
              <div class="flex flex-col items-center text-gray-400 hover:text-black gap-2 pl-16">
                <img
                  src="https://a0.muscache.com/im/pictures/mediaverse/category_icon/original/3e5243c8-4d15-4c6b-97e3-7ba2bb7bb880.png"
                  alt=""
                  class="h-6 w-6"
                />
                <p class="text-xs font-normal">Amazing pools</p>
              </div>
              <div class="flex flex-col items-center text-gray-400 hover:text-black gap-2 pl-16">
                <img
                  src="https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg"
                  alt=""
                  class="h-6 w-6"
                />
                <p class="text-xs font-normal">Amazing pools</p>
              </div>
              <div class="flex flex-col items-center text-gray-400 hover:text-black gap-2 pl-16">
                <img
                  src="https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg"
                  alt=""
                  class="h-6 w-6"
                />
                <p class="text-xs font-normal">Amazing pools</p>
              </div>
              <div class="flex flex-col items-center text-gray-400 hover:text-black gap-2 pl-16">
                <img
                  src="https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg"
                  alt=""
                  class="h-6 w-6"
                />
                <p class="text-xs font-normal">Amazing pools</p>
              </div>
              <div class="flex flex-col items-center text-gray-400 hover:text-black gap-2 pl-16">
                <img
                  src="https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg"
                  alt=""
                  class="h-6 w-6"
                />
                <p class="text-xs font-normal">Amazing pools</p>
              </div>
            </div>
            <span class="material-symbols-outlined pl-4">
              arrow_circle_right
            </span>
            <div class="flex justify-around items-center rounded-xl shadow-md h-12 w-24 border">
              <span class="material-symbols-outlined pl-2">sync_alt</span>
              <p class="text-xs font-medium pr-2">Fillter</p>
            </div>
          </div>

          <div class="flex justify-center mb-8">
            <div class="flex justify-between items-center p-4 border rounded-xl w-[600px] h-16">
              <div class="flex justify-start">
                <p class="border-r-2 border-gray-100 pr-4 text-base font-medium">
                  Display total Price
                </p>
                <p class="pl-4 text-gray-400 text-base">
                  Includes all fees, before taxes
                </p>
              </div>

              <span class="material-symbols-outlined">toggle_off</span>
            </div>
          </div>
        </>
      </header>
    </div>
  );
};

export default NavBar;
