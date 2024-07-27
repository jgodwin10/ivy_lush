import React, { useEffect, useState } from "react";
import Img from "../src/Images/hero.jpeg";
import Img1 from "../src/Images/hero1.jpeg";
import Img2 from "../src/Images/hero2.jpeg";
import Img3 from "../src/Images/hero3.jpeg";

const App = () => {
  // bg-cover bg-[image:var(--image-url)]
  const [image, setImage] = useState(0);

  const Images = [Img, Img1, Img2, Img3];

  // const Images = [
  //   "/../src/Images/hero.jpeg",
  //   "/../src/Images/hero1.jpeg",
  //   "/../src/Images/hero2.jpeg",
  //   "/../src/Images/hero3.jpeg",
  // ];

  useEffect(() => {
    const mage = [Img, Img1, Img2, Img3];
    const timer = setTimeout(() => {
      if (image == 3) {
        setImage(0);
      } else {
        setImage(image + 1);
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, [image]);

  console.log(Images[image]);

  return (
    <div
      // style={{ "--image-url": `url(${Img})` }}
      className="h-screen w-full before:absolute before:contents-[''] before:top-0 before:w-full before:h-full before:bg-[#00000066] relative"
    >
      <img
        className="h-screen w-full object-cover"
        src={Images[image]}
        alt=""
      />
      <div className="absolute top-0 left-0 w-full h-full">
        <div className=" max-w-[1044px] mx-auto text-center space-y-[9px] z-[999999] px-4 text-white h-full flex justify-center items-center flex-col">
          <h2 className=" md:text-[2.3vw] text-[17px] uppercase">
            we are opening soon..
          </h2>
          <h1 className="md:text-[4.3vw] text-[22px] lg:leading-[80px] uppercase">
            Your New Luxury Destination
          </h1>
          <p className="lg:text-[22px] md:text-[18px] text-[14px] lg:leading-[35px]">
            Experience unparalleled elegance and comfort at IVY LUSH Hotel,
            opening soon. our hotel offers exquisite rooms, world-class
            amenities, and exceptional service. Be among the first to discover a
            new standard in hospitality. Join us for an unforgettable stay.
          </p>
          <div className="pt-10 flex items-center gap-[20px]">
            <div
              onClick={() => setImage(0)}
              className={`${
                image == 0
                  ? "bg-[#F9B600] size-[11px] after:absolute relative after:contents-[''] after:rounded-full after:-top-2 after:-right-2 after:border-[1px] after:h-[27px] after:w-[27px] after:border-[#F9B600]  rounded-full"
                  : "size-[11px] bg-[#D8D8D8] rounded-full"
              }  cursor-pointer`}
            ></div>
            <div
              onClick={() => setImage(1)}
              className={`${
                image == 1
                  ? "bg-[#F9B600] size-[11px] after:absolute relative after:contents-[''] after:rounded-full after:-top-2 after:-right-2 after:border-[1px] after:h-[27px] after:w-[27px] after:border-[#F9B600]  rounded-full"
                  : "size-[11px] bg-[#D8D8D8] rounded-full"
              }  cursor-pointer`}
            ></div>
            <div
              onClick={() => setImage(2)}
              className={`${
                image == 2
                  ? "bg-[#F9B600] size-[11px] after:absolute relative after:contents-[''] after:rounded-full after:-top-2 after:-right-2 after:border-[1px] after:h-[27px] after:w-[27px] after:border-[#F9B600]  rounded-full"
                  : "size-[11px] bg-[#D8D8D8] rounded-full"
              }  cursor-pointer`}
            ></div>
            <div
              onClick={() => setImage(3)}
              className={`${
                image == 3
                  ? "bg-[#F9B600] size-[11px] after:absolute relative after:contents-[''] after:rounded-full after:-top-2 after:-right-2 after:border-[1px] after:h-[27px] after:w-[27px] after:border-[#F9B600]  rounded-full"
                  : "size-[11px] bg-[#D8D8D8] rounded-full"
              }  cursor-pointer`}
            ></div>
          </div>
        </div>
      </div>
      <p className="absolute bottom-4 text-center w-full text-white md:text-[15px] text-[13px]">
        &copy; 2024 Ivy Lush Hotel. All rights reserved
      </p>
    </div>
  );
};

export default App;
