import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ProductCard from "../components/ProductCard";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-6">
      
      {/* SLIDER */}
      <Swiper spaceBetween={12} slidesPerView={1.2}>
        <SwiperSlide>
          <div className="h-40 bg-gray-300 rounded-lg flex items-center justify-center">
            Slider 1
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-40 bg-gray-400 rounded-lg flex items-center justify-center">
            Slider 2
          </div>
        </SwiperSlide>
      </Swiper>

      {/* PRODUCTS */}
      <div className="grid grid-cols-2 gap-4">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>

    </div>
  );
}
