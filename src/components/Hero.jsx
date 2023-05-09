import React, { useState, useEffect, useCallback } from "react";
import { TbArrowsLeft, TbArrowsRight } from "react-icons/tb";


const Hero = () => {


// Define an array of skate photo slides
  const slides = [
    {
        url:"https://images.pexels.com/photos/6828662/pexels-photo-6828662.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
    {
        url:"https://images.pexels.com/photos/8595599/pexels-photo-8595599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        url:"https://images.pexels.com/photos/1426100/pexels-photo-1426100.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        url:"https://images.pexels.com/photos/11421248/pexels-photo-11421248.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
    {
      url: "https://images.pexels.com/photos/9454708/pexels-photo-9454708.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
        url: "https://images.pexels.com/photos/9246459/pexels-photo-9246459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },

      {
        url: "https://images.pexels.com/photos/15026079/pexels-photo-15026079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },

    {
      url: "https://images.pexels.com/photos/13517407/pexels-photo-13517407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
        url: "https://images.pexels.com/photos/2626100/pexels-photo-2626100.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
  
    {
        url:"https://images.pexels.com/photos/7645367/pexels-photo-7645367.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },

    {
      url:"https://images.pexels.com/photos/10590453/pexels-photo-10590453.jpeg?cs=srgb&dl=pexels-andrew-lomas-10590453.jpg&fm=jpg",
    }, 
    {
      url: "https://images.pexels.com/photos/7645811/pexels-photo-7645811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      url: "https://www.verizon.com/about/sites/default/files/2020-10/kickflip-virtual%20skateboard%20contest-apache%20skateboards.jpg",
    },
    {
      url: "https://images.unsplash.com/photo-1509043693863-a00321f7e7c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1495787045306-b20438f8c031?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const previewSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };


  const nextSlide = useCallback(() => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides.length]);
  

  const goToSlide = useCallback((slideIndex) => {
    setCurrentIndex(slideIndex);
  }, []);

// Set up a timer to show the next slide automatically
  useEffect(() => {
   // Create a timer that will call the nextSlide function every few seconds
    const timer = setInterval(() => {
      nextSlide();
    }, 8000);

    // clear the timer when the component unmounts
    return () => clearInterval(timer);
  }, [currentIndex, nextSlide]);

  return (
    <div className="max-w-[1640px] bg-black h-[600px] p-4 m-auto relative group ">
      {/* Overlay */}
      <div className="absolute w-[1500px] h-full max-h-[600px] bg-black/40 flex flex-col justify-end">
        <h1 className="text-white font-bold text-xl sm:text-3xl md:text-4xl px-4 mb-3">
          SKaTe Or
        </h1>
        <h1 className="text-white font-bold text-xl sm:text-3xl md:text-4xl px-4 mb-10">
          DeSTRoY
        </h1>
      </div>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"

      ></div>
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-crosshair">
        <TbArrowsLeft onClick={previewSlide} size={30} />
      </div>

      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-crosshair">
        <TbArrowsRight onClick={nextSlide} size={30} />
      </div>
      {/* Carousel Dots */}
      <div className='flex top-4 justify-center py-2'>
      {slides.map((slide, index) => (
          <div
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full cursor-crosshair mx-2 ${
              currentIndex === index ? "bg-white" : "bg-gray-500"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
