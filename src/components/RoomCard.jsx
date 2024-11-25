import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const RoomCard = ({ room }) => {
  const [amenity, setAmenity] = useState(room.amenities || []);
  const navigation = useNavigate();

  console.log(amenity);

  // const handleDelete = async () => {
  //   alert("Are you sure you want to delete this room?");
  //   await axios
  //     .delete(`/v1/room/${room.room_id}`)
  //     .then(() => {
  //       fetchRooms();
  //       navigation("/dashboard/rooms");
  //     })
  //     .catch((error) => {
  //       console.error("Error deleting room:", error);
  //     });
  // };
  return (
    <div className="max-w-sm rounded-lg bg-white">
      {/* Discount Banner */}
      <div className="relative">
        <img
          className="w-full h-48 object-cover cursor-pointer rounded-[15px]"
          src="https://th.bing.com/th/id/R.b1ca75de8562f991b7432f431423a917?rik=3tdt8wkPlVgyvA&pid=ImgRaw&r=0"
          alt="Villa"
          onClick={() =>
            navigation(`${room.room_id}`, { state: { room: room } })
          }
        />
        <div className="absolute flex items-center gap-1 top-2 left-[-3px] bg-red-500 shadow-xl text-white text-sm px-2 py-1 rounded-tr-full rounded-br-full rounded-tl-full">
          <svg
            version="1.1"
            id="Layer_1"
            viewBox="0 0 512 512"
            fill="#ff0000"
            stroke="#ff0000"
            className="size-4"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                style={{ fill: "#ffffff" }}
                d="M256,512c141.392,0,256-114.608,256-256S397.392,0,256,0S0,114.608,0,256S114.608,512,256,512z"
              ></path>{" "}
              <path d="M327.024,316.928c13.744,0,20.064-14.304,20.064-36.016c0-20.064-5.504-35.728-20.064-35.728 c-13.744,0-20.624,15.936-20.624,36C306.128,301.536,313.552,316.928,327.024,316.928z"></path>{" "}
              <path d="M70.64,306.912l-35.68,75.824l88.128,10.112l5.104,86.656l82.304-38.992L264.368,512l48.064-72.208l75.744,36.832 l6.56-89.552l88.128-2.16l-32.768-74.384L512,257.088l-67.728-54.88l42.976-73.664l-91.04-7.216l-7.28-89.552l-77.2,36.832 L258.544,0l-49.52,70.048L129.632,28.16l-4.368,91.712l-90.304,4.336l34.224,86.656L0,253.472L70.64,306.912z M372.656,279.264 c0,37.376-21.712,56.64-46.464,56.64c-24.736,0-45.36-19.248-45.36-53.888c0-33.536,19.52-56.08,46.736-56.08 C355.888,225.92,372.656,247.088,372.656,279.264z M307.232,151.984h19.248L222.832,336.72h-19.248L307.232,151.984z M204.416,151.984c28.32,0,45.088,20.896,45.088,53.056c0,37.664-22,56.64-46.464,56.64c-25.008,0-45.36-19.248-45.632-53.616 C157.408,174.24,176.928,151.984,204.416,151.984z"></path>{" "}
              <path d="M203.872,242.704c13.472,0,20.064-14.304,20.064-36.016c0-19.792-5.504-35.728-20.064-35.728 c-13.744,0-20.624,15.952-20.624,36.016C182.976,227.584,190.4,242.704,203.872,242.704z"></path>{" "}
              <g>
                {" "}
                <polygon
                  style={{ fill: "#ffffff" }}
                  points="222.832,336.72 326.48,151.984 307.232,151.984 203.584,336.72 "
                ></polygon>{" "}
                <path
                  style={{ fill: "#ffffff" }}
                  d="M280.832,282.016c0,34.64,20.624,53.888,45.36,53.888c24.752,0,46.464-19.248,46.464-56.64 c0-32.16-16.784-53.328-45.088-53.328C300.352,225.92,280.832,248.464,280.832,282.016z M327.024,245.168 c14.56,0,20.064,15.664,20.064,35.728c0,21.712-6.32,36.016-20.064,36.016c-13.472,0-20.896-15.392-20.624-35.744 C306.4,261.104,313.28,245.168,327.024,245.168z"
                ></path>{" "}
                <path
                  style={{ fill: "#ffffff" }}
                  d="M203.04,261.664c24.464,0,46.464-18.976,46.464-56.64c0-32.16-16.784-53.056-45.088-53.056 c-27.488,0-47.008,22.272-47.008,56.08C157.68,242.416,178.016,261.664,203.04,261.664z M203.872,170.944 c14.56,0,20.064,15.952,20.064,35.728c0,21.712-6.592,36.016-20.064,36.016s-20.896-15.12-20.624-35.728 C183.248,186.896,190.112,170.944,203.872,170.944z"
                ></path>{" "}
              </g>{" "}
            </g>
          </svg>
          75% Off
        </div>
        {/* <div className="absolute top-2 right-2">
          <button
            className="p-2 bg-white rounded-full shadow-md hover:bg-red-100 transition-all"
            onClick={(e) => {
              e.stopPropagation();
              handleDelete();
            }}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-5 w-5 text-red-500"
              xmlns="http://www.w3.org/2000/svg"
              stroke="red"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M10 12V17"
                  stroke="red"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
                <path
                  d="M14 12V17"
                  stroke="red"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
                <path
                  d="M4 7H20"
                  stroke="red"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
                <path
                  d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10"
                  stroke="red"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
                <path
                  d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
                  stroke="red"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>
            </svg>
          </button>
        </div> */}
      </div>

      {/* Tags */}
      <div className="px-4 py-2">
        <div className="flex space-x-2 mb-2">
          {Array.isArray(amenity) &&
            amenity.slice(0, 3).map((amenityItem) => {
              return (
                <span
                  key={amenityItem}
                  className="bg-gray-100 text-gray-600 text-xs font-semibold px-2 py-1 rounded-full"
                >
                  {amenityItem}
                </span>
              );
            })}
        </div>
        <div className="flex justify-between">
          {/* Title */}
          <div className="flex flex-col">
            <h3 className="text-lg font-bold text-gray-900">
              {room.room_name}
            </h3>
            <p className="text-sm text-gray-600 line-clamp-2">
              {room.description}
            </p>
          </div>

          {/* Rating and Price */}
          <div className="flex justify-between items-center mt-4">
            <div className="flex items-center space-x-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5 text-yellow-500"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            </div>
            <span className="text-gray-900 font-semibold">{room.rating}</span>
          </div>
        </div>

        <div className="flex justify-between mt-3 items-center">
          {/* Icons */}
          <div className="flex items-center space-x-4 mt-4 text-gray-600 text-sm ring-gray-200 border rounded-full py-1 px-2 w-fit">
            {/* Bed Icon */}
            <div className="flex items-center space-x-1">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="w-5 h-5"
                stroke="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M19 20V18.5M5 20V18.5"
                    stroke="#1C274C"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  ></path>{" "}
                  <path
                    d="M2 15C2 14.0681 2 13.6022 2.15224 13.2346C2.35523 12.7446 2.74458 12.3552 3.23463 12.1522C3.60218 12 4.06812 12 5 12H19C19.9319 12 20.3978 12 20.7654 12.1522C21.2554 12.3552 21.6448 12.7446 21.8478 13.2346C22 13.6022 22 14.0681 22 15C22 15.9319 22 16.3978 21.8478 16.7654C21.6448 17.2554 21.2554 17.6448 20.7654 17.8478C20.3978 18 19.9319 18 19 18H5C4.06812 18 3.60218 18 3.23463 17.8478C2.74458 17.6448 2.35523 17.2554 2.15224 16.7654C2 16.3978 2 15.9319 2 15Z"
                    stroke="#1C274C"
                    stroke-width="1.5"
                  ></path>{" "}
                  <path
                    d="M21 12C21 8.22876 21 6.34315 19.8284 5.17157C18.6569 4 16.7712 4 13 4H11C7.22876 4 5.34315 4 4.17157 5.17157C3 6.34315 3 8.22876 3 12"
                    stroke="#1C274C"
                    stroke-width="1.5"
                  ></path>{" "}
                  <path
                    d="M18.5 12V10.5C18.5 8.61438 18.5 7.67157 17.9142 7.08579C17.3284 6.5 16.3856 6.5 14.5 6.5H9.5C7.61438 6.5 6.67157 6.5 6.08579 7.08579C5.5 7.67157 5.5 8.61438 5.5 10.5V12"
                    stroke="#1C274C"
                    stroke-width="1.5"
                  ></path>{" "}
                  <path d="M12 7V12" stroke="#1C274C" stroke-width="1.5"></path>{" "}
                </g>
              </svg>
              <span>3</span>
            </div>
            {/* Bath Icon */}
            <div className="flex items-center space-x-1">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.826 6.07601C11.4937 6.38186 10.5 7.57488 10.5 9V9.75H16.5V9C16.5 7.6504 15.6088 6.50894 14.3828 6.132C14.6183 5.61186 15.1419 5.25 15.75 5.25C16.5784 5.25 17.25 5.92157 17.25 6.75L17.25 12.75H4.5V14.25H5.25L5.25 18C5.25 19.2426 6.25736 20.25 7.5 20.25L16.5 20.25C17.7426 20.25 18.75 19.2426 18.75 18V14.25H19.5V12.75H18.75L18.75 6.75C18.75 5.09315 17.4069 3.75 15.75 3.75C14.3249 3.75 13.1319 4.7437 12.826 6.07601ZM6.75 14.25H17.25V18C17.25 18.4142 16.9142 18.75 16.5 18.75L7.5 18.75C7.08579 18.75 6.75 18.4142 6.75 18L6.75 14.25ZM13.5 7.5C14.0552 7.5 14.54 7.80165 14.7993 8.25H12.2007C12.46 7.80165 12.9448 7.5 13.5 7.5Z"
                    fill="#080341"
                  ></path>{" "}
                </g>
              </svg>
              <span>2</span>
            </div>
            {/* Guest Icon */}
            <div className="flex items-center space-x-1 ">
              <svg
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 30 30"
                version="1.1"
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <title>group</title>{" "}
                  <path d="M20.906 20.75c1.313 0.719 2.063 2 1.969 3.281-0.063 0.781-0.094 0.813-1.094 0.938-0.625 0.094-4.563 0.125-8.625 0.125-4.594 0-9.406-0.094-9.75-0.188-1.375-0.344-0.625-2.844 1.188-4.031 1.406-0.906 4.281-2.281 5.063-2.438 1.063-0.219 1.188-0.875 0-3-0.281-0.469-0.594-1.906-0.625-3.406-0.031-2.438 0.438-4.094 2.563-4.906 0.438-0.156 0.875-0.219 1.281-0.219 1.406 0 2.719 0.781 3.25 1.938 0.781 1.531 0.469 5.625-0.344 7.094-0.938 1.656-0.844 2.188 0.188 2.469 0.688 0.188 2.813 1.188 4.938 2.344zM3.906 19.813c-0.5 0.344-0.969 0.781-1.344 1.219-1.188 0-2.094-0.031-2.188-0.063-0.781-0.188-0.344-1.625 0.688-2.25 0.781-0.5 2.375-1.281 2.813-1.375 0.563-0.125 0.688-0.469 0-1.656-0.156-0.25-0.344-1.063-0.344-1.906-0.031-1.375 0.25-2.313 1.438-2.719 1-0.375 2.125 0.094 2.531 0.938 0.406 0.875 0.188 3.125-0.25 3.938-0.5 0.969-0.406 1.219 0.156 1.375 0.125 0.031 0.375 0.156 0.719 0.313-1.375 0.563-3.25 1.594-4.219 2.188zM24.469 18.625c0.75 0.406 1.156 1.094 1.094 1.813-0.031 0.438-0.031 0.469-0.594 0.531-0.156 0.031-0.875 0.063-1.813 0.063-0.406-0.531-0.969-1.031-1.656-1.375-1.281-0.75-2.844-1.563-4-2.063 0.313-0.125 0.594-0.219 0.719-0.25 0.594-0.125 0.688-0.469 0-1.656-0.125-0.25-0.344-1.063-0.344-1.906-0.031-1.375 0.219-2.313 1.406-2.719 1.031-0.375 2.156 0.094 2.531 0.938 0.406 0.875 0.25 3.125-0.188 3.938-0.5 0.969-0.438 1.219 0.094 1.375 0.375 0.125 1.563 0.688 2.75 1.313z"></path>{" "}
                </g>
              </svg>
              <span>{room.capacity}</span>
            </div>
          </div>

          <div className="text-right">
            {/* <p className="text-sm text-gray-500 line-through">$10,000</p> */}
            <p className="text-lg font-bold text-gray-900">
              {new Intl.NumberFormat("am-ET", {
                style: "currency",
                currency: "ETB",
                minimumFractionDigits: 0,
                maximumFractionDigits: 2,
              }).format(room.price_per_night)}
              <span className="text-sm text-gray-500">/n</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
