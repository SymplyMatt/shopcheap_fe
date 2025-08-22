import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useRef, useState } from "react";
import { Autoplay } from "swiper/modules";
import { apiRequest, Product } from "../../utils/utils";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useDispatch } from "react-redux";
import { addToCart, addToWishlist, removeFromCart, removeFromWishlist } from "../../redux/states/app";
interface CategoriesAndProductsProps {
    product: Product;
    reviews: any[];
}
const ProductHero : React.FC<CategoriesAndProductsProps> = ({product, reviews}) => {
    const discount = 0;
    const price = Number(1000);
    const priceAfterDiscount = Number(1000);
    const swiperRef = useRef<SwiperClass | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [activeImage, setActiveImage] = useState(product.image);
    const { wishlist,cart, loggedInUser } = useSelector((state: RootState) => state.app);
    const isInWishlist = wishlist.some((item) => item.id === product.id);
    const cartEntry = cart.find((item) => item.product.id === product.id);
    const [isMobileView, setIsMobileView] = useState(false);
    const allImages: string[] = [
        product.image,
        ...product.productOptions
        .map((opt) => opt.image)
        .filter((img): img is string => Boolean(img)) // keep only valid strings
    ];
    const renderCustomPagination = () => {
        const totalSlides = 6; 
        return (
            <div className="h-[4px] tmd:flex-col tmd:h-full flex items-center justify-center mb-6 gap-[24px] w-full">
                <div className="h-[4px] tmd:flex-col tmd:h-full flex items-center justify-center w-full">
                    {[...Array(totalSlides)].map((_, index) => (
                        <button
                            key={index}
                            onClick={() => swiperRef.current?.slideTo(index)}
                            className={`transition-all duration-300 h-full ${
                                activeIndex === index 
                                    ? "bg-[#141511] w-full flex-1 tmd:w-[4px]" 
                                    : "bg-[#F3F3F3] w-full flex-1 tmd:w-[4px]"
                            }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        );
    };
    const dispatch = useDispatch();
    useEffect(()=>{
        setActiveImage(product.image);
        setActiveIndex(0);
        swiperRef.current?.slideTo(0);
    },[product]);
    const addProductToCart = async () =>{
        dispatch(addToCart({quantity:1,product}));
        loggedInUser && await apiRequest("custom/v1/cart/add");
    }
    const removeProductFromCart = async () =>{
        loggedInUser && await apiRequest("custom/v1/cart/remove");
        dispatch(removeFromCart(product.id));
    }
    useEffect(() => {
        const handleResize = () => {
          setIsMobileView(window.innerWidth < 1200);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <div className="flex flex-col w-full bg-[#F3F3F3] tmd:grid tmd:grid-cols-[17%_50%_33%] tmd:px-[50px] tmd:gap-[20px] items-center justify-center">
            <div className={`flex items-center justify-center w-full order2`}>
                <div className={`flex items-center flex-col tmd:flex-row justify-center w-[195px] bg-white gap-[16px] p-[16px] ${isMobileView && 'w-full'}`} style={{ height: isMobileView ? '150px' : allImages.length > 3 ? '512px' : `${(allImages.length * 140) + 32}px` }}>
                    { allImages.length > 3 && <div className={`h-[4px] tmd:h-full ${isMobileView && 'w-full'}`}>{renderCustomPagination()}</div>}
                    <Swiper
                        direction={!isMobileView ? "vertical" : "horizontal"}
                        slidesPerView={allImages.length > 3 ? 3.2 : allImages.length}
                        spaceBetween={0}
                        loop={true} 
                        // autoplay={{ delay: 3000, disableOnInteraction: false }}
                        modules={[Autoplay]}
                        speed={1000}
                        className={`w-full ${isMobileView ? 'h-[100px]' : 'h-full'}`}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                    >
                        {allImages.map((image,index) => (
                            <SwiperSlide className={`${isMobileView ? 'w-100important h-[100px]': 'w-full h-[150px] px150'}`} onClick={()=>setActiveImage(image)} key={index} style={{ width: isMobileView ? '100px' : '', height: isMobileView ? '100px' : ''}}>
                                <div className={`${isMobileView ? 'w-100important h-[100px]' : 'w-full h-[150px]'} border border-[#D6D6D5] bg-[#F3F3F3] flex items-center justify-center cursor-pointer p-[10px] relative`} key={index} style={{ width: isMobileView ? '100px' : '', height: isMobileView ? '100px' : ''}}>
                                    <img src={image} className="h-full object-contain"/>
                                    {image === activeImage && <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                        <rect x="1" y="1" width="48" height="48" rx="24" fill="#F3F3F3"/>
                                        <rect x="1" y="1" width="48" height="48" rx="24" stroke="#D6D6D5"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.1178 25.467C15.9607 25.176 15.9607 24.823 16.1178 24.532C18.0097 21.033 21.5048 18 24.9998 18C28.4948 18 31.9898 21.033 33.8818 24.533C34.0388 24.824 34.0388 25.177 33.8818 25.468C31.9898 28.967 28.4948 32 24.9998 32C21.5048 32 18.0097 28.967 16.1178 25.467Z" stroke="#141511" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M27.1213 22.8787C28.2929 24.0502 28.2929 25.9497 27.1213 27.1213C25.9497 28.2929 24.0502 28.2929 22.8787 27.1213C21.7071 25.9497 21.7071 24.0502 22.8787 22.8787C24.0502 21.7071 25.9497 21.7071 27.1213 22.8787" stroke="#141511" stroke-width="1.4286" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>}
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
            <div className="flex items-center justify-center w-full order1">
                <img src={activeImage} className="h-full"/>
            </div>
            <div className="flex items-center justify-center tmd:p-[24px] w-full order3">
                <div className="w-full flex flex-col items-center justify-center">
                    {discount ? <div className="h-[48px] bg-[#36A34C] w-full flex items-center justify-between text-white px-[24px] py-[12px]">
                        <div className="font-normal text-[16px] leading-[24px] tracking-[0%]">SPECIAL DISCOUNT</div>
                        <div className="font-semibold text-[16px] leading-[24px] tracking-[-4%]">{Math.round(discount)}% OFF</div>
                    </div> : ""}
                    <div className="w-full flex flex-col justify-center items-center bg-white">
                        <div className="w-full flex flex-col items-center py-[16px] px-[24px]">
                            <div className="w-full flex items-center justify-between text-white">
                                <div className="text-[#141511] ">{product.name}</div>
                                <div className="">
                                    {!isInWishlist ? <img src="/images/heart.svg" className="cursor-pointer" onClick={()=>dispatch(addToWishlist(product))}/> : ''}
                                    {isInWishlist ? <img src="/images/heartfilled.svg" className="cursor-pointer"  onClick={()=>dispatch(removeFromWishlist(product.id))}/> : ''}
                                </div>
                            </div>
                            <div className="font-semibold text-[24px] leading-[24px] tracking-[-4%] w-full flex items-center gap-[8px] price">{Math.round(priceAfterDiscount)} TND {discount ? <span className="font-semibold text-[#8F0024] text-[20px] leading-[26px] tracking-[0%] line-through">{Math.round(price)} TND</span> : ''}</div>
                        </div>
                        <div className="w-full grid grid-cols-2 items-center border-t border-b border-[#D6D6D5]">
                            <div className="px-[24px] col-span-1 flex flex-col justify-between text-white gap-[4px] border-r border-[#D6D6D5] py-[16px]">
                                <div className="text-[#676764] font-normal text-[16px] leading-[24px] tracking-[0%] uppercase">Category:</div>
                                <div className="text-[#141511] font-medium text-[18px] leading-[27px] tracking-[0%]">Category</div>
                            </div>
                            <div className="px-[24px] col-span-1 flex flex-col justify-between text-black gap-[4px] py-[16px]">
                                <div className="text-[#141511] font-semibold text-[18px] leading-[27px] tracking-[0%]">Brand </div>
                                <div className="flex items-center gap-[4px]">
                                    Adidas
                                </div>
                            </div>
                        </div>
                        <div className="w-full flex items-center border-b border-[#D6D6D5]">
                            <div className="px-[24px] w-full flex flex-col justify-between text-white gap-[4px] border-r border-[#D6D6D5] py-[16px]">
                                <div className="text-[#000000] font-semibold text-[18px] leading-[27px] tracking-[0%]">Color: <span className="font-normal">Green</span></div>
                                <div className="flex items-center gap-[9px]">
                                    <div className="flex items-center justify-center h-[36px] w-[36px] rounded-50 border border-[#6B6B6B]">
                                        <div className="h-[24px] w-[24px] rounded-50 bg-[#34301D] cursor-pointer"></div>
                                    </div>
                                    <div className="h-[24px] w-[24px] rounded-50 bg-[#1B376F] cursor-pointer"></div>
                                    <div className="h-[24px] w-[24px] rounded-50 bg-[#401B6F] cursor-pointer"></div>
                                    <div className="h-[24px] w-[24px] rounded-50 bg-[#6F371B] cursor-pointer"></div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full flex items-center border-b border-[#D6D6D5]">
                            <div className="px-[24px] w-full flex flex-col justify-between text-white gap-[4px] border-r border-[#D6D6D5] py-[16px]">
                                <div className="flex w-full items-center justify-between">
                                    <div className="text-[#141511]">Select size</div>
                                    <div className="font-medium text-[14px] leading-[21px] tracking-[0%] text-[#676764] underline cursor-pointer">SIZE CHART</div>
                                </div>
                                <div className="w-full grid grid-cols-3 gap-[12px] text-[#141511]">
                                    <div className="col-span-1 h-40 border border-[#D6D6D5] flex items-center justify-center cursor-pointer font-medium text-[16px] leading-[21px] tracking-[-4%] hover:border-[#141511]">XS</div>
                                    <div className="col-span-1 h-40 border border-[#D6D6D5] flex items-center justify-center cursor-pointer font-medium text-[16px] leading-[21px] tracking-[-4%] hover:border-[#141511]">S</div>
                                    <div className="col-span-1 h-40 border border-[#D6D6D5] flex items-center justify-center cursor-pointer font-medium text-[16px] leading-[21px] tracking-[-4%] hover:border-[#141511] bg-[#F3F3F3] relative">
                                    <svg width="120" height="42" viewBox="0 0 120 42" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-0 left-0 h-full w-full">
                                        <line x1="0.905181" y1="40.7261" x2="119.773" y2="1.32455" stroke="#C4C4C4"/>
                                    </svg>
                                    <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-0 left-0 h-full w-full">
                                        <line x1="0.155716" y1="0.524866" x2="119.156" y2="39.5249" stroke="#C4C4C4"/>
                                    </svg>
                                        M
                                    </div>
                                    <div className="col-span-1 h-40 border border-[#D6D6D5] flex items-center justify-center cursor-pointer font-medium text-[16px] leading-[21px] tracking-[-4%] hover:border-[#141511] bg-[#F3F3F3] relative">
                                    <svg width="120" height="42" viewBox="0 0 120 42" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-0 left-0 h-full w-full">
                                        <line x1="0.905181" y1="40.7261" x2="119.773" y2="1.32455" stroke="#C4C4C4"/>
                                    </svg>
                                    <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-0 left-0 h-full w-full">
                                        <line x1="0.155716" y1="0.524866" x2="119.156" y2="39.5249" stroke="#C4C4C4"/>
                                    </svg>
                                        L
                                    </div>
                                    <div className="col-span-1 h-40 border border-[#D6D6D5] flex items-center justify-center cursor-pointer font-medium text-[16px] leading-[21px] tracking-[-4%] hover:border-[#141511] bg-[#141511] text-white">XL</div>
                                    <div className="col-span-1 h-40 border border-[#D6D6D5] flex items-center justify-center cursor-pointer font-medium text-[16px] leading-[21px] tracking-[-4%] hover:border-[#141511]">XXL</div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full flex flex-col items-center justify-center px-[24px] py-[16px] gap-[12px]">
                            {cartEntry ? <div className="gap-[8px] w-full h-[48px] bg-red-900 text-white flex items-center justify-center cursor-pointer transition-transform duration-200 hover:scale-[0.95]" onClick={()=>removeProductFromCart()}>REMOVE FROM CART</div> : ''}
                            {!cartEntry ? <div className="gap-[8px] w-full h-[48px] bg-[#141511] text-white flex items-center justify-center cursor-pointer transition-transform duration-200 hover:scale-[0.95]" onClick={()=>addProductToCart()}>
                                <img src="/images/plus.svg"/> 
                                ADD TO CART
                            </div> : ''}
                            <div className="gap-[8px] w-full h-[48px] bg-[#fff] text-[#60D669] flex items-center justify-center cursor-pointer border border-[#60D669] transition-transform duration-200 hover:scale-[0.95]"><img src="/images/plus.svg"/><img src="/images/whatsapp.svg"/> ORDER ON WHATSAPP</div>
                        </div>
                    </div>
                    {reviews.length ?<div className="w-full flex flex-col justify-center items-center bg-white mt-[20px]">
                        <div className="flex flex-col justify-center gap-[8px] border-b border-[#D6D6D5] py-[24px] px-[24px]">
                            <div className="text-[#141511] font-semibold text-[20px] leading-[26px] tracking-[0%]">PRODUCT REVIEW</div>
                            <div className="text-[#4F4F4D] font-normal text-[16px] leading-[24px] tracking-[0%]">See what other customers think about this product.</div>
                        </div>
                        <div className="w-full p-[24px] flex items-center justify-center">
                            <div className="flex justify-center items-center gap-[8px] w-full h-[48px] bg-white text-[#141511] flex items-center justify-center cursor-pointer border border-[#D6D6D5] font-medium cursor-pointer transition-transform duration-200 hover:scale-[0.95]">SEE REVIEWS</div>
                        </div>
                    </div> : ""}
                </div>
            </div>
        </div>
    )
}

export default ProductHero