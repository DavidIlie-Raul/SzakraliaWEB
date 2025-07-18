import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const GalleryCarousel = () => {
  const images = [
    "/src/assets/city.jpeg",
    "/src/assets/city.jpeg",
    "/src/assets/city.jpeg",
    "/src/assets/city.jpeg",
    "/src/assets/city.jpeg",
  ];

  return (
    <section
      id="gallery"
      className="bg-[var(--background-1)] py-20 px-4 text-[var(--secondary)]"
    >
      <div className="max-w-full mx-auto text-center mb-8">
        <h2 className="text-4xl font-bold mb-2">Gallery</h2>
        <p className="text-lg max-w-xl mx-auto">
          A glimpse into what we do, create, and celebrate.
        </p>
      </div>

      <div className="relative max-w-[80%] mx-auto">
        {/* Custom Swiper Arrows */}
        <div className="swiper-button-prev !left-[-40px] text-[var(--text)]" />
        <div className="swiper-button-next !right-[-40px] text-[var(--text)] " />

        <Swiper
          modules={[Navigation, Pagination, EffectCoverflow]}
          spaceBetween={10}
          slidesPerView={2}
          speed={500}
          loop={true}
          centeredSlides={true}
          effect="coverflow"
          coverflowEffect={{ depth: 100, scale: 1, slideShadows: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{ clickable: true }}
          className="!pb-10"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                className="w-full h-64 object-cover rounded-xl shadow-md transition-all duration-300"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default GalleryCarousel;
