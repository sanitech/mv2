// import React from "react";

// const LoginForm = () => {
//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
//         {/* Logo */}
//         <div className="text-center mb-6">
//           <h1 className="text-2xl font-bold text-orange-500">Best Food Cafe</h1>
//           <p className="text-sm text-gray-500 mt-2">Login to your account</p>
//         </div>

//         {/* Form */}
//         <form className="space-y-6">
//           {/* Email Input */}
//           <div>
//             <label
//               htmlFor="email"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Email Address
//             </label>
//             <input
//               type="email"
//               id="email"
//               placeholder="Enter your email"
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
//             />
//           </div>

//           {/* Password Input */}
//           <div>
//             <label
//               htmlFor="password"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               placeholder="Enter your password"
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
//             />
//           </div>

//           {/* Submit Button */}
//           <div>
//             <button
//               type="submit"
//               className="w-full bg-orange-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-orange-600 focus:ring-2 focus:ring-orange-400"
//             >
//               Login
//             </button>
//           </div>
//         </form>

//         {/* Additional Links */}
//         <div className="mt-4 text-center">
//           <p className="text-sm text-gray-600">
//             Don't have an account?{" "}
//             <a href="#" className="text-orange-500 hover:underline">
//               Sign Up
//             </a>
//           </p>
//           <p className="text-sm text-gray-600 mt-2">
//             <a href="#" className="text-orange-500 hover:underline">
//               Forgot Password?
//             </a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginForm;
// import React from "react";

// const LoginForm = () => {
//   return (
//     <div
//       className="min-h-screen flex items-center justify-center bg-cover bg-center"
//       style={{
//         backgroundImage: `url('https://source.unsplash.com/1600x900/?food,hotel')`,
//       }}
//     >
//       <div className="bg-white rounded-lg shadow-lg p-8 max-w-sm w-full">
//         {/* Logo */}
//         <div className="text-center mb-6">
//           <h1 className="text-2xl font-bold text-gray-800">Welcome Back!</h1>
//           <p className="text-sm text-gray-500">
//             Log in to explore delicious food and hotel stays.
//           </p>
//         </div>

//         {/* Form */}
//         <form>
//           {/* Email Input */}
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Email Address
//             </label>
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="w-full border rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-400"
//             />
//           </div>

//           {/* Password Input */}
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Password
//             </label>
//             <input
//               type="password"
//               placeholder="Enter your password"
//               className="w-full border rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-400"
//             />
//           </div>

//           {/* Remember Me and Forgot Password */}
//           <div className="flex items-center justify-between mb-4">
//             <div className="flex items-center">
//               <input
//                 type="checkbox"
//                 id="rememberMe"
//                 className="w-4 h-4 text-red-500 border-gray-300 rounded focus:ring-red-400"
//               />
//               <label
//                 htmlFor="rememberMe"
//                 className="ml-2 text-sm text-gray-600"
//               >
//                 Remember me
//               </label>
//             </div>
//             <a href="#" className="text-sm text-red-500 hover:underline">
//               Forgot Password?
//             </a>
//           </div>

//           {/* Login Button */}
//           <button
//             type="submit"
//             className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg py-2 transition duration-300"
//           >
//             Log In
//           </button>
//         </form>

//         {/* Divider */}
//         <div className="flex items-center my-6">
//           <hr className="flex-grow border-gray-300" />
//           <span className="px-4 text-sm text-gray-500">OR</span>
//           <hr className="flex-grow border-gray-300" />
//         </div>

//         {/* Social Logins */}
//         <div className="flex flex-col space-y-2">
//           <button className="flex items-center justify-center border rounded-lg py-2 hover:bg-gray-100 transition duration-300">
//             <img
//               src="https://img.icons8.com/color/24/000000/google-logo.png"
//               alt="Google"
//               className="w-5 h-5 mr-2"
//             />
//             Continue with Google
//           </button>
//           <button className="flex items-center justify-center border rounded-lg py-2 hover:bg-gray-100 transition duration-300">
//             <img
//               src="https://img.icons8.com/ios-filled/50/1877f2/facebook-new.png"
//               alt="Facebook"
//               className="w-5 h-5 mr-2"
//             />
//             Continue with Facebook
//           </button>
//         </div>

//         {/* Signup Link */}
//         <p className="text-center text-sm text-gray-600 mt-4">
//           Don't have an account?{" "}
//           <a href="#" className="text-red-500 font-semibold hover:underline">
//             Sign up
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default LoginForm;

// import React from "react";

// const FoodOrder = () => {
//   return (
//     <div className="bg-gray-100 min-h-screen p-8">
//       {/* Container */}
//       <div className="bg-white rounded-lg shadow-lg overflow-hidden p-6 md:flex md:items-center md:justify-between max-w-7xl mx-auto">
//         {/* Left Content */}
//         <div className="md:w-1/2">
//           {/* Title */}
//           <h1 className="text-4xl font-bold text-gray-800 mb-4">
//             Order your <br />
//             <span className="text-yellow-500">favourite Foods</span>
//           </h1>
//           <p className="text-gray-500 mb-6">
//             Fresh and tasty seafood curry or any meal. Lorem ipsum dolor sit
//             amet consectetur.
//           </p>

//           {/* Total Order */}
//           <div className="flex items-center justify-between mb-6">
//             <span className="text-xl text-gray-800 font-semibold">
//               Total order: <span className="text-yellow-500">$24.30</span>
//             </span>
//           </div>

