import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards, FreeMode, Keyboard } from "swiper/modules";
const SSlider = () => {
  return (
    <>
      <Swiper
        effect={"cards"}
        loop={true}
        grabCursor={true}
        freeMode={true}
        keyboard={{
          enabled: true,
        }}
        modules={[EffectCards, FreeMode, Keyboard]}
        className="mySwiper "
      >
        <SwiperSlide>
          <div className="  rounded-t-xl ">
            <div className="flex justify-center items-center  mb-1">
              <img
                src=""
                alt=""
                className="w-full h-52  rounded-3xl  object-cover "
              />
            </div>
            <div className="flex flex-col justify-center items-center text-center mx-3">
              <p className="text-base font-semibold line-clamp-1 ">
                Songs by Sound-Cloud
              </p>
              <h4 className="font-mono line-clamp-1 ">1Artists Name</h4>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="  rounded-t-xl ">
            <div className="flex justify-center items-center  mb-1">
              <img
                src=""
                alt=""
                className="w-full h-52  rounded-3xl  object-cover "
              />
            </div>
            <div className="flex flex-col justify-center items-center text-center mx-3">
              <p className="text-base font-semibold line-clamp-1 ">
                Songs by Sound-Cloud
              </p>
              <h4 className="font-mono line-clamp-1 ">1Artists Name</h4>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="  rounded-t-xl ">
            <div className="flex justify-center items-center  mb-1">
              <img
                src=""
                alt=""
                className="w-full h-52  rounded-3xl  object-cover "
              />
            </div>
            <div className="flex flex-col justify-center items-center text-center mx-3">
              <p className="text-base font-semibold line-clamp-1 ">
                Songs by Sound-Cloud
              </p>
              <h4 className="font-mono line-clamp-1 ">1Artists Name</h4>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="  rounded-t-xl ">
            <div className="flex justify-center items-center  mb-1">
              <img
                src=""
                alt=""
                className="w-full h-52  rounded-3xl  object-cover "
              />
            </div>
            <div className="flex flex-col justify-center items-center text-center mx-3">
              <p className="text-base font-semibold line-clamp-1 ">
                Songs by Sound-Cloud
              </p>
              <h4 className="font-mono line-clamp-1 ">1Artists Name</h4>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SSlider;
