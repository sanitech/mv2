// import React from "react";

// const FoodCafeUI = () => {
//   return (
//     <div className="bg-gray-100 min-h-screen flex flex-col">
//       {/* Navbar */}
//       <nav className="flex justify-between items-center p-6 bg-white shadow">
//         <h1 className="text-2xl font-bold text-orange-500">foco</h1>
//         <ul className="flex gap-6 text-gray-600">
//           <li className="hover:text-black cursor-pointer">Home</li>
//           <li className="hover:text-black cursor-pointer">Menu</li>
//           <li className="hover:text-black cursor-pointer">Service</li>
//           <li className="hover:text-black cursor-pointer">Shop</li>
//         </ul>
//         <div className="flex items-center gap-4">
//           <button className="text-gray-600 hover:text-black">Sign In</button>
//           <button className="bg-yellow-400 text-white px-4 py-2 rounded-md hover:bg-yellow-500">
//             Login
//           </button>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section className="flex flex-wrap-reverse lg:flex-nowrap p-10 gap-8">
//         {/* Left Content */}
//         <div className="flex-1">
//           <h2 className="text-4xl font-bold text-gray-800 leading-tight">
//             Order your <br />
//             <span className="text-orange-500">favourite Foods</span>
//           </h2>
//           <p className="text-gray-500 mt-4">
//             Fresh and tasty seafood curry sit amet, consectetur <br />
//             Curabitur accumsan auctor pulvinar sit amet.
//           </p>
//           <p className="text-gray-700 font-bold text-lg mt-4">
//             Total order: <span className="text-black">$24.30</span>
//           </p>
//           <div className="flex items-center gap-4 mt-6">
//             <div className="flex items-center border rounded-md px-4 py-2">
//               <button className="text-xl font-bold">-</button>
//               <span className="mx-4">2</span>
//               <button className="text-xl font-bold">+</button>
//             </div>
//             <button className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800">
//               Buy Now
//             </button>
//           </div>
//         </div>

//         {/* Right Content */}
//         <div className="flex-1 relative">
//           <img
//             src="https://via.placeholder.com/400"
//             alt="Salad Bowl"
//             className="rounded-full shadow-lg"
//           />
//           <div className="absolute bottom-8 right-8 bg-orange-500 text-white p-4 rounded-md shadow-lg">
//             <p className="text-lg font-bold">Salad</p>
//             <p className="text-sm mt-1">⭐ 4.7</p>
//             <p className="text-sm mt-1">10-18 mins</p>
//           </div>
//         </div>
//       </section>

//       {/* Product List */}
//       <section className="p-10">
//         <div className="flex gap-4">
//           <div className="flex flex-col items-center p-4 bg-white shadow rounded-md">
//             <div className="w-16 h-16 bg-gray-200 rounded-full"></div>
//             <p className="mt-2 text-gray-800">Burger</p>
//             <p className="text-gray-500">$3.25</p>
//           </div>
//           <div className="flex flex-col items-center p-4 bg-white shadow rounded-md">
//             <div className="w-16 h-16 bg-gray-200 rounded-full"></div>
//             <p className="mt-2 text-gray-800">Cake</p>
//             <p className="text-gray-500">$2.25</p>
//           </div>
//           <div className="flex flex-col items-center p-4 bg-white shadow rounded-md">
//             <div className="w-16 h-16 bg-gray-200 rounded-full"></div>
//             <p className="mt-2 text-gray-800">Salad</p>
//             <p className="text-gray-500">$5.25</p>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default FoodCafeUI;
// import React from "react";
// import MenuLeft from "./MenuLeft";
// import MenuRigt from "./MenuRight";
// import RegistrationForm from "./RegistrationForm";

// const Header = () => {
//   return (
//     <header className="bg-white shadow-md">
//       <div className="container mx-auto px-4 py-3 flex justify-between items-center">
//         {/* Logo */}
//         <h1 className="text-2xl font-bold text-orange-500">foco</h1>

//         {/* Navigation Links */}
//         <nav className="flex space-x-6 text-gray-600">
//           <a href="#home" className="hover:text-black">
//             Home
//           </a>
//           <a href="#menu" className="hover:text-black">
//             Menu
//           </a>
//           <a href="#service" className="hover:text-black">
//             Service
//           </a>
//           <a href="#shop" className="hover:text-black">
//             Shop
//           </a>
//         </nav>

//         {/* Search and Actions */}
//         <div className="flex items-center space-x-4">
//           {/* Search Icon */}
//           <button className="text-gray-600 hover:text-black">🔍</button>

//           {/* Cart Icon with Notification Badge */}
//           <div className="relative">
//             <button className="text-gray-600 hover:text-black">🛒</button>
//             <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold w-4 h-4 flex items-center justify-center rounded-full">
//               2
//             </span>
//           </div>

