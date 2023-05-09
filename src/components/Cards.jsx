import React from "react";

const Cards = () => {
  return (
    <div className="bg-black w-full mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">

      {/* Supreme Card */}
      <div className="rounded-xl relative hover:scale-105 duration-300">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white border border-white">
          <p className="font-bold text-2xl px-2 pt-4">Supreme</p>

          <button className="border-white bg-white text-black  hover:bg-black hover:text-white mx-2 absolute bottom-4">

            <a
              href="https://supreme.com/lookbook/39/"
              rel="noreferrer"
              target="_blank"
            >

              LooKBooK
            </a>
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://pbs.twimg.com/media/Fs9LnmPWwAIAFxs?format=jpg&name=large"
          alt="/"
        />
      </div>

      {/* Palace Card */}
      <div className="rounded-xl relative hover:scale-105 duration-300">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white border border-white">
          <p className="font-bold text-2xl px-2 pt-4">Palace</p>
          <button className="border-white bg-white text-black  hover:bg-black hover:text-white mx-2 absolute bottom-4">
            
            <a
              href="https://www.palaceskateboards.com/advice"
              rel="noreferrer"
              target="_blank"
            >

              LooKBooK
            </a>
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://pbs.twimg.com/media/EVo6KZ4WsAAN7Jk?format=jpg&name=medium"
          alt="/"
        />
      </div>

      {/* Thames Card */}
      <div className="rounded-xl relative hover:scale-105 duration-300">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white border border-white">
          <p className="font-bold text-2xl px-2 pt-4">Thames</p>

          <button className="border-white bg-white text-black  hover:bg-black hover:text-white mx-2 absolute bottom-4">

            <a
              href="https://thamesmmxx.com/pages/catalogue"
              rel="noreferrer"
              target="_blank"
            >

              LooKBooK
            </a>
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://cdn.shopify.com/s/files/1/0256/6756/7713/t/3/assets/a507c4f61a09--carousel-14-l.jpg?1132"
          alt="/"
        />
      </div>


      {/* Fucking Awesome */}
      <div className="rounded-xl relative">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white border border-white">
          <p className="font-bold text-2xl px-2 pt-4">FA</p>

          <button className="border-white bg-white text-black  hover:bg-black hover:text-white mx-2 absolute bottom-4">

            <a
              href="https://faworldentertainment.com/en-eu/pages/2023-fa-spring-lookbook"
              rel="noreferrer"
              target="_blank"
            >

              LookBook
            </a>
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://cdn.shopify.com/s/files/1/1186/8190/collections/Fucking_Awsome.jpg?v=1625556885"
          alt="/"
        />
      </div>


      {/* Love N Skate */}
      <div className="rounded-xl relative">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white border border-white">
          <p className="font-bold text-2xl px-2 pt-4">Love N Skate</p>

          <button className="border-white bg-white text-black  hover:bg-black hover:text-white mx-2 absolute bottom-4">

            <a
              href="https://lovenskate.com/news/"
              rel="noreferrer"
              target="_blank"
            >

              LookBook
            </a>
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://lovenskate.com/wp-content/uploads/2019/09/lovenskate_letterpress_flat.jpg"
          alt="/"
        />
      </div>


      {/* Golf Card */}
      <div className="rounded-xl relative">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white border border-white">
          <p className="font-bold text-2xl px-2 pt-4">Golf Wang</p>

          <button className="border-white bg-white text-black  hover:bg-black hover:text-white mx-2 absolute bottom-4">

            <a href="https://golfwang.com/" rel="noreferrer" target="_blank">

              LookBook
            </a>
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://cdn.shopify.com/s/files/1/0412/0133/6481/files/1-1_1024x1024.jpg?v=1683091045"
          alt="/"
        />
      </div>
    </div>
  );
};

export default Cards;
