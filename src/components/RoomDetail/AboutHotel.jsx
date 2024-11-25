import React from "react";

const AboutHotel = () => {
  return (
    <div className="felx-1 p-5">
      <div className="flex gap-2 my-3">
        <div className="px-5 py-2 active: bg-gray-700 border border-gray-900 text-gray-50 rounded-full font-medium">
          About
        </div>
        <div className="px-5 py-2 active: bg-gray-700 border border-gray-900 text-gray-50 rounded-full font-medium">
          About
        </div>
        <div className="px-5 py-2 active: bg-gray-700 border border-gray-900 text-gray-50 rounded-full font-medium">
          About
        </div>
      </div>
      <div className="font-medium text-2xl ">Description</div>
      <p className="font-semibold line-clamp-6 text-lg leading-7 text-gray-700 ">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem
        illum accusantium facilis, non quaerat voluptatum sed, ratione placeat
        necessitatibus officiis, maxime maiores repellat quidem iusto quam
        sapiente atque enim deleniti nisi quasi aspernatur! Dignissimos facere
        ad quasi nostrum impedit tenetur velit animi sunt quos soluta expedita
        quis, a odio hic esse et id placeat facilis maiores! Qui a eius nemo.
        Numquam tempore obcaecati consequatur nesciunt molestiae rerum
        doloremque laboriosam, quia veniam hic ipsum voluptatibus est saepe! A
        doloremque tempora vero iusto eaque praesentium qui dignissimos minus
        similique eos illo, nulla velit quos facilis in molestiae nam dolores
        enim sunt magnam.
      </p>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26972.91386324042!2d38.73669033847256!3d9.02497920083454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8f6135c03ef9%3A0x5b7c04505388426e!2sNational%20Museum%20of%20Ethiopia!5e0!3m2!1sen!2set!4v1731321737051!5m2!1sen!2set"
        className="w-full h-72 rounded-[20px] my-4 shadow-sm"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default AboutHotel;
