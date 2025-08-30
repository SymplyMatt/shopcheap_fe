import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useRef, useState } from "react";
import { apiRequest, Product, ProductOption } from "../../utils/utils";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/states/app";

interface CategoriesAndProductsProps {
    product: Product;
}

const ProductHero : React.FC<CategoriesAndProductsProps> = ({product}) => {
    const [selectedOption, setSelectedOption] = useState<ProductOption | null>(null);
    const [activeImage, setActiveImage] = useState(product.image);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
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
    
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    }
    
    const selectOption = (option: ProductOption) => {
        setSelectedOption(option);
        setActiveImage(option.image);
        setIsDropdownOpen(false);
    }
    
    let priceRange: string = "";
    const prices = product.productOptions.map((opt) => Number(opt.price)).filter(Boolean) || [];
    if (prices.length > 0) {
        const minPrice = Math.min(...prices);
        const maxPrice = Math.max(...prices);
        priceRange = minPrice === maxPrice 
            ? `₦${minPrice.toLocaleString()}` 
            : `₦${minPrice.toLocaleString()} - ₦${maxPrice.toLocaleString()}`;
    }
    
    return (
        <div className="flex flex-col w-full bg-white tmd:grid tmd:grid-cols-[_50%_50%] tmd:px-[50px] tmd:gap-[20px] items-center justify-center">
            <div className="flex items-center justify-center w-full order1">
                <img src={activeImage} className="h-full"/>
            </div>
            <div className="flex items-center justify-center tmd:p-[24px] w-full order3 border border-[#F3F3F3] border-2">
                <div className="w-full flex flex-col items-center justify-center">
                    <div className="w-full flex flex-col justify-center items-center bg-white px-[16px]">
                        <div className="w-full flex flex-col items-center py-[16px]">
                            <div className="w-full flex items-center justify-between text-white">
                                <div className="text-[#141511] ">{product.name}</div>
                            </div>
                            <div className="font-semibold text-[24px] leading-[24px] tracking-[-4%] w-full flex items-center gap-[8px] price">{selectedOption ? '₦'+ selectedOption.price.toLocaleString() : priceRange}</div>
                        </div>
                        <div className="w-full border border-[#F3F3F3] flex flex-col gap-[16px] py-[16px] h-[56px] px-[24px] overflow-visible relative">
                            <div className="w-full flex items-center justify-between cursor-pointer h-[56px]" onClick={toggleDropdown}>
                                {selectedOption ? selectedOption.name : "Select option"}
                                <svg 
                                    width="10" 
                                    height="5" 
                                    viewBox="0 0 10 5" 
                                    fill="none" 
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={`transition-transform duration-300 ease-in-out ${isDropdownOpen ? 'rotate-180' : ''}`}
                                >
                                    <path d="M5 5L0 0H10L5 5Z" fill="#1C1B1F"/>
                                </svg>
                            </div>
                            <div className={`bg-white absolute top-[56px] left-0 w-full border border-[#F3F3F3] z-10 flex flex-col transition-all duration-300 ease-in-out transform origin-top ${
                                isDropdownOpen 
                                    ? 'opacity-100 scale-y-100 translate-y-0' 
                                    : 'opacity-0 scale-y-0 -translate-y-2 pointer-events-none'
                            }`}>
                                {product.productOptions.map((option: ProductOption, index: number) =>(
                                    <div 
                                        className={`flex items-center gap-[8px] cursor-pointer p-[16px] hover:bg-[#D3D3D3] border-b border-[#E6E6E6] transition-all duration-200 ${
                                            isDropdownOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                                        }`}
                                        key={index}
                                        onClick={() => selectOption(option)}
                                        style={{ transitionDelay: isDropdownOpen ? `${index * 50}ms` : '0ms' }}
                                    >
                                        <img src={option.image} alt="" className="h-[60px] w-[60px] rounded-50"/>
                                        <div className="">
                                            <div className="font-light">{option.name}</div>
                                            <div className="font-bold">#{option.price.toLocaleString()}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-col w-full gap-[8px] mt-[16px]">
                            <span>Quantity</span>
                            <div className="w-full h-[48px] bg-white border border-[#F3F3F3] flex items-center justify-between px-[16px]">
                                <div className="h-[32px] w-[32px] flex items-center justify-center rounded-full border border-[#F3F3F3]">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" style={{ fontSize: '12px', height: '20px'}} className="cursor-pointer"><path d="M96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320z"/></svg>
                                </div>
                                <span>3</span>
                                <div className="h-[32px] w-[32px] flex items-center justify-center rounded-full border border-[#F3F3F3]">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" style={{ fontSize: '12px', height: '20px'}} className="cursor-pointer"><path d="M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z"/></svg>
                                </div>
                            </div>
                        </div>
                        <div className={`w-full flex flex-col items-center justify-center py-[16px] gap-[12px] ${selectedOption ? 'cursor-pointer' : 'opacity-50 cursor-not-allowed'}`}>
                            {cartEntry ? <div className={`gap-[8px] w-full h-[48px] bg-red-900 text-white flex items-center justify-center ${selectedOption ? 'transition-transform duration-200 hover:scale-[0.95]' : 'opacity-50 cursor-not-allowed'}`} onClick={()=>removeProductFromCart()}>REMOVE FROM CART</div> : ''}
                            {!cartEntry ? <div className={`gap-[8px] w-full h-[48px] bg-[#141511] text-white flex items-center justify-center ${selectedOption ? 'transition-transform duration-200 hover:scale-[0.95]' : 'opacity-50 cursor-not-allowed'}`} onClick={()=>addProductToCart()}>
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