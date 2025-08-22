
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useRef, useState } from "react";
import { apiRequest, Product, ProductOption } from "../../utils/utils";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useDispatch } from "react-redux";
import { addToCart, addToWishlist, removeFromCart, removeFromWishlist } from "../../redux/states/app";
interface CategoriesAndProductsProps {
    product: Product;
}
const ProductHero : React.FC<CategoriesAndProductsProps> = ({product}) => {
    const discount = 0;
    const price = Number(1000);
    const priceAfterDiscount = Number(1000);
    const [selectedOption, setSelectedOption] = useState<ProductOption>(product.productOptions[0]);
    const [activeImage, setActiveImage] = useState(product.image);
    const { cart, loggedInUser } = useSelector((state: RootState) => state.app);
    const cartEntry = cart.find((item) => item.product.id === product.id);
    const dispatch = useDispatch();
    const addProductToCart = async () =>{
        dispatch(addToCart({quantity:1,product}));
        loggedInUser && await apiRequest("custom/v1/cart/add");
    }
    const removeProductFromCart = async () =>{
        loggedInUser && await apiRequest("custom/v1/cart/remove");
        dispatch(removeFromCart(product.id));
    }
    return (
        <div className="flex flex-col w-full bg-white tmd:grid tmd:grid-cols-[_50%_50%] tmd:px-[50px] tmd:gap-[20px] items-center justify-center">
            <div className="flex items-center justify-center w-full order1">
                <img src={activeImage} className="h-full"/>
            </div>
            <div className="flex items-center justify-center tmd:p-[24px] w-full order3 border border-[#F3F3F3] border-2">
                <div className="w-full flex flex-col items-center justify-center">
                    <div className="w-full flex flex-col justify-center items-center bg-white">
                        <div className="w-full flex flex-col items-center py-[16px] px-[24px]">
                            <div className="w-full flex items-center justify-between text-white">
                                <div className="text-[#141511] ">{product.name}</div>
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductHero