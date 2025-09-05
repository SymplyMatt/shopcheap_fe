import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper/modules";
import { useRef, useState } from "react";
import { ArrivalsAndCategory } from "../../utils/utils";
import { useNavigate } from "react-router-dom";

interface ComponentProp{
    categoriesAndProducts?: ArrivalsAndCategory[];
}
const GridSlider: React.FC<ComponentProp> = ({categoriesAndProducts=[]}) => {
    const swiperRef = useRef<SwiperClass | null>(null);
    const [slidesPerView, setSlidesPerView] = useState(4);
    const [activeIndex, setActiveIndex] = useState(0);
    const navigate = useNavigate();
    const handlePrevClick = () => {
        if (swiperRef.current) {
            swiperRef.current.slidePrev();
        }
    };
    const handleNextClick = () => {
        if (swiperRef.current) {
            swiperRef.current.slideNext();
        }
    };
    const renderCustomPagination = () => {
        const totalSlides = [...categoriesAndProducts].length;
        return (
            <div className="flex items-center justify-center px-[20px] gap-[20px]">
                <img src="/images/prev_arrivals.svg"  className="cursor-pointer" onClick={handlePrevClick}/>
                <div className="w-full flex items-center justify-center">
                    {[...Array(totalSlides)].map((_, index) => (
                        <button key={index} onClick={() => swiperRef.current?.slideTo(index)} className={`transition-all duration-300 h-[4px] w-[20px] tmd:w-[30px] ${activeIndex === index ? "bg-[#141511]" : "bg-[#F3F3F3]"}`} aria-label={`Go to slide ${index + 1}`} />
                    ))}
                </div>
                <img src="/images/next_arrivals.svg"  className="cursor-pointer" onClick={handleNextClick}/>
            </div>
        );
    };

    return (
        <>
            <div 
                className="w-full slider_arrivals" 
                onMouseEnter={() => {
                    swiperRef.current?.autoplay?.stop();
                    setSlidesPerView(4);
                }}
                onMouseLeave={() => {
                    swiperRef.current?.autoplay?.start();
                    setSlidesPerView(4);
                }}
            >
                <Swiper
                    spaceBetween={0}
                    loop={true}
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                    modules={[Autoplay, Pagination]}
                    speed={1000}
                    className="flex items-center justify-between"
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                    breakpoints={{
                        0: {
                          slidesPerView: 1,
                          spaceBetween: 16,
                        },
                        1000: {
                          slidesPerView: slidesPerView,
                          spaceBetween: 0,
                        },
                    }}
                >
                    {[...categoriesAndProducts, ...categoriesAndProducts, ...categoriesAndProducts].map((categoryAndProduct:ArrivalsAndCategory, index) => (
                        <SwiperSlide 
                            key={index} 
                            className="flex justify-center bg-[#F3F3F3] border border-[#E6E6E6] transition-all duration-1000 hover:h-[500px] hover:w-[375px] hover:z-10 relative px-[20px] py-[60px] hover:px-[20px] hover:py-[20px] hover:scale-[1.05] group"
                        >
                            <div className="w-full h-full flex flex-col justify-center transition-all duration-1000 hover:z-10 relative bg-white">
                                <div className="w-full flex items-center justify-center new_arrivals_img relative">
                                    <img 
                                        src={ categoryAndProduct.category.image } 
                                        className="w-[80%] h-[80%] object-contain"
                                        alt={`Arrival ${index + 1}`}
                                    />
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[48px] text-[#141511] bg-white py-[8px] px-[24px] flex justify-center items-center text-[16px] font-medium leading-[24.8px] tracking-[0%] cursor-pointer gap-[8px] opacity-0 scale-0 transition-all duration-50 group-hover:opacity-100 group-hover:scale-100 whitespace-nowrap" 
                                        onClick={() => navigate(`/categories/${categoryAndProduct.category.id}`)}>
                                        View all <img src="/images/arrowdirection.svg" alt="Arrow" />
                                    </div>
                                </div>
                                <div className="w-full h-[60px] border-t border-[#D6D6D5] grid grid-cols-3 items-center justify-between">
                                    <div className="col-span-2 w-full flex items-center text-[12px] font-medium leading-[27px] tracking-[0%] px-[12px]">
                                        {categoryAndProduct.category?.name.length < 17 ? categoryAndProduct.category?.name : categoryAndProduct.category?.name.slice(0, 17) + "..."}
                                    </div>
                                    <div className="col-span-1 w-full flex items-center justify-center font-medium leading-[27px] tracking-[0%] text-[12px] gap-[8px]">
                                        <div className="h-[20.5px] bg-[#D6D6D5] w-[1px]" />
                                        {categoryAndProduct.products.length} Products
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            {renderCustomPagination()}
        </>
    );
};

export default GridSlider;