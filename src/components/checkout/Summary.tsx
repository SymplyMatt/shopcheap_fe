import { useLocation, useNavigate } from "react-router-dom";
import ProductList from "./ProductList";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";

const Summary = () => {
    const navigate = useNavigate();
    const page = useLocation().pathname.split("/").pop();
    const { cart } = useSelector((state: RootState) => state.app);
    const totalPrice = cart.reduce((acc, item) => acc + (item.quantity * item.product.productOptions[0].price), 0);
    return (
        <div className={`w-full col-span-1 flex-col border-b border-[#D6D6D5] justify-between ${cart.length === 0 ? 'hidden tmd:flex' : ''}`}>
            <div className="w-full flex flex-col">
                <div className="w-full flex items-center tmd:justify-center border-b border-r border-[#D6D6D5] px-[20px] tmd:px-[50px] py-[12px]">
                    <div className="text-[#141511] text-[20px] font-medium">ORDER SUMMARY</div>
                </div>
                <div className="w-full p-[20px] tmd:p-[24px] flex flex-col items-center gap-[12px]">
                    <div className="w-full flex items-center justify-between">
                        <div className="text-[#4F4F4D] text-[18px] flex items-center gap-[4px]">Total Products</div>
                        <div className="text-[#4F4F4D] text-[20px] flex items-center gap-[8px]">{cart.length} Products</div>
                    </div>
                    <div className="w-full flex items-center justify-between">
                        <div className="text-[#4F4F4D] text-[18px] flex items-center gap-[4px]">Subtotal<img src="/images/question.svg" className="cursor-pointer" /></div>
                        <div className="text-[#4F4F4D] text-[20px] flex items-center gap-[8px]">₦{totalPrice.toLocaleString()}</div>
                    </div>
                    <div className="w-full flex items-center justify-between">
                        <div className="text-[#4F4F4D] text-[20px] flex items-center gap-[8px]">Delivery fee</div>
                        <div className="text-[#4F4F4D] text-[20px] flex items-center gap-[8px]">₦0</div>
                    </div>
                    <div className="w-full flex items-center justify-between">
                        <div className="text-[#141511] text-[18px] flex items-center gap-[4px] font-semibold">Total payment </div>
                        <div className="text-[#4F4F4D] text-[20px] flex items-center gap-[8px] font-semibold">₦{totalPrice.toLocaleString()}</div>
                    </div>
                    <div className="w-full h-[1px] bg-[#D6D6D5] mt-[12px]"></div>
                    {page !== 'payment' ? <>
                        <div className="flex w-full items-center justify-center bg-[#141511] cursor-pointer h-[48px] text-white mt-[12px]" 
                            onClick={()=>{
                                navigate(`/checkout/delivery`);
                            }}>
                            CHECKOUT
                        </div>
                    </> : ''}
                </div>
            </div>
            {page === 'payment' ? <ProductList /> : ''}
        </div>
    )
}

export default Summary