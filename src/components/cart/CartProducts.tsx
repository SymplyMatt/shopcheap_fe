import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { emptyCart, removeFromCart, updateCart } from "../../redux/states/app";
import { useSelector } from "react-redux";
import { CartItem, apiRequest } from "../../utils/utils";

const CartProducts = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { cart, loggedInUser } = useSelector((state: RootState) => state.app);
    const clearCart = async () =>{
        loggedInUser && await apiRequest("custom/v1/cart/clear");
        dispatch(emptyCart());
    }
    const removeProductFromCart = async (cartEntry: CartItem) =>{
        loggedInUser && await apiRequest("custom/v1/cart/remove");
        dispatch(removeFromCart(cartEntry.product.id));
    }
    const updateQuantity = async (cartEntry: CartItem, quantity: number) =>{
        if (loggedInUser){
            await apiRequest("custom/v1/cart/update");
        }
        dispatch(updateCart([...cart.filter(item => item.product.id !== cartEntry.product.id), { ...cartEntry, quantity }]));
    }
  return (
    <div className="w-full col-span-2 flex flex-col">
        <div className="w-full flex items-center justify-between border-b border-r border-[#D6D6D5] px-[24px] py-[12px]">
            <div className="text-[#141511] text-[20px] font-semibold">YOUR CART</div>
            <div className="flex items-center gap-[12px] text-[#4F4F4D] cursor-pointer font-semibold" onClick={() => clearCart()}><img src="/images/basket.svg"/> DELETE ALL</div>
        </div>
        <div className="w-full flex flex-col p-[20px] gap-[24px] border-b border-r border-[#D6D6D5] h-full">
            {cart.map((cart, index)=>{
                return(
                    <div className="grid grid-cols-2 tmd:grid tmd:grid-cols-3 tmd:items-center tmd:justify-between gap-[8px] tmd:gap-[24px] w-full border border-[#F3F3F3] tmd:border-none p-[8px] rounded-[8px]" key={index}>
                        <div className="col-span-2 tmd:col-span-1 flex items-center tmd:justify-between">
                            <div className="flex tmd:items-center gap-[12px] h-[100px] w-full">
                                <img src={cart.product.image} className="h-[100px] w-[100px] border border-[#D6D6D5] rounded-[4px]"/>
                                <div className="flex flex-col tmd:py-[8px] w-full">
                                    <div className="flex flex-col text-[14px] tmd:text-base">
                                        <div className="text-[#141511] text-[20px] font-semibold">{cart.product.name}</div>
                                        <div className="text-[#141511] text-[14px] font-semibold font-light">{cart.product.productOptions[0].name}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1 flex items-center gap-[26px]">
                            <div className="flex flex-col gap-[8px] justify-center tmd:w-full">
                                <div className="text-[#676764] text-center">Quantity</div>
                                <div className="flex justify-center items-center gap-[12px]">
                                    <div className="h-[32px] w-[32px] flex items-center justify-center rounded-full border border-[#F3F3F3]">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" style={{ fontSize: '12px', height: '20px'}} className={`${cart.quantity > 1 ? 'cursor-pointer': 'opacity-50 cursor-not-allowed'}`} onClick={()=> cart.quantity > 1 && updateQuantity(cart, cart.quantity - 1)}><path d="M96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320z"/></svg>
                                    </div>
                                    {cart.quantity}
                                    <div className="h-[32px] w-[32px] flex items-center justify-center rounded-full border border-[#F3F3F3]">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" style={{ fontSize: '12px', height: '20px'}}  className="cursor-pointer" onClick={()=> updateQuantity(cart, cart.quantity + 1)}><path d="M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z"/></svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1 flex flex-col gap-[8px] justify-between items-end tmd:h-[72px]">
                            <div className="flex items-center gap-[8px] price"><span className="font-semibold">₦{(cart.quantity * cart.product.productOptions[0].price).toLocaleString()}</span></div>
                            <div className="tmd:flex items-center gap-[12px]">
                                <img src="/images/basket_sm.svg" className="cursor-pointer" onClick={()=>removeProductFromCart(cart)} />
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default CartProducts