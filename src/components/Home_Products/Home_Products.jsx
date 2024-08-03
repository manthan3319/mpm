import React from "react";
import Slider from "react-slick";
import { product1, product3, product4, product5, product6 } from "../images/Images";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home_Products = () => {
  const products = [
    {
      id: 1,
      image: product1,
      title: "HRX by Hrithik Roshan",
      description: "Printed Pure Cotton T-shirt",
      price: 600,
      originalPrice: 1200,
    },
    {
      id: 1,
      image: product3,
      title: "MASCLN SASSAFRAS",
      description: "Relaxed Abstract Printed ",
      price: 512,
      originalPrice: 1799,
    },
    {
      id: 1,
      image: product4,
      title: "LOCOMOTIVE",
      description: "Men Blue Solid Denim Jacket",
      price: 923,
      originalPrice: 3299,
    },
    {
      id: 1,
      image: product5,
      title: "Roadster",
      description: "Men Maroon & Navy Blue",
      price: 599,
      originalPrice: 1599,
    },
    {
        id: 1,
        image: product6,
        title: "Mast & Harbour",
        description: "Men Black Slim ",
        price: 599,
        originalPrice: 1599,
      },
  ];

  const settings = {
    nav: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-[#a9a9a94a] py-[100px] product_section relative">
    <div className="lg:max-w-[1440px] m-auto">
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} className="p-[10px]">
            <div className="  border-[1px] border-[#0000004f]">
              <div>
                <img
                  src={product.image}
                  className="w-[100%] max-h-[350px] min-h-[350px]"
                  alt={product.title}
                />
              </div>
              <div className="bg-white p-[15px]">
                <h1 className="text-[20px] font-poppins font-semibold">
                  {product.title}
                </h1>
                <p className="font-poppins text-[15px]">
                  {product.description}
                </p>
                <div className="flex gap-[10px]">
                  <p className="font-poppins">Rs. {product.price}</p>
                  <p className="font-poppins">
                    <del>Rs. {product.originalPrice}</del>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
    </div>
  );
};

export default Home_Products;
