import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Slider() {
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1974&auto=format&fit=crop",
      title: "Büyük İndirimler",
      desc: "%70'ye varan fırsatlar kaçmasın!"
    },
    {
      image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=2070&auto=format&fit=crop",
      title: "Yeni Koleksiyon",
      desc: "En şık parçalar şimdi burada"
    },
    {
      image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?q=80&w=2070&auto=format&fit=crop",
      title: "Ücretsiz Kargo",
      desc: "400 TL ve üzeri siparişlerde"
    },
    {
      image: "https://images.unsplash.com/photo-1486213113067-5d4d9b1b2a7e?q=80&w=2070&auto=format&fit=crop",
      title: "Yaz Modası",
      desc: "Yeni sezon ürünler"
    },
    {
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1974&auto=format&fit=crop",
      title: "Özel Kampanya",
      desc: "Sınırlı stok!"
    }
  ];

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      loop={false} 
      className="h-[300px] md:h-[500px]"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="relative h-full">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <div className="text-center text-white px-4">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">{slide.title}</h2>
                <p className="text-lg md:text-2xl">{slide.desc}</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}