//           {/* Quantity & Button */}
//           <div className="flex items-center space-x-4 mb-6">
//             <div className="flex items-center border rounded-full px-3 py-2">
//               <button className="text-xl text-gray-700">-</button>
//               <span className="mx-4">2</span>
//               <button className="text-xl text-gray-700">+</button>
//             </div>
//             <button className="bg-black text-white px-6 py-3 rounded-full text-lg hover:bg-gray-800">
//               Buy Now
//             </button>
//           </div>

//           {/* Food Options */}
//           <div className="flex space-x-4">
//             {[
//               { name: "Burger", price: "$3.25", img: "🍔" },
//               { name: "Cake", price: "$2.25", img: "🍰" },
//               { name: "Salad", price: "$5.25", img: "🥗" },
//             ].map((item, index) => (
//               <div
//                 key={index}
//                 className="bg-gray-100 rounded-lg shadow-md p-4 text-center"
//               >
//                 <span className="text-3xl">{item.img}</span>
//                 <h3 className="text-lg font-medium text-gray-700 mt-2">
//                   {item.name}
//                 </h3>
//                 <p className="text-sm text-yellow-500 font-semibold">
//                   {item.price}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Right Content */}
//         <div className="md:w-1/2 relative">
//           <img
//             src="data:image/jpeg;base64,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
//             YFh9TXb6UPSYjLx6ZkbHU3Ui3ulaOeNdgcDIkXpnHrTYx6ZPIJC6xzFXjckNiRGGCr8Y46g0Hqnykt1G1vCY0jcFGI8z5PLNjj6c1afDN1HD12xo7YPY54/rQWXlh6R2ia689I7+HS+nQ4jY5kkaRyOh52qPsAKaavoejfFEZdsWmrKmIruNc78DASdR+Jf3HY9iqs3UFgAAuTjHQD2oxtQsbeQJJdQRyA8q0ihgfcA8V6XSsrUKT0wJbqsak7kODMJcaJqWlXbWupRFJF80bRkmKZM4DxPgZH7juBRCRR5BxnP9fevoyz6TrdsbK+MU0ecxTROpkhfGA6MM4P9e+ayOraNdaPKIpPElt5iBb3SBFjkHXa2Tww7j9PYjWFGV6S+uoNxy55it4NxByOOgHWqJYVbGUX6D+9XZgX8s5boOVIz2zzXBsUjxFlUkj8BU5B+9L6RkBaBCQfDPAP2oaa2jIbKkehFOGjt85C3HXgEIP71WVtSclZcZx0B5/Wu3QdszEliGbgkY/Wj4mu0jjjMrlFHlB6j7imbfI5OEkz/AKRVT+GAMK+3t5RR7t3WBtxKUMDbgCBg8Bs0QkaqcjGcZB9frnig4FAPKjGck9f60WzlWDJHnn1z2xjFHuOcRm0YlsTDcwkJPUAY/ripFZjkptAXnIUHiqI2jIP8N45Odp3fY8GvFpI8gM7NjzZHRT9KPBMEkQiztrzUr2CyhKyXF0/hozKAsaDzNK4HZRyf0719XsrCy0Wxjs7NcY880jY8SaUjzSSEdz+3TtWP+AYY2vNWumB3xW8EEe7qBKzOxH12gVsbuTEjrwOOMnt65p6DjMq2Ek4Ez2sA3BkXrkMP2rPRweBELq7UosJCqp6vIeAqjrkn/mBTpr60vCZLdy8e94xJtIVmTGQuaX7Td6zDv3G006BJlVc4e6mLDn3x0qrdUHYWN2iWpZW2sMGEW4uYd0igCSTEsxyzqrtj8fPQdB06VR8SQ3CaRa+AuUE15dXG0lpA11+AouM7eTn0yKLlWKV7ex8dQnjx3188ZQq0dsfEZWzztXoT3P71W2qm9unmwwieR1jjkOV8P8PAxxkDp7Vj12eQbdXnjp+J9pbrGA1g6Dj85ndJ0izaxjuL5JnSadLZYRL4K8FnxIwG4hgDnkda1N1epptlcT+GsPhWsrwRjaQCqgKoC+mRRbadYyESRLgFgzRkl4i46MY2yuR24rHfEdnr0Rvbi7LXFsyOYZ4vwwpn/LkUYxxjtj39KCE6l/UeJURcECaW53Wvw4gsy7XU4t4XckK+1x4kpDEgZbkde9LLS4u5TEbiLdOsTKZ3CeM0ZfyxswGTjGTk9/amNjKus/DpFsAZprVCgPm2zwsCVUdc8ED6+9IDrFjaSJaxZuJ2iZj4Z2AMEJMbFwOc8E8Y5q54vW7kIgzkflH2IxsxL9UuYUuporbZPevb28rWV4qT2suxdoEYJBWVuq4PPTqcFK2p3k5h+WuFtP4XzEItVVCXQ4YZbLZU9v2obQI5f+pNBTwELSahl4T5lj2KXcHfnleo5PQVqPiOADVdQZIo1cSxwYhGFkkOFUgdmbIz71zaavTVIep6SbVTy1ZeveP7uRdT+HYL5x/Fn0+O4YAYIuI13nGOnmU9qb6RdC6sbG4jVUWa3ik2JgKpZQSAB96Fktv8K+FmhumQNZ6bM82SNqybWcgeuCcCufDsEtrpGjwTAiRbOBnU9VMq+IAfpnFaGqGQhbgw15ryY3uLWwvlMd5bwTr0AlRWK+wJ5/es3r/w/p7o872huLeQr82U5miVFIVlCDdwMquPUU/k8RDuHKgjcPQVejZAwcccHqOfUelYjWl2NYyGE4ggZBnz7TdV05WWzhtUhtoG3S7BJ5QRtO7xAWJ6byT1rQxRWz3Hj4haSGHasi7SwjlIYeYc84FU6ppK2dxJqFsmIJozDcIOsRdi2Af5WyeftSVZZYIfCtllZ/HWRkQ4d9oAHUgY9qz7P5vIMosxXgxrfTIizbDh3ZnG05Z5Nvp7122gt5YrRowwLqWZSxIVjjcRmliXE11Mtw0hg3iSJluYcqowVJTHmBPT7+lOLCMR28ql1LKpjRgwCkSEk7dxFczqHOJA9RiTV5NVhmsprGa38Ni8UVtIrkNjBeeUjjjgDnvirhPLfEfN3DyuoAVfIIo+OSkeCv8AWqNQ/wAUeV1tdPvViCsm6RPxKOCy7DwPfNQj0+4SGL+Osc7bJFLghBxh146gdaJn2hQcD+v1gEEmXzafbyeHIWlSMEq4UKeOmQR0/SmlpoOlyATSLd5YYikjkY5QZHXGzvxxVCW8kVqwN5bSSspbaRtGOhZQWzikN5DOsjyWngpM4MT3A+YDBWA/DskCjPQ+WtXSX0qSloH1++0u6OsWP5Q6mahNEtdz+Bq1yh/Dh/Adg3v5Qf2pJefBl+niT2MqXSgsxQE+MTjP4W6k/Wu2mp6nbiBbg/NIoWNzLJA7FAOT4k5D+w5puuu/LQ2kx09JWk3+MsM80RTZGZBkEspzjA+tbHk1WDAII+Rl23w104Imb022uIJBMgaOaKTY6ny5AGSjrW6trm2vLZrS+iSe0nQB0kGcZ5BHfI7HtWPvPjTQtTli8PS7m3u2wjSyTJs2ngh1TGcdQadWzPEqxuCGQAc9/cUyhPIY1k5B6TPsqalvUIo1vQZdJmSSHfLZTtm3nyC3TJilxwGHY9x9CAu2rITuVgVACbuenPNfR7MQaha3FhdDdDMmMd1PUMp9QeRWAureWzubyymKCa3mZCc8EDowz6jB+9Rcmw5HSXabN4wYO0IPAQEnnlj29DVXhBRnwxtyfXOamZGHHiE4zgcAiom4LKoD8ge2DzSOY+DsqtuGzG1TkgEE4oZkYnhSBjIHP60XJPKgDAKc8euKre4kJGWTGBjGcc0wK0EkQJMHHkOSTzuxgdvau5kjboSM9OD9uKtVHAOFhOedxVsj6eavKk+8jCbR+ciRRnHbPWn8QMmVFZCwIGRnHOR7nNWEFQpDAsRztY0QUmIC5iPP8rnP3zXBayhgV8IqDz5ZMdOnWpDSCuY9+Dr35TUpI2PkuoApBPIeM7h+xNbnWIpDALuEbhGP4yjnMZ/MB7d/r7V8vhW5tp4LlGiHhSK4UK65APmAyc9M19M0rUEdIwxBjkAKE8gBh0OadW4PEr2KVO6YTTZFgv77TJGUQ3T77YoAAkyjMZUDjkcfYURFdppumS38yvLcS3pASEMS7hjHFFGo55OKs+L9Dk06eLU7QE2UsiAFeflZs7lQn+Un8J+3plQ2vfJ28SQQl7p13wNKAY42OcvnqSORj2/UmAIIab2urXU016xDyww3/wBD+85cSXFnHJaE41nWDDPqZQYFhaZ3x2i7e/d/sKlZTfJtd3csz+G0q20EAUyo0jeYhFUZyMAff9bvh7TvH1WYTOLiWNPHuHmUOZJG2gt5/wCUtx/zGyuLKziE084CKg8RnP4I0jGcp6Y/esjVVnUVbKvgH6/faY123atdfQfqfvpFdlfGSDx9ksS+IYyso2Pkc/h/fFMIr22mBBzzlTnBDA8EEHisymofD2oPNay/O2yglLW5DLKibz+Ke3OP2bj7Vfcabquj2V1NE4ugyqLa4tiJbYAEku+eVJGOvHvWF/A6ikbwMA9oiymyr4hH1jp1jYyzyWA8COdhJLbxkCDxQMeJGv5Se4HBwOOOadW+G7HU989pIllqEkiPJN4auJdqbNnmzgHqcA8jpWaju/iqK6023jIna6nhRolijlcRs3mZWjwMAZJOeK2sSa+ZJx/hEgiXPg+Le2peQZ6Ntzj96069RegC2LuEhXbO6ZfSfhbX7LXdIv7mO1eC1nLTSxXK7iBE8YkCEZ5yOK1T6dp1vqV3rV1cM8m55EjkOLa3AH+YRnG4ep6Z4qrUofiJLV5bKyQXMJLCB7ncs646I6gAEe45x2r5xqOqfEupskepPBY2VvMr3ERfzSFGHkkVSSecdcCtVLKCu49R2PWWkQWkbzx/czW6zqcetm4tWMi6e0iKgjOyWRUIYsxGeGPb0olb+8tpRKokmtpNqyogLSQsOFcL1K44bHoD25zuZAI/DBLbYwCCMAu23k0Vb3htZpkc7jGVUsDnzZweDXkLr7rLBYT78T29vhND0hKxggTbQXUNzHlWB4wRnmr4QQuCc4z+nassmo27YcArJg+dPLk9gfWjrbWUJ2TrtIwC3PPvgUxbK7LBYxwRPNajwvUUgkDIjyRY5opIpVzFKhikB6FGHNYK70+6E91EioFileHZvfHh5ALZA7jmtqLuCVNyyLtHLMThQOuSTWfm1OILezfLhUeSRkLFRNLgnHB4GccV13LAiYF69jKbSNLWOTcsYGwGV25O1ecs7k/1ou4jis4vmZN8iOokheMBhsxuVFGeT6cUqilS6uLJrlJgV2yLbhh8vuY4UsPzEe/HPtWlv4U1G1l08M6yy+CsbRgCSN8jzjPHl6/SlKiWejvEryOJmLZ7y/uJI7KO9uACGlR9iJED5gJZM4yaMvB8SWqpvsLZIlyxkVhMq/6iT/atppelWelWcNlag+HGMvJId0s0p/FLIx5LHv8A+KvuIFlinicArLFImcDupFai+HVque8NUwOs+QytL4yzNksJPEDN/wBxy2McYNMLq5SOOOYKWEg8NgDgnjPNCzLtgkMjY8IHezcAAHGTQhvLVljDSNsQfiKkKeMZ5FUGQngDIlvwylbNSA5wBye0vuFWVopQ263kAYL+F17FSM9alDFKgf5fxSzsIo9uQWLHgYHr3oP/ABXR4N2+QsByuwMw9TnAx+9MrS+nt7NNTgtnaO6Zo7UXLCLxVUEl405IXtnPP0NMSi4jhTie3fWJWnlqd7e3XP37wvULHRdM0vb8jam7KIEnMMfiG4IwZN55zmntwul29pDBa3PjyweEpImErAKNrlmPH71lls9Y1l4J9Wie2hl8B7GJArIymQHMg5GD05PfPamt1YBJIkVB4rtcDw18xLK6LGigeuf2/S2htRhu5bP5TwFrtY5Zpo9AZ5bhyAdsUZ3Z6gtwM/vWX+K5Ij8QajgFgiWythgB4iQoD/t9q2lnHHoGltJckNcFTNMAR5pMcRg+g4H/APtfN5Iby7mmu5bmB5LiSWWQiP8AEZGLMFJPboPpW9c3pAPWP0w5zKGdGHRgSQCcA5z9agYU5KJyvTrj3JAoh4JBhfmYVxtOPDBP2O7GKqeC8GcSr5sgHY2P2NVRntLuRKCZQDkDH5eO1UNg43DB+maMkt5mUE3PTAzs4A6cgHNUSW2DzcpjJ/Ix/vRhjBOO8ic7S7A55Eeeucds12NySVOSR5gxUk/oeKoW7LqSwUDJwx4+4qPzPmGX7DGBwaeBFlsQkO4cEZ3EjKjjn6VcC4JZ2O09MBs8eg60K1wOcDLHHm6gD1zioNLKeSy7QM9DjFFsJkbwIZKxZAd8hCgY6tj+9Ofh/USN1rIx4JeHdn8J5K5/cf8AisuXkIypYA8gc8D6VKOeaF0kV13RsCpA82R61IXEB3DcT7BbTW93BJZ3aJLDMhjdJOVkQ8FT/avmfxToE+jSNHzJZl2uNOnb8y9XglI/MvB9xk+oGm0jU47yGORWwwwHGeVYdRWkdbHV7OfTtRjEkUy7WBOGzggOjdmHY/78u4bgyK7mqVq/+rdR+xnz34NvIVaaa6njW6dptsj4XcZXxyw4w3GRgdK1WqPHqOm6naxyqJxGY5Ii210cFXCsOuDjj60j074Xj0W81XS9RXxrW8ET6XeEbUkEZZgoYHiUclh36jg8XajbXEMEdxCskz27Lb+Ln/MjzkRyPwfKM+p/WgVBWCBG4Uhdp5mOgtxbyiOdnilfzL8wjJuOcHBPFNrLU9T0iYtbSlVJxLC2WgkHoy/361sPl9H+KNLWN0SOeAKgaNVEtpcIOgH8p7g9Qf0yEmk3Fje3NnIjvEu1QzB2NpJIMxyIRy0J6Hjj6rya2EjDiaaawWZruE2/w/qGj3TtfQQLBdCHwru3jwdoJyGTtgnp0961sbxSKGRgynoQf2r5NYzf4ajFLJRqcEjmbxJHBaA9QojIDAdfoQe3Gq0y9mvIlu7bfby5KspO6KTHByBwR+4qvYoGSombqNPtO5fhmzwpFZ/X/hrTdZhk8SJUuNpEdxEAJRx0Y9x7HNUx/EMcd18her4F3sV04YxTAnGY2I/b/gaJqMLYy4rNt1KEbX4+cqhSpzPmtxZXdi5s7sFZUwqPjCSKOjA0NEGhlQXALxmcTyu2dxwM4ya2Pxdq+kRWwtGiS51CUAwop5t89Hcrzk9l70k0v4dmuBHc6pJIFKjZbK5DlTyBKew9hVKvQM5O5vT99J7/AEetUaUX6r0joPdvpF8bpI+y3R2/ikoPMznPOPKMVZcXske4vZXkRGDvmhZV6ddy5rXD5Owi8OCKKKMA5VAFH1JpRqesokTGOKVwsjRs6j+FwA2Mn2NNs0mlQYP7ymfH6i3wen3JmPi1Xx/HYtIAWK4YkBsHGSucUv1G8uJ2jFqZppmZfCKKzrK6+ZkA9AOtOXgjneSV4vA8Z5GCugBIkAYyFAOmc4q+1s5oI7FI4pGthcGSR58bipHJVV4UEjjrSM00HeBn5TxmtsNtrPnOYz06ItZxsQ4mR+GPUKWG4fQdq0+iyG5vnlwDGsUkaN33KRlh9iBWbivI0tLvbFtKO8S44Xc3nZx7DuK2Hw5b/L6VZ5/G6mVz3JkYt/tWfpENt4PTHMq1gdo7BqLnIGeeRmokkkKO3JIqMriOKSQ/kR3/AP1BNbi6gvuXsJaK4nw/UxrNxql1HLcxtYWt/KyQIhhEnhuSu8KOfue1BmbWLRxKFgdHJLIyBkBPoOGx960smn307yTGM5kLSOzHALE9hQdpp0uqXq2aBlii5vJOhjQflXP5j2/WhrdrABgYlfDTvw9pVx8RS/MXkMKabDKcpHHt+bkBA2A9dg/N69KbfEc0b3HhrgR2CmGFUxjcQN2MdPQfSnN9qdjocEOn2uxLkxqsaoMrbRYwCcD8R/KPv9cRrF06XLhgqjkumSSsrdQe+e31q++K02r1npNGD4Zpzq7B6mGF+Z9/pA4fibWdJumjYiW3iJUxT5cLuIb+Fz3r6xpFg0QXWNRQpM0Si1t2Xa0Ct5yzqf8A3GJ6dhx9M/8ACvweIJYviHXY8XKhH0+ylGfl8crNOP8A5P5R+Xr1/BoNX1RIIZriQnamVRM8s7cBR7n/AJ0o0pRAHI5nnV3NyYh+K9VaZorMMfMVlmCnlIxyiffqftWcSYJwmB4YDYU4HPcZ4oaeaeaeeeZ1MkjFmYc5LHoOO3QfSqw6hOVBYcEkAH+lMIB5MtD08Qx7w+bd748o7+poXx1IPO3tk9qrJVudqgHoDnt6cUOzAgoE5GSD0wB6E1IUSSxlzvk5Hmxz1x96gJscsvJyOT6exocun4dpzjqTiqjjJwTjPckmj2iDmRSbEfLEktn8pG37810SPnOOi5OTVIt0GMXIyv8A/HnP05xXTG2CfFzj/tHX7mpDAQirGXCVmGBjHrk9vSpLI3QtkH8QP/mhxuzje3TghR+9dAK43Oxz1yBj+tduEjYYR4gzhm8ynjg9PtXGYEnknd6Zz0qKRBgzGcjjH4OD9gaiYIxn+O5OeQoC8fSo8xZ2xobpuoPp86SglomIEyj0z1A9RX0SyvEmjjkjcEMAwIPXPQ18tEaBmxJIM46r1pxo2pGwk8F5Ha2dht3DiJj7+hrt4nFDPqE13bz2ptruGSRJPKHRd3gsASsrYO4YPQgH9KjfW9veWEaRzQxvaDxopnZdiFRhvFGQMH82aWW1yrqCDnIBFGSQ6dqEMlrfQpLDKpRs+h9SOaZnd3i1JQ5HaZnSrzTrTUTdwatpfy0/8K9jknNsyPySFim54P4Tk8GtPqTWDWh1TxIzFCq+JOhDxmBmxu3JngE/avnfxF8EX2lCW708SXmmcsQo3XFsv/eB1Ueo+/rSzSp9WkjbTo9Tu4NOaKYYid3jIlHni8BTls9CPv35WdwPqlpcalsscET6imnQXLWjSDcYcTxyKcfiGNu4dVINHWljBYqyoGSIbnAkPkjHLNgt0FfPP+pDpNg+kWE0zSIgjW6cpI0W597CNOmR0AzgfalX/VepW4aOaJbmJwTIk8txiTd1LKHxk96AMDxBwpby9/E+p6jBompLCskltJPABJFiVQXjbBPhuDg+uMmsHqt7dDV1tdEupvAsF2XLh8xPM3JU7sjC9P1pXF8QsMTWNkseHeRo3kMoYNgFAu0Lt9sfej0Yli6RRR7z4kiQ/h3Hr15qrqwqAMwzC1CrpAr9fkfvpDdJWztJpLu8Zri9Zi0bkbljJ6sC/JY+tPItd0w3ojluJIN0apKoQsHfOVKsOR6H1z7VmikiS4YHYcEHpjPIIqu9V4wsu1VeF1O88kKSAf8Aesqy12wAcShqPErtVZvtOf2H0E3D3WlB5HDvNCUG9VBwGc8Fg3p3pL8SRMLZJYPFlAjMFrbW6yM8k8kgO/bGOcAetCQ6nPLCERIzCe1spYzZYLxjmnsEl2zRW0eVmZd+FGXRPw7nJ8oHpWTpabGt5XPM4MXExUWm/E7RGWTT5UYnypJLGrqzc8oWz0+9M9K+eubmeK6jmtpIrVdzMQpKhjgbW4HtW40/S4bd0kupjNIz5854BYjJHvWC0/VEGp6vdSbJLuW8n8PezLD8ujlUTy5BwPVa2NXpwKd7Lg/0gFRjMohvBNc6payod9sAtq6MfDZZjuKsvTdgda30WuwRRLZ2EPzdxDHH4hVsQRFgCFZ+59hWF1F7D5u5+VgKS3W1YxktGt1IApKHrtHbNbjRrWK1WJBhmUKXcgBnkIGWbHeh0NQ3GwDjAEKlducwaf4j1+zxJcaIpgG4ztHI6vgfyZz/AENGNrkGq6U0mlrI1xKywNC2BNB0dywB5GOhHXP6Op1SWCVHCsrI3XB5xkda+cXdk1hfXr2b+GGUHZ5hkOAxAYcda0LNOhoZaxgy6NtgPHIj57qWSzdlVBNICmVUNjHlLAZHP3oFLnT9FsVkkllhlupGzcNArs9zIcZMbEZx27AD9VFpqN1ClwEiJicKIzKVYhgcsyrjH0oL5e7vJ4ltxcTyzynEIkdvFY55JfdjHc9qx9MmpXgtgffT7MrLcisN3PynLf56O5vrt4mur+KQx2yswYSXknImc9wowR9Rx6az4Z+Dl0511nXXW41AN4tpAQSlszebxGDdZM5x6fXkPtN0m00qKGW4WN7zYCoGCI2KgEg9c+9dubpnyzEcdAOgFekqUqu634pZ1mrs1tnmWnpwB2A+U7eXZbczMFUAnk4VQOSTn96+eavqaajP5WJtoQwhQcbj0Mpz3Pb2pvq11JdrJaxO6RtjxXQqCwBzsG4Hj1pQukW4UZeVjnjzRgnvxhaW1y55MhKjiLAqnbiQBh0Y44J9QOK8z4xtLMMYcnG6mbaVYoT57jkZA3ZAz1xhf71WNOtgeGlYnplxnH6V3nLDNTRY8rYwuQB2PIxQ7MpJ4bbwOD0zTmTToB03kn/v6feof4fa98lhnyh+oovOWR5ZiR9xzt6Z4VhzQzOAeVOP3zWhexsU2+VsDkAOxNQ+QsJCNyTcDIwW/wB6IXrBNTRWiIcficHgnIA45zkCpG2t8FslAPMcEk/oRQXjyqeH6nndjFeaUPyxOR6c5/vRAQ8yDcFiGP4iBz2+ldDBs7nYYHYZz+9VFsEcFgMHnIz+nNc3Oei570WMSACTgS5CADhjknjqOatlLKIskcj3yKqRJyo8g49v9q6+dybzt4IUAkk/QUo2KTgGONLqu4rxOloyVG7Izzw3FeDITkMOeMDIP3HSuLk9AQpHJP5vrU0Ug9CB9Rt/596gmAI+0fV3g2wzN/DBARz+X2P9q2VtdpIoIYdjxXzJt2MAoRnOOKaabqlxasEmO6EnggglP07UaP7xbpnpPp1tevERg5X0/wBqTax8G6Rq7SXuluLDUH3NMkZK21wx67kX8LH1A+o71Va3ySKpDAgjORyKZRXDAhlbB9qsggjmVSs+a32kyaZI1vcwy206jO2RQVdf5kccEe4NJrtTI0SLy7KACeBx357V9suhY6rbNZ6hEro34Hx5437MjdQaxGo/Bt1E0zWtw5hJLx4QP1I465BpYpGcgx2nprtbFjYmY0+FoTEB1JKsxBzyDyKcxBVYMC+eM47+2TS68034h0thNKHmt0IDOuSmPRu4+4oy0v7aTaCWRuCQy7sE9siqXiKtwccYjPGPUUKfCBiP7a7tLkCC5jCPjCOCMH/VVs1ijpJExBJUgA48yEYyO1Z+eZEYMrAdw2P7U3sdXs3SOO6lilQdiTHKv0P4f3rAt3KM1zFXB6wbR5zpkm2S1QPB4sdvEjNsXP5mB59/vWz+Hbhro3k0kO0iRQxAPI255zWd1KxtrhIri2cMyrmCVMZbHIjlHT71lotUuFF3azROZmmZopVu5UHhHjbJDGcEjpyRVnQ3Mzlx26iWfMPQzbfE2urZ/N29rOWleB13W5DC3aUbMgjjdz9q+f2cbRrukJChx4Q6NxxlqJW3uJ2IVSGSMuik8M3X8PTPpVUcu/lgGfGFXjHpyKsWXNYDn/EQzlo+tWcqjksVzuHlzyD1Ga0+j6i7tJG5yyhShPDFenP0rL2UswgKk9OityD9DXluXMm6MlSAxOCQRj3FKrs8s59oCOVbM+gz3hETZOABz6n2ArAa5ruzUUgt5FkUoqSgYAEpbDLu6HAxmm6Q/EFzod7c2rM0yAi1jSLxZ5lJC+QswAPP6DNC/Dvwk899PdfEbCM2TDw7KI4QO/mJkYck+v8AWtul6/LGOp/ebNNiIhY9TLdB0e+1ILIU2w5O3PC46Akjt6AftW2trXT9IQrbKrXDKFeYgE4/lGOMewrst5DFGILZFihUbVCgAkD6UpuLxVBJb6UuuhazuPJ/b6f3lRUxC57rJJLEk9SeprOalqW9jBEy5wd7Z4GPyig9Q1dmLwwN5ukjj8vsp9fWligbY9xU8583GffilW254EvVVcZMOVxxliFHrjH611pAAo9ASuF/oaGJkIKlRgHcAC3APbNcJKqc8A5JG4+nuargSz0lwk3AAu2McjauT9KqIXdne3Xy4wDxVWIiQoZssOTkkZx+lVyQ8AiUbcHkg8Y980WMSJcHX+Jksx7bvf2FQzt3cnc3A4B4qgELjcCMYzlxgn2Aqsv5iMt7Eciix7SJfLM6rkMSQOQAcCqoLhGHnY7+TwCBj717fjBxwcls8/0r25ePKuMdwD/SpnTMu2SRkY9ckCosBg4Iz6d/61JbiLcMwS9ecr/5rpuYiD/BZT/MqkVe5HaV8j3lIjcsoJ6+9GRqidOtChxvyOBirQx/aqtzMxxN7RUqgDHqYaZkVeQcDO4qegPqKVz3Em9MjlM4b26jHajU56+lVvaySM20gJwQD2pdJVTzO12msu+AyFvNPwJH2ZyQevB7YxRJZGyHdCuGO+LIbOCQGj9+nFQFtIoyyk4GS3PPvQc/lYMOxpgcM2BKbaDauc8wobTgkt9ttWjYuDg4/Sly3ig4JYAcY25H7UQLy3IGWYn/AENmn7DM4MI0s9QltGG0los8qT0/01q7HVIZ1VkcEdx3B9CKwJvIDxub38pqUV74TK8LlGHcK3PsRRKSsBgGn1OK4Vu9FxXLpwCCpHIPIIrA2GvwuyxStsk7E5CsfYmtHDeq23zfvTgZXK4mhdbW7jdAwidlK5wrKMjH4W4rC3nwlr2ntJNbKl9CS75gUJMMnP8AldP0NaVbhT35oyDUJocDO5PQ0NiLaMNAYFhgz5q7uxZZQ6Sxna0cilHU+hVgDVUUVvJd29vPK0SS7mdlGSqAZz7ema+sTLoWrJsv7WGQ9Azrh1/0yLhh+tIZ/gWzje6n0q8kzcbd0V2wk6ZwEkHmx9c1QbRsikpzKxqI5mRh1JLANaxyMYHkaIMSzFUbID59u9I5/mFvi0St/HZZDtGVDHqcn9fvWpvfg/4hGfDtSxyeUYMD+h/tQo+HvilGXdply/HmZBuwR0wOKr01+XlgvJ65gDd3jeCOJNOV9xaRwpmChSfEPRQOoA9qQvDJDI+zZiRjtDqFbcecZptb6B8cTyKYrB7cKceLdSRRgDuQuWb9qfN8EwTzQXOp3hCQKcQ2x2hmbkl5G839KXVo7t2SODG7czMWrX8xW3UQmTHKxMS5PugBp1YaHfeOr3lu/gAEyI5aJHGOhYc4rS2sejaShi061ij/AJnAG5jjGWY8n9aruL6SXO5uvYcD9KtfwCnq35QhUM5jCO9gtYo1t0QFcKqqMRooGAFFBtcEPPK7AvKxdz6npSyS6ROSaT3+spCDluSPJGpy7farWxVxjoJYCx3dakiKx3DgE8ms3d6ncXLiOIlYj+NsnewPGF9KSS3+oXTktEFTJKJvyB/qOK6Z73ZkQxcA9ZDz7cD+9LsYngSwigcmMVAjZWDYXpllY7f0ojcQQdoG706cd8EUjjurohfJGOCD/EOOft2rpubskKCCzYDec+YjgA0nyjHiwR8JHGSWyBjB+vOOa4XBB75HP4Rz16UoS+vCiqIUGw43szFSfsK785fKM5t8dPKrnjrz3qBU0LzFjINjoO45G3j7VBlByShOcnJA69BilZ1G/YsSYMjooXAb3Ne+a1BsZliUkkAhTyO/aj8poPmLGDGTP4QQRjowHp0zUEG7I289xnp96CE2oFgRcR5HHEZAHH2rni3wLM9wjdcllbBJ7jGKnYRO3gw/HU4VOo5Of0rhRh+IjPP4silwe5GMzKD/AKDzn0zXjPecD5mPgdShPHpyaHBk5ihnAzhueo64ryyHv7mgy7cde/WuiXsQePc1qFZTDYPMuDZNMViHhBgfrSlWq9bmQLtzxVKysnpPRpblQRGSJkZFd8Tw+SaXR3UiZ7g1GSd370HlCWBaY2e9zCycc8UolfJNR8Q4xmqZH4NHXVgxNtoVTIjbk9M59cVLKjjrVII9P3ruR6H71e2zzJbJJl2QDwP1qLPjof3NVn74rmc9q7bI3SxZG5yxpnZa3eWZCsxlh/lJ8yj/ALTSnAx+3XmvYxjIqcCDmfQLDW7W5A8OTzd0bh1+opvHeA45r5SGZSGUspHQgkEfQimlrrt7BtWX+Ko4z0fHuelAV9p0+ki5U96Ijv5Y8bZDge9Yq3160lwDJsb+WTy/ueP3o9dQUgEHIPcdKHOJ02cWuyp+Iqw96I/6jjHUDPtWGN8h71U96o/N+9TuM7bNxJ8RO2RGvPqegoCXUZZTmSQn2zxWTOoH16UNLrESjzSjjsnmP7VBJM7bNZJfoPzUvudUiiUtJIEXnlj/AEHWsnPrNw+VgXZn88g3N+nSgg9xM5eR3d/WTn9iKDEIARtd69POxjtVZQePGkHP/wBVzgUGoYnxJC53Hl26sfbNVom5lbGGBGcqAPsDV7+K/Lb22g8FvLnthRiltg8QxmT8eJVwmcg89wfvkVUlxIc5Xk9SfT25rwSNl5R07srNwftgGqSsAzhWz2J6/bBqFRYW4wjezHCqcDrgkCurIoY+XBKlSG5yT9+vpQ3JPmbaABgMSTj2FR3hTxk+pI5/ejAkZhYR1diHwCBk5IBOO5qwRAhiWBOT+Yn9zQhknznzDtzjr9qhvm5B3Hr1zXYM4EQ9IY15MgBHUAZ/epDwFIG5yT2AGPXrQAEgweeecZwD+tWBgOpI74DZGT9DXdO86GDbyTuPUAMBk5681IyRDoFP1JJB96DSVS3Q4HU54/TNWGcY4C4PByo4FAQTCBlrtEeoQ59Tj7cVAGDqQn3P/BXNysM+TpknoRVJmjBwdgH+o9fpiuAk5MUSAB5l7K7hR6AMRUdq4Jxzux+1er1XpVkeldr1epDdZsaf+WJIV6vV6hlrtOGqW6/Y16vUadZU1Pwmc/5+1dr1ep0yZ3A5/wBIP3qI4z9a9XqiRLOx+gP3rwA8vuea9Xq6dIt0H/O9QbgDFer1TOkT0qSyzR4Mcjqf+1iP6V6vV06EJeXpwDPIfqc12S7vB/7z/rXq9Qd4XaVpLNI38SR2GRwzEiitq5AwMbh/SvV6obrOk4OTg9Nrf1oxPLs28ZTBx35HWvV6kPDSFkKBkAZL4P0x0rm1RKQBwxBbk9cV6vUiMHWRIAWUehOOTnk+tLZshxgnoK9XqdV1g2dJw9frmrYwCVz6Z+9er1PMCWEkbwCeBn7815wAVHqwz716vUuSJxfy/T+9dUnd/wDU/wB69XqgyZYACyAgY839K4VUHgDkf3xXq9QyZ5uA+OxOKiscfmO0ZyB+1er1EsEz/9k=" // Replace with real image URL
//             alt="Salad Bowl"
//             className="rounded-lg flex-1  shadow-lg w-96 h-96 object-cover"
//           />
//           {/* Info Box */}
//           <div className="bottom-1 left-10 bg-yellow-500 text-white px-4 py-2 rounded-full shadow-lg ">
//             <p>Salad ⭐ 4.7</p>
//             <p className="text-sm">10-18 mins</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FoodOrder;
import React from "react";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center">
      <header className="w-full bg-white shadow-md py-4 px-8 flex justify-between items-center">
        <div className="text-2xl font-bold text-red-500">foco</div>
        <nav className="flex space-x-4">
          <a href="#" className="text-gray-700">
            Home
          </a>
          <a href="#" className="text-gray-700">
            Menu
          </a>
          <a href="#" className="text-gray-700">
            Service
          </a>
          <a href="#" className="text-gray-700">
            Shop
          </a>
        </nav>
        <div className="flex space-x-4 items-center">
          <button className="relative">
            <span className="material-icons">shopping_cart</span>
            <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">
              2
            </span>
          </button>
          <button className="text-gray-700">Sign In</button>
          <button className="text-yellow-500">Login</button>
        </div>
      </header>
      <main className="flex flex-col items-center mt-8">
        <h1 className="text-4xl font-bold text-gray-800">
          Order your favourite Foods
        </h1>
        <p className="text-gray-500 mt-2">
          Fresh and tasty seafood curry sit amet, consectetur Curabitur accumsan
          auctor pulvinar proin sit amet.
        </p>
        <div className="mt-4 text-2xl font-bold text-gray-800">
          Total order: <span className="text-yellow-500">$24.30</span>
        </div>
        <div className="flex items-center mt-4">
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-l">
            -
          </button>
          <span className="bg-white text-gray-700 px-4 py-2">2</span>
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-r">
            +
          </button>
          <button className="bg-yellow-500 text-white px-6 py-2 rounded ml-4">
            Buy Now
          </button>
        </div>
        <div className="flex space-x-4 mt-8">
          <div className="flex flex-col items-center">
            <img src="burger.png" alt="Burger" className="w-16 h-16" />
            <span className="text-gray-700 mt-2">$3.25</span>
          </div>
          <div className="flex flex-col items-center">
            <img src="cake.png" alt="Cake" className="w-16 h-16" />
            <span className="text-gray-700 mt-2">$2.25</span>
          </div>
          <div className="flex flex-col items-center">
            <img src="salad.png" alt="Salad" className="w-16 h-16" />
            <span className="text-gray-700 mt-2">$5.25</span>
          </div>
        </div>
        <div className="relative mt-8">
          <img src="salad-bowl.png" alt="Salad Bowl" className="w-96 h-96" />
          <div className="absolute bottom-4 right-4 bg-orange-500 text-white px-4 py-2 rounded">
            <span className="text-lg">Salad</span>
            <div className="flex items-center mt-1">
              <span className="material-icons text-yellow-500">star</span>
              <span className="ml-1">4.7</span>
            </div>
            <div className="mt-1">10+ Reviews</div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
