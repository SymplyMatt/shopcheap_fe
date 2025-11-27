import { AppDispatch, RootState } from "../../redux/store";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import Footer from "./Footer";
import { setSearchMode, setShowAccount, setShowLogout } from "../../redux/states/app";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const AccountMobile = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const { loggedInUser } = useSelector((state: RootState) => state.app);
    function formatDate(date: Date | string): string {
        const d = typeof date === "string" ? new Date(date) : date;
        return d.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    }
  return (
    <>
        <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 50 }} transition={{ duration: 0.4, ease: "easeOut" }} className="w-full h-[100vh] fixed top-0 right-0 bg-[#1415114D] z-10 flex flex-col tmd:pt-[46px] pb-[80px] overflow-scroll">
            <div className="w-full min-h-[100%] bg-white border border-[#D6D6D5] tmd:p-[38px] flex flex-col items-center h_content overflow-y-scroll">
                <div className="w-full min-h-[92px] flex border-b border-[#E6E6E6] px-[20px] tmd:px-[50px] justify-between items-center gap-[24px]">
                    <div className="cursor-pointer" onClick={()=>navigate('/')}><img src="/images/logo.png" className="h-[28px] tmd:h-[36px]"/></div>
                    <div className="h-[48px] border border-black flex items-center justify-between px-[12px] cursor-pointer w-fit tmd:w-[200px]">
                        <input type="text" className="border-none outline-none focus:ring-0 text-base text-[#6B6B6B] cursor-pointer" placeholder="Search for product" onClick={() => dispatch(setSearchMode('empty'))}/>
                        <img src="/images/search.svg" />
                    </div>
                </div>
                <div className="w-full flex flex-col px-[20px] gap-[18px] py-[28px]">
                    <div className="text-[#141511] font-medium text-[18px] ">Overview</div>
                    <div className="w-full border border-[#D6D6D5] py-[24px] px-[16px] flex flex-col gap-[12px]">
                        <div className="flex flex-col gap-[8px]">
                            <div className="flex flex-col gap-[4px]">
                                <div className="text-[14px] text-[#141511] font-medium">Name</div>
                                <div className="text-[14px] text-[#141511]">{ loggedInUser?.firstname } {loggedInUser?.lastname}</div>
                            </div>
                            <div className="flex flex-col gap-[4px]">
                                <div className="text-[14px] text-[#141511] font-medium">Email</div>
                                <div className="text-[14px] text-[#141511]">{ loggedInUser?.email }</div>
                            </div>
                            <div className="flex flex-col gap-[4px]">
                                <div className="text-[14px] text-[#141511] font-medium">Phone</div>
                                <div className="text-[14px] text-[#141511]">{ loggedInUser?.phone || 'N/A' }</div>
                            </div>
                            <div className="flex flex-col gap-[4px]">
                                <div className="text-[14px] text-[#141511] font-medium">Member Since</div>
                                <div className="text-[14px] text-[#141511]">{ formatDate(loggedInUser?.createdAt as string)}</div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex items-center gap-[12px]">
                        <div className="flex-1 flex items-center justify-center border border-[#D6D6D5] h-[48px] text-[#141511] font-medium cursor-pointer hover:bg-[#F3F3F3] transition-colors duration-200" onClick={()=>{
                            dispatch(setShowAccount(false));
                            navigate('/profile');
                        }}>Edit Profile</div>
                        <div className="flex-1 flex items-center justify-center border h-[48px] text-white font-medium cursor-pointer hover:opacity-90 transition-opacity duration-200" style={{ backgroundColor: 'rgb(16, 88, 62)', borderColor: 'rgb(16, 88, 62)' }} onClick={()=>{
                            dispatch(setShowAccount(false));
                            navigate('/orders');
                        }}>Orders</div>
                    </div>
                    <div className="w-[80%] h-[48px] flex items-center justify-center text-[#BD3322] border border-[#D6D6D5] mx-auto font-medium py-[8px] gap-[8px]" 
                    onClick={()=>{
                        dispatch(setShowLogout(true));
                    }}>
                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.7168 10.8H17.1668" stroke="#BD3322" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M9.5526 17.4508L6.07927 17.4666C5.08344 17.4716 4.27344 16.6733 4.27344 15.6875V5.91247C4.27344 4.92997 5.0776 4.1333 6.07094 4.1333H9.66594" stroke="#BD3322" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M13.834 14.1333L17.1673 10.8L13.834 7.46667" stroke="#BD3322" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        LOGOUT
                    </div>
                </div>
                <Footer />
            </div>
        </motion.div>
    </>
  );
};

export default AccountMobile;