//           {/* Auth Buttons */}
//           <div className="flex space-x-2">
//             <button className="border border-gray-400 text-gray-600 px-4 py-2 rounded-md hover:bg-gray-200">
//               Sign In
//             </button>
//             <button className="bg-yellow-400 text-white px-4 py-2 rounded-md hover:bg-yellow-500">
//               Login
//             </button>
//           </div>
//         </div>
//       </div>
//       <div className="container mx-auto px-4 py-3 flex justify-between items-center">
//         <MenuLeft />
//         <MenuRigt />
//       </div>
//       <RegistrationForm />
//     </header>
//   );
// };

// export default Header;
// import React from "react";
// import HomePage from "./HomePage";

// const FoodOrderPage = () => {
//   return (
//     <div className="h-screen bg-gray-100  relative overflow-hidden">
//       <div className="h-screen bg-white shadow-md rounded-lg overflow-hidden flex flex-col md:flex-row">
//         {/* Left Section */}
//         <div className="p-12 flex-1  ">
//           <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
//             Order your <br /> favourite Foods
//           </h1>
//           <p className="text-gray-500 mt-4 mb-8">
//             Fresh and tasty seafood curry sit amet, <br /> consectetur Curabitur
//             accumsan auctor pulvinar proin <i>sit amet</i>.
//           </p>
//           <div className="text-gray-800 text-2xl font-semibold mb-4">
//             Total order: <span className="text-black">$24.30</span>
//           </div>
//           <div className="flex items-center space-x-4">
//             <div className="flex items-center space-x-2">
//               <button className="px-2 py-1 bg-gray-200 rounded">-</button>
//               <span className="px-4 py-1 bg-gray-100 border rounded">2</span>
//               <button className="px-2 py-1 bg-gray-200 rounded">+</button>
//             </div>
//             <button className="bg-black text-white px-6 py-2 rounded shadow-md">
//               Buy Now
//             </button>
//           </div>
//           {/* Food Options */}
//           <div className="flex space-x-4 mt-6">
//             {[
//               { name: "Burger", price: "$3.25" },
//               { name: "Cake", price: "$2.25" },
//               { name: "Salad", price: "$5.25" },
//             ].map((food, index) => (
//               <div
//                 key={index}
//                 className="flex flex-col items-center border p-4 rounded-lg shadow-sm"
//               >
//                 <div className="w-12 h-12 bg-gray-100 rounded-full mb-2"></div>
//                 <span className="text-gray-700">{food.name}</span>
//                 <span className="text-gray-500">{food.price}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//         {/* Right Section */}

//         <div className="absolute flex flex-col  top-[50%] right-[40%] translate-x-1/2 -translate-y-1/2 flex-1 z-20">
//           <div className="flex flex-col items-center">
//             <img
//               src="https://th.bing.com/th?id=OIP.e2i3RpklF3sW5uQwYEe4pwHaGu&w=262&h=238&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
//               alt="Salad "
//               className="object-cover w-96 h-96 rounded-full"
//             />
//             <div className="  bg-orange-500 text-white  mt-2 px-4 py-2 rounded-lg">
//               <div className="flex items-center justify-between">
//                 <span className="text-lg font-semibold">Salad</span>
//                 <span className="ml-2">⭐ 4.7</span>
//               </div>
//               <div className="text-sm mt-1">⏱ 10-18 mins</div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div
//         style={{
//           position: "absolute",
//           top: "-50%",
//           bottom: 0,
//           right: "-50%",
//           borderRadius: "50%",
//           backgroundColor: "black",
//           zIndex: 1,
//           width: "1200px",
//           height: "1200px",
//         }}
//       ></div>
//       <HomePage />
//     </div>
//   );
// };

// export default FoodOrderPage;
// import React from "react";
// import MenuLeft from "./MenuLeft";

// const Homepage = () => {
//   return (
//     <div className="bg-blue-200">
//       {/* Header */}
//       <header className="bg-teal-900 text-white flex justify-between items-center px-6 py-4">
//         <div className="text-xl font-bold">AM</div>
//         <nav className="flex gap-6">
//           <a href="#products" className="hover:text-gray-300">
//             Products
//           </a>
//           <a href="#recipes" className="hover:text-gray-300">
//             Recipes
//           </a>
//           <a href="#adventure-trip" className="hover:text-gray-300">
//             Adventure Trip
//           </a>
//           <a href="#food-training" className="hover:text-gray-300">
//             Food Training
//           </a>
//           <a href="#anna-marta" className="hover:text-gray-300">
//             Anna Marta
//           </a>
//         </nav>
//         <button className="hover:opacity-75">
//           <span role="img" aria-label="search">
//             🔍
//           </span>
//         </button>
//       </header>

//       {/* Hero Section */}
//       <section className="bg-teal-900 text-white text-center py-16 px-4">
//         <h1 className="text-4xl font-bold mb-4">
//           Delicious Recipes and Diet Workout
//         </h1>
//         <p className="text-lg mb-6">
//           Anna Marta's core philosophy is not just about eating healthy, she
//           says it's equally important that the food be colorful, beautiful and,
//           of course, delicious.
//         </p>
//         <button className="bg-white text-teal-900 px-6 py-2 rounded-full font-bold hover:bg-gray-100">
//           Explore Products
//         </button>
//       </section>

