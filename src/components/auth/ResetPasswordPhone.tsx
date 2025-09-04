import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { setAuthPage } from "../../redux/states/auth";

const ResetPasswordPhone = () => {
    const dispatch = useDispatch<AppDispatch>();
    return (
        <div className="w-[500px] bg-white border border-[#D6D6D5] pb-[40px] tmd:p-[38px] flex flex-col items-center h-full tmd:h_content overflow-y-scroll login">
            <img src="/images/cancelx.svg" className="self-end cursor-pointer hidden tmd:block" onClick={() => dispatch(setAuthPage(null))}/>
            <div className="tmd:hidden flex w-full items-center justify-between tmd:justify-center h-[80px] tmd:h-fit border-b border-[#D6D6D5] tmd:border-none px-[20px]">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="tmd:hidden">
                    <path d="M4.16602 10H15.8327" stroke="#141511" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M8.33268 5.83334L4.16602 10" stroke="#141511" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M8.33268 14.1667L4.16602 10" stroke="#141511" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <img src="/images/logo.png" className="h-[28px] tmd:h-[38px] tmd:mt-[-24px]"/>
                <div className="tmd:hidden"></div>
            </div>
            <div className="w-full flex flex-col items-center gap-[24px] px-[20px] py-[40px] tmd:py-[0px]">
                <div className="flex flex-col items-center gap-[8px] tmd:mt-[-24px]">
                    <div className="text-center text-[28px] font-medium leading-[130%] tracking-[0%] text-[#141511]">Password Reset</div>
                    <div className="text-center text-[16px] font-normal leading-[130%] tracking-[0%] text-[#4F4F4D]">Please enter your email address and we'll send you instructions to reset your password</div>
                </div>
                <div className="w-full flex flex-col justify-center gap-[12px]">
                    <label className="text-[#141511] font-semibold">Mobile number</label>
                    <div className="w-full flex items-center">
                        <div className="h-[48px] bg-[#F3F3F3] flag-container min-w-[85px] border-r border-[#D6D6D5] flex items-center justify-center text-[#676764] p-[8px] gap-[4px] cursor-pointer">
                            <img src="/images/tunisia.svg" className="w-[24px] h-[24px]"/>
                            +1
                            <img src="/images/caretflag.svg" className="w-[24px] h-[24px]"/>
                        </div>
                        <input type="text" className="bg-[#F3F3F3] outline-none border-none p-[8px] px-[12px] w-full h-[48px]" placeholder="Enter mobile number"/>
                    </div>
                </div>
                <div className="flex h-[48px] bg-[#141511] w-full cursor-pointer text-white items-center justify-center"
                    onClick={() => {
                        // dispatch(setLoggedInUser({name: "user_display_name", email: "user_email", token:"token", displayName: "user_nicename"}));
                        dispatch(setAuthPage(null));
                    }}>RESET PASSWORD</div>
                <div className="flex h-[48px] text-[#141511] w-full cursor-pointer bg-white items-center justify-center border border-[#D6D6D5] font-semibold"
                    onClick={() => {
                        dispatch(setAuthPage("resetpassword-email"));
                    }}>
                    RESET WITH EMAIL INSTEAD
                </div>
          </div>
        </div>
    )
  }
  
export default ResetPasswordPhone