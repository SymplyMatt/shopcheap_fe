import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { setAuthPage, setLoginValues } from "../../redux/states/auth";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const EmailLogin = () => {
    const { loginValues } = useSelector((state: RootState) => state.auth);
    const [disabled, setDisabled] = useState(false);
    const dispatch = useDispatch<AppDispatch>();
    const handleBack = () => {
        dispatch(setAuthPage(null));
    }
    useEffect(() => {
        const isValidEmail = (email: string) => {
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        };
        setDisabled(!isValidEmail(loginValues.email));
      }, [loginValues.email]);
    return (
        <div className="w-[500px] h-full bg-white border border-[#D6D6D5] pb-[40px] tmd:p-[38px] flex flex-col items-center h_content overflow-y-scroll login">
            <img src="/images/cancelx.svg" className="self-end cursor-pointer hidden tmd:block" onClick={() => handleBack()}/>
            <div className="w-full flex flex-col items-center gap-[24px] py-10 tmd:p-10">
                <div className="flex w-full items-center justify-between tmd:justify-center h-[80px] tmd:h-fit border-b border-[#D6D6D5] tmd:border-none px-[20px]">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="tmd:hidden" onClick={() => handleBack()}>
                        <path d="M4.16602 10H15.8327" stroke="#141511" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M8.33268 5.83334L4.16602 10" stroke="#141511" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M8.33268 14.1667L4.16602 10" stroke="#141511" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <img src="/images/logo.png" className="h-[28px] tmd:h-[38px] tmd:mt-[-24px]"/>
                    <div className="tmd:hidden"></div>
                </div>
                <div className="w-full flex flex-col gap-[24px] px-[20px]">
                    <div className="flex flex-col items-center gap-[8px]">
                        <div className="text-center text-[28px] font-medium leading-[130%] tracking-[0%] text-[#141511]">Welcome</div>
                        <div className="text-center text-[16px] font-normal leading-[130%] tracking-[0%] text-[#4F4F4D]">Sign in so you can add to cart, track your orders and check out faster!</div>
                    </div>
                    <div className="w-full flex flex-col justify-center gap-[12px]">
                        <label className="text-[#141511] font-semibold">Email</label>
                        <input type="text" className="bg-[#F3F3F3] outline-none border-none p-[8px] px-[12px] w-full h-[48px]" placeholder="mail@gmail.com" value={loginValues.email} onChange={(e)=>dispatch(setLoginValues({ ...loginValues, email:e.currentTarget.value }))}/>
                        <div className="w-full flex justify-between items-center">
                            <div className="text-[#141511] text-[16px] font-normal flex items-center gap-[8px]"><img src="/images/checkboxchecked.svg" className="cursor-pointer"/>Keep me signed in</div>
                            <div className="uppercase text-[#141511] text-[12px] underline font-semibold cursor-pointer" onClick={() => dispatch(setAuthPage('create-account'))}>Create an account</div>
                        </div>
                    </div>
                    <div className={`flex h-[48px] bg-[#141511] w-full cursor-pointer text-white items-center justify-center ${!disabled ? 'cursor-pointer' : 'cursor-not-allowed opacity-50'}`} onClick={() => !disabled && dispatch(setAuthPage('passwordlogin'))}>NEXT</div>
                    <div className="flex h-[48px] text-[#141511] w-full cursor-pointer bg-white items-center justify-center border border-[#D6D6D5] font-semibold"
                        onClick={() => {
                            dispatch(setAuthPage("phonelogin"));
                        }}>USE PHONE NUMBER INSTEAD
                    </div>
                    <div className="text-[#676764] text-[16px] leading-[150%]"> By clicking Sign in, Continue with Google, Facebook, or Apple, you agree to ShopCheap's <span className="underline cursor-pointer">Terms of Use</span> and <span className="underline cursor-pointer">Privacy Policy.</span></div>
                </div>
            </div>
        </div>
    )
}

export default EmailLogin