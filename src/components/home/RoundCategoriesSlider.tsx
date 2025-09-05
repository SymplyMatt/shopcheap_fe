import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { Category } from "../../utils/utils";
interface ComponentProp{
    categories?: Category[];
}
const RoundCategoriesSlider: React.FC<ComponentProp> = ({categories=[] }) => {
    const splitedCategories: Category[][] = [categories,categories,categories]
    const navigate = useNavigate();
    const swiperRef = useRef<SwiperClass | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const renderCustomPagination = () => {
        const totalSlides = window.innerWidth >= 1200 ? [...categories, ...categories].length : splitedCategories.length;
        return (
            <div className="w-full tmd:w-fit flex items-center justify-center gap-1 my-[24px] px-[20px]">
                {[...Array(totalSlides)].map((_, index) => (
                    <button
                        key={index}
                        onClick={() => swiperRef.current?.slideTo(index)}
                        className={`transition-all duration-300 grow h-[4px] tmd:w-[20px] ${
                            activeIndex === index 
                                ? "bg-[#141511]" 
                                : "bg-[#F3F3F3]"
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        );
    };
    return (
        <div className="w-full slider_featured flex flex-col items-center justify-center">
            <div className="hidden tmd:block w-full">
                <Swiper
                    spaceBetween={12}
                    slidesPerView="auto"
                    loop={true}
                    navigation={true}
                    autoplay={{ delay: 0, disableOnInteraction: false }}
                    modules={[Autoplay, Navigation]}
                    speed={5000}
                    className="flex items-center justify-between w-full mt-[24px] tmd:mt-[0px]"
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                >
                    {[...categories, ...categories].map((category:Category, index) => (
                        <SwiperSlide key={index} className="h-full flex flex-col justify-center !w-auto flex-row slide-in-slide">
                            <div className="flex grid-cols-4 items-center gap-[8px]" onClick={() => {navigate(`categories/${category.id}`)}}>
                                    <div className="relative h-full flex justify-center flex-col items-center gap-[8px] cursor-pointer" key={index}>
                                        <img src={category.image} className="object-contain h-[64px] w-[64px] tmd:w-[100px] tmd:h-[100px] rounded-full" alt="Product" />
                                        <div className="w-full flex text-center items-center whitespace-nowrap justify-center h-[36px] bg-white px-[20px] font-semibold cursor-pointer">
                                        {category.name.replace(/&amp;/g, "&")}
                                        </div>
                                    </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="tmd:hidden w-full">
                <Swiper
                    spaceBetween={12}
                    slidesPerView="auto"
                    loop={true}
                    navigation={true}
                    autoplay={{ delay: 0, disableOnInteraction: false }}
                    modules={[Autoplay, Navigation]}
                    speed={5000}
                    className="flex items-center justify-between w-full mt-[24px] tmd:mt-[0px]"
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                >
                    {splitedCategories.map((category:Category[], index) => (
                        <SwiperSlide key={index} className="h-full flex flex-col justify-center !w-auto flex-row slide-in-slide">
                            <>
                                <div className="flex grid-cols-4 items-center tmd:hidden">
                                    {category.slice(0,4).map((category:Category, index) =>(
                                        <div className="w-[150px] relative h-full flex justify-center flex-col items-center gap-[8px] cursor-pointer" key={index} onClick={() => {navigate(`categories/${category.id}`)}}>
                                            <img src={category.image} className="object-contain h-[64px] w-[64px] tmd:w-[100px] tmd:h-[100px] rounded-full" alt="Product" />
                                            <div className="w-full flex text-center items-center whitespace-nowrap justify-center h-[36px] bg-white px-[20px] font-semibold cursor-pointer" onClick={() => {navigate(`categories/${category.id}/products`)}}>
                                                {category.name.replace(/&amp;/g, "&").length > 12 ?  category.name.replace(/&amp;/g, "&").substring(0,12) + '...' : category.name.replace(/&amp;/g, "&")}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex grid-cols-4 items-center tmd:hidden">
                                    {category.slice(4,8).map((category:Category, index) =>(
                                        <div className="w-[150px] relative h-full flex justify-center flex-col items-center gap-[8px] cursor-pointer" key={index} onClick={() => {navigate(`categories/${category.id}`)}}>
                                            <img src={category.image} className="object-contain h-[64px] w-[64px] tmd:w-[100px] tmd:h-[100px] rounded-full" alt="Product" />
                                            <div className="w-full flex text-center items-center whitespace-nowrap justify-center h-[36px] bg-white px-[20px] font-semibold cursor-pointer" onClick={() => {navigate(`categories/${category.id}/products`)}}>
                                                {category.name.replace(/&amp;/g, "&").length > 12 ?  category.name.replace(/&amp;/g, "&").substring(0,12) + '...' : category.name.replace(/&amp;/g, "&")}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            {splitedCategories.length > 1 ? renderCustomPagination() : null}
        </div>
    );
}

export default RoundCategoriesSlider;
