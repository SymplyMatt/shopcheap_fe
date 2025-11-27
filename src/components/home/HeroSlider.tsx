import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper/modules";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { heroSlider } from "../../contents/home";
import { useNavigate } from "react-router-dom";

const HeroSlider = () => {
    const { language } = useSelector((state: RootState) => state.app);
    const navigate = useNavigate();
    return (
        <div className="w-full flex justify-center slider_hero">
            <Swiper
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                modules={[Autoplay, Pagination]}
                className="w-full slider_home"
                speed={1800}
            >
                <SwiperSlide className="h-full bg-red-900">
                    <div className="w-full flex justify-center bg-no-repeat bg-cover px-[20px] tmd:px-[80px] gap-[16px] tmd:gap-[32px] flex-col text-white sliderone">
                        <div className="flex flex-col justify-center gap-[12px]">
                            <div className="text-white text-[24px] tmd:text-[40px] leading-[100%] tmd:leading-[50px] header_slider">
                                { heroSlider[language][0].title1 } <br /> { heroSlider[language][0].title2 }
                            </div>
                            <div className="text-[12px] tmd:text-[14px] max-w-[320px] tmd:max-w-[370px] text-[#E6E6E6]">
                                { heroSlider[language][0].description }
                            </div>
                        </div>
                        <div 
                            className="bg-white h-[44px] tmd:h-[48px] w-fit px-[24px] tmd:px-[36px] text-black flex items-center justify-center tracking-[2%] text-[16px] font-medium cursor-pointer transition-transform duration-200 hover:scale-90 transition-transform duration-200 hover:scale-[0.9]"
                            onClick={() => navigate('/store')}
                        >
                            { heroSlider[language][0].btn }
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="h-full bg-red-900">
                    <div className="w-full flex justify-center bg-no-repeat bg-cover px-[20px] tmd:px-[80px] gap-[16px] tmd:gap-[32px] flex-col text-white slidertwo">
                        <div className="flex flex-col justify-center gap-[12px]">
                            <div className="text-white text-[24px] tmd:text-[40px] leading-[100%] tmd:leading-[50px] header_slider">
                            { heroSlider[language][1].title1 }
                            </div>
                            <div className="text-[12px] tmd:text-[14px] max-w-[320px] tmd:max-w-[370px] text-[#E6E6E6]">
                                { heroSlider[language][1].description }
                            </div>
                        </div>
                        <div 
                            className="bg-black text-[#E6E6E6] h-[48px] w-fit px-[24px] tmd:px-[36px] flex items-center justify-center tracking-[2%] text-[16px] font-medium cursor-pointer transition-transform duration-200 hover:scale-90"
                            onClick={() => navigate('/store')}
                        >
                            { heroSlider[language][1].btn }
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default HeroSlider