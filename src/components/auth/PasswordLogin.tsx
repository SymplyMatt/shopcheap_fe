import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { setAuthPage, setLoginValues, setSignupValues } from "../../redux/states/auth";
import { setLoggedInUser } from "../../redux/states/app";
import { useSelector } from "react-redux";
import utils, { apiRequest } from "../../utils/utils";
import { useEffect, useState } from "react";

const PasswordLogin = () => {
    const [loading, setLoading] = useState(false);
    const { loginValues, signupValues } = useSelector((state: RootState) => state.auth);
    const [showPassword, setShowPassword] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const dispatch = useDispatch<AppDispatch>();
    const handleBack = () => {
        const isValidEmail = (email: string) => {
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        };
        if(isValidEmail(loginValues.identifier)){
            dispatch(setAuthPage("emaillogin"));
        }else{
            dispatch(setAuthPage("phonelogin"));
        }
    }
    const loginUser = async () => {
        setLoading(true);
        setErrorMessage('');
        const response = await apiRequest("users/login", 'POST', { identifier: loginValues.identifier, password: loginValues.password });
        setLoading(false);
        if(response.status !== 200){
            if(response.status === 409){
                console.log(response.data);
                dispatch(setSignupValues({ ...signupValues, email: response.data.email }));
                dispatch(setAuthPage("verify-email"));
                return
            }
            setErrorMessage(response.data.message || "An error occurred while logging in. Please try again.");
            setLoginValues({ identifier: '', password: '' });
            return
        };
        if(!response.data.user || !response.data.accessToken){
            setErrorMessage("Invalid response from server. Please try again.");
            setLoginValues({ identifier: '', password: '' });
            return
        }
        dispatch(setLoggedInUser({ ...response.data.user, token: response.data.accessToken }));
        utils.saveUserWithExpiry(response.data.user, response.data.accessToken);
        setLoginValues({identifier: '', password: ''});
        dispatch(setAuthPage(null));
    }
    useEffect(() => {
        setDisabled((loginValues.password.length < 8) || loading);
    }, [loginValues.password, loading]);
    return (
      <div className="w-[500px] h-full bg-white border border-[#D6D6D5] pb-[40px] tmd:p-[38px] flex flex-col items-center h_content overflow-y-scroll login">
            <img src="/images/cancelx.svg" className="self-end cursor-pointer hidden tmd:block" onClick={() => dispatch(setAuthPage(null))}/>
            <div className="tmd:hidden flex w-full items-center justify-between tmd:justify-center h-[80px] tmd:h-fit border-b border-[#D6D6D5] tmd:border-none px-[20px] py-[20px]">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="tmd:hidden" onClick={() => handleBack()}>
                    <path d="M4.16602 10H15.8327" stroke="#141511" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M8.33268 5.83334L4.16602 10" stroke="#141511" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M8.33268 14.1667L4.16602 10" stroke="#141511" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <img src="/images/logo.png" className="h-[28px] tmd:h-[38px] tmd:mt-[-24px]"/>
                <div className="tmd:hidden"></div>
            </div>
            <div className="w-full flex flex-col items-center gap-[24px] px-[20px] py-[40px] tmd:py-[0px]">
                    <div className="flex flex-col items-center gap-[8px] tmd:mt-[-24px]">
                        <div className="text-center text-[28px] font-medium leading-[130%] tracking-[0%] text-[#141511]">Sign in</div>
                        <div className="text-center text-[16px] font-normal leading-[130%] tracking-[0%] text-[#4F4F4D]">Enter your password to continue</div>
                        <div className="flex justify-between gap-[12px] items-center text-center text-[16px] font-normal leading-[130%] tracking-[0%] text-[#4F4F4D] font-semibold">
                            {loginValues.identifier}   
                            <span className="underline cursor-pointer font-normal" onClick={() => handleBack()}>
                                Edit
                            </span>
                        </div>
                    </div>
                    <div className="w-full flex flex-col justify-center gap-[12px]">
                        <label className="text-[#141511] font-semibold">Password</label>
                        <input type={showPassword ? 'text' : "password"} className="bg-[#F3F3F3] outline-none border-none p-[8px] px-[12px] w-full h-[48px]" placeholder="" value={loginValues.password} onChange={(e)=>dispatch(setLoginValues({ ...loginValues, password:e.currentTarget.value }))}/>
                        {errorMessage ? <div className="text-[#AA2924] text-[14px]">{ errorMessage }</div> : ''}
                        <div className="w-full flex justify-between items-center">
                            <div className="text-[#141511] text-[16px] font-normal flex items-center gap-[8px] underline cursor-pointer" onClick={()=> setShowPassword(!showPassword)}>
                                {!showPassword ? <img src="/images/eyepassword.svg" className="cursor-pointer"/> : ''}
                                {showPassword ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="h-[22px] w-[22px]"><path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"/></svg> : ''}
                                {!showPassword ? 'Show password' : 'Hide password'}</div>
                            <div className="text-[#141511] text-[12px] underline font-semibold cursor-pointer" onClick={() => dispatch(setAuthPage("resetpassword-email"))}>Forgot password?</div>
                        </div>
                    </div>
                    <div className={`flex h-[48px] bg-[#141511] w-full cursor-pointer text-white items-center justify-center ${!disabled ? 'cursor-pointer' : 'cursor-not-allowed opacity-50'}`}  
                        onClick={() => {
                            !disabled && loginUser();
                        }}>NEXT</div>
                    <div className="flex h-[48px] text-[#141511] w-full cursor-pointer bg-white items-center justify-center border border-[#D6D6D5] font-semibold"
                        onClick={() => {
                            dispatch(setAuthPage("otp"));
                        }}>SEND OTP INSTEAD
                    </div>
                    <div className="w-full flex flex-col justify-center gap-[12px] mt-[10px]">
                        <div className="text-center text-[#676764]">Don't have an account?</div>
                        <div className="flex h-[40px] bg-[#fff] w-full cursor-pointer items-center justify-center border border-[#D6D6D5] text-[#141511] text-[14px] font-semibold gap-[8px] uppercase"> Create An account</div>
                    </div>
                <div className="text-[#676764] text-[16px] leading-[150%]"> By clicking Sign in, Continue with Google, Facebook, or Apple, you agree to Drest's <span className="underline cursor-pointer">Terms of Use</span> and <span className="underline cursor-pointer">Privacy Policy.</span></div>
            </div>
      </div>
    )
}
export default PasswordLogin