import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import { sliderData } from "../utils/data";
import { Link } from "react-router-dom"
import { Typography } from "@mui/material";


const Slider= () => {
  return (
    <section className="w-full h-full">
      <Link to ="/">
        <h3 className="text-tertiary font-semibold mt-10 ml-[7rem] cursor-pointer text-[24px]">Salary<span className="text-secondary">PayDay</span></h3>
      </Link>
      <Swiper
        className="h-full swiper"
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
      >
        {sliderData.map((slide) => (
          <SwiperSlide key={slide.id} className="swiper-slide">
            <div className="flex flex-col items-center justify-center h-full mt-[-4rem] text-center gap-3">
              <div className="relative">
                <img className="w-[70%] mx-auto" src={slide.image} />
                <img className="absolute w-[20%] top-[-3%] right-[20%]" src={slide.vector} />
                <img className="absolute w-[10%] bottom-[5%] left-[24%]" src={slide.icon} />
              </div>
              <Typography variant="h3" className="text-[32px] font-semibold max-w-[450px] leading-10">{slide.title}</Typography>
              <Typography variant="p" className="text-[14px] text-[#595959] max-w-[385px]">{slide.details}</Typography>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Slider;
