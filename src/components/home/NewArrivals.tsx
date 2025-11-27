import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { RootState } from '../../redux/store';
import { useNavigate } from 'react-router-dom';
import { ArrivalsAndCategory } from '../../utils/utils';

const NewArrivals = () => {
  const { newArrivals } = useSelector((state: RootState) => state.app);
  const navigate = useNavigate();

  if (!newArrivals || newArrivals.length === 0) {
    return null;
  }

  // Duplicate items for seamless loop
  const duplicatedItems = [...newArrivals, ...newArrivals, ...newArrivals];

  return (
    <div className="w-full flex flex-col items-center gap-[24px] tmd:gap-[20px] mb-[40px] overflow-hidden px-[20px] tmd:px-[50px]">
        <div className="w-full flex flex-col tmd:flex-row items-center justify-between min-h-[48px] gap-[16px] text-center mb-[24px] tmd:mb-[24px]">
            <div className="text-[28px] tmd:text-[48px] font-normal leading-[1.2] tracking-[0%] text-center">Featured</div>
        </div>
        
        <div className="w-full overflow-hidden">
            <Swiper
                spaceBetween={16}
                slidesPerView="auto"
                loop={true}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                }}
                speed={3000}
                modules={[Autoplay]}
                className="w-full"
                breakpoints={{
                    0: {
                        spaceBetween: 16,
                    },
                    768: {
                        spaceBetween: 24,
                    },
                }}
            >
                {duplicatedItems.map((item: ArrivalsAndCategory, index: number) => (
                    <SwiperSlide 
                        key={`${item.category.id}-${index}`} 
                        className="!w-auto"
                    >
                        <div 
                            className="flex flex-col bg-white border border-[#E6E6E6] rounded-[16px] overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-[1.02] group min-w-[280px] tmd:min-w-[320px]"
                            onClick={() => navigate(`/categories/${item.category.id}`)}
                        >
                            <div className="w-full h-[280px] tmd:h-[320px] bg-[#F3F3F3] flex items-center justify-center p-[20px] relative overflow-hidden">
                                {item.category.image ? (
                                    <img 
                                        src={item.category.image} 
                                        alt={item.category.name}
                                        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                                    />
                                ) : (
                                    <div className="text-[#9CA3AF] text-[14px]">No image</div>
                                )}
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                            </div>
                            
                            <div className="w-full border-t border-[#E6E6E6] p-[16px] flex flex-col gap-[8px]">
                                <div className="text-[14px] tmd:text-[16px] font-semibold text-[#111827] line-clamp-2">
                                    {item.category.name.replace(/&amp;/g, "&")}
                                </div>
                                <div className="text-[12px] text-[#6B7280]">
                                    {item.products.length} {item.products.length === 1 ? 'Product' : 'Products'}
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    </div>
  )
}

export default NewArrivals