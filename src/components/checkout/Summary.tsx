import { useLocation, useNavigate } from "react-router-dom";
import ProductList from "./ProductList";
import { AppDispatch, RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import utils, { apiRequest } from "../../utils/utils";

const Summary = () => {
    const navigate = useNavigate();
    const page = useLocation().pathname.split("/").pop();
    const { cart } = useSelector((state: RootState) => state.app);
    const totalPrice = cart.reduce((acc, item) => acc + (item.quantity * item.product.productOptions[0].price), 0);
    const { deliveryInformation } = useSelector((state: RootState) => state.checkout);
    const [disabled, setDisabled] = useState(true);
    const [loading, setLoading] = useState(false);
    useEffect(()=>{
        const isValidEmail = (email: string) => {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        };
        const validemail = isValidEmail(deliveryInformation.email);
        setDisabled(!validemail || !deliveryInformation.firstname || !deliveryInformation.lastname || deliveryInformation.phone.length !== 10 || deliveryInformation.address.length < 7 || !deliveryInformation.state || loading);
    },[deliveryInformation, loading]);
    const submit = async () =>{
        setLoading(true);
        try {
            const body = {
                ...deliveryInformation,
                phone: "234" + deliveryInformation.phone,
                "products": cart.map(i=>{
                    return {
                        productId: i.product.id,
                        productOptionId: i.product.productOptions[0].id,
                        quantity: i.quantity
                    }
                })
            }
            const response = await apiRequest("orders", 'POST', body);
            setLoading(false);
            if(response.status === 201 && response.data.order && response.data.order.payments?.[0]){
                const checkoutUrl = response.data.order.payments?.[0].link;
                window.location.replace(checkoutUrl);
            }else{
                
            }
        } catch (error) {
            setLoading(false);
            utils.createErrorNotification("Error creating order", 1000);
        }
    };
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
                        <div className={`flex w-full items-center justify-center bg-[#141511] cursor-pointer h-[48px] text-white mt-[12px] ${!disabled ? 'cursor-pointer' : 'cursor-not-allowed opacity-50'}`} 
                            onClick={()=>{
                                submit();
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