//       {/* Product Cards */}
//       <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
//         {/* Example card */}
//         <div className="bg-red-200 p-4 rounded-lg shadow-lg flex items-center">
//           <img
//             src="https://via.placeholder.com/100"
//             alt="Pesto"
//             className="w-16 h-16 rounded-full mr-4"
//           />
//           <div>
//             <h3 className="font-bold text-lg">Pesto</h3>
//             <p className="text-gray-700">$14.69</p>
//           </div>
//         </div>
//         {/* Add more cards as needed */}
//       </section>
//       <MenuLeft />
//     </div>
//   );
// };
import React from "react";
// return (
//   <div className="bg-blue-200">
//     {/* Header */}
//     <header className="bg-teal-900 text-white flex justify-between items-center px-6 py-4">
//       <div className="text-xl font-bold">AM</div>
//       <nav className="flex gap-6">
//         <a href="#products" className="hover:text-gray-300">
//           Products
//         </a>
//         <a href="#recipes" className="hover:text-gray-300">
//           Recipes
//         </a>
//         <a href="#adventure-trip" className="hover:text-gray-300">
//           Adventure Trip
//         </a>
//         <a href="#food-training" className="hover:text-gray-300">
//           Food Training
//         </a>
//         <a href="#anna-marta" className="hover:text-gray-300">
//           Anna Marta
//         </a>
//       </nav>
//       <button className="hover:opacity-75">
//         <span role="img" aria-label="search">
//           🔍
//         </span>
//       </button>
//     </header>

//     {/* Hero Section */}
//     <section className="bg-teal-900 text-white text-center py-16 px-4">
//       <h1 className="text-4xl font-bold mb-4">
//         Delicious Recipes and Diet Workout
//       </h1>
//       <p className="text-lg mb-6">
//         Anna Marta's core philosophy is not just about eating healthy, she says
//         it's equally important that the food be colorful, beautiful and, of
//         course, delicious.
//       </p>
//       <button className="bg-white text-teal-900 px-6 py-2 rounded-full font-bold hover:bg-gray-100">
//         Explore Products
//       </button>
//     </section>

//     {/* Product Cards */}
//     <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
//       {/* Example card */}
//       <div className="bg-red-200 p-4 rounded-lg shadow-lg flex items-center">
//         <img
//           src="https://via.placeholder.com/100"
//           alt="Pesto"
//           className="w-16 h-16 rounded-full mr-4"
//         />
//         <div>
//           <h3 className="font-bold text-lg">Pesto</h3>
//           <p className="text-gray-700">$14.69</p>
//         </div>
//       </div>
//       {/* Add more cards as needed */}
//     </section>
//   </div>
// );

const ProductCard = ({
  title,
  description,
  image,
  price,
  status,
  bgColor,
  tilt,
}) => {
  return (
    <div
      className={`relative w-72 p-6 rounded-2xl shadow-xl transform ${tilt} ${bgColor} text-white hover:scale-105 transition-transform`}
    >
      <div className="absolute top-4 right-4">
        {status === "Out of stock" ? (
          <span className="bg-gray-800 text-white text-xs px-3 py-1 rounded-full">
            {status}
          </span>
        ) : (
          <span className="bg-white text-black text-sm px-3 py-1 rounded-full">
            ${price}
          </span>
        )}
      </div>
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover rounded-lg mb-4 border-2 border-white"
      />
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-sm mb-4">{description}</p>
    </div>
  );
};

const ProductCards = () => {
  const products = [
    {
      title: "Pesto",
      description:
        "Beloved for its rich flavor and versatility in pasta, sandwiches, and grilled vegetables.",
      image: "path/to/pesto-image.jpg",
      price: "28.50$",
      status: "In stock",
      bgColor: "bg-green-500",
      tilt: "rotate-[-2deg]",
    },
    {
      title: "Salsa",
      description:
        "A vibrant medley of tomatoes, onions, peppers, and herbs, adds a burst of freshness.",
      image: "path/to/salsa-image.jpg",
      price: "14.49$",
      status: "In stock",
      bgColor: "bg-purple-500",
      tilt: "rotate-[1deg]",
    },
    {
      title: "Oyster",
      description:
        "Prized delicacies of the sea, offer a taste of briny sweetness and a tender texture.",
      image: "path/to/oyster-image.jpg",
      price: "",
      status: "Out of stock",
      bgColor: "bg-blue-400",
      tilt: "rotate-[-1deg]",
    },
    {
      title: "Tartar",
      description:
        "A tangy companion to seafood, delights with its creamy texture and zesty flavor.",
      image: "path/to/tartar-image.jpg",
      price: "14.69$",
      status: "In stock",
      bgColor: "bg-yellow-400",
      tilt: "rotate-[2deg]",
    },
  ];

  return (
    <div className="bg-gray-900 py-12 px-6">
      <h1 className="text-center text-4xl font-extrabold text-white mb-12">
        Explore Products
      </h1>
      <div className="flex flex-wrap justify-center gap-12">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            title={product.title}
            description={product.description}
            image={product.image}
            price={product.price}
            status={product.status}
            bgColor={product.bgColor}
            tilt={product.tilt}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductCards;
