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
                    <div className="w-full border border-[#D6D6D5] py-[24px] px-[16px] flex gap-[12px] items-center">
                        <img src="/images/loggedinuserimage.svg" />
                        <div className="flex flex-col h-full justify-between w-[55%] gap-[8px]">
                            <div className="flex flex-col gap-[4px]">
                                <div className="text-[14px] text-[#141511] font-medium">Name</div>
                                <div className="text-[14px] text-[#141511]">{ loggedInUser?.firstname } {loggedInUser?.lastname}</div>
                            </div>
                            <div className="flex flex-col gap-[4px]">
                                <div className="text-[14px] text-[#141511] font-medium">Member Since</div>
                                <div className="text-[14px] text-[#141511]">{ formatDate(loggedInUser?.createdAt as string)}</div>
                            </div>
                            <div className="w-full flex items-center justify-center border border-[#D6D6D5] h-[36px] text-[#141511] font-medium text-[#141511]" onClick={()=>{
                                dispatch(setShowAccount(false));
                                navigate('/profile');
                                }}>Edit Profile</div>
                        </div>
                    </div>
                    <div className="w-full grid grid-cols-3 items-center justify-between gap-[12px]">
                        <div className="col-span-1 border border-[#D6D6D5] h-[100px] flex flex-col items-center justify-center gap-[8px] text-[#363939] text-[14px]" onClick={()=>{
                                    dispatch(setShowAccount(false));
                                    navigate('/orders');
                                }}>
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 10L10 3.33334H30L35 10V33.3333C35 34.2174 34.6488 35.0652 34.0237 35.6904C33.3986 36.3155 32.5507 36.6667 31.6667 36.6667H8.33333C7.44928 36.6667 6.60143 36.3155 5.97631 35.6904C5.35119 35.0652 5 34.2174 5 33.3333V10Z" stroke="#912A1D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M5 10H35" stroke="#912A1D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M26.6673 16.6667C26.6673 18.4348 25.9649 20.1305 24.7147 21.3807C23.4645 22.6309 21.7688 23.3333 20.0007 23.3333C18.2325 23.3333 16.5368 22.6309 15.2866 21.3807C14.0364 20.1305 13.334 18.4348 13.334 16.6667" stroke="#912A1D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            Orders
                        </div>
                        <div className="col-span-1 border border-[#D6D6D5] h-[100px] flex flex-col items-center justify-center gap-[8px] text-[#363939] text-[14px]">
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M20.8484 9.95705L20 10.8186L19.1514 9.95692C17.6042 8.38516 15.491 7.50006 13.2855 7.50006C11.0801 7.50006 8.96686 8.38516 7.41971 9.95692V9.95692C4.19343 13.2723 4.19343 18.5538 7.41971 21.8692L16.4075 30.9953C17.355 31.9579 18.6493 32.5 20 32.5C21.3508 32.5 22.645 31.9579 23.5926 30.9953L32.5803 21.8694C35.8066 18.554 35.8066 13.2725 32.5803 9.95707V9.95707C31.0331 8.38526 28.9199 7.50012 26.7144 7.50012C24.5089 7.50011 22.3956 8.38524 20.8484 9.95705Z" stroke="#912A1D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            Wishlist
                        </div>
                        <div className="col-span-1 border border-[#D6D6D5] h-[100px] flex flex-col items-center justify-center gap-[8px] text-[#363939] text-[14px]">
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.8327 13.3333H8.33268C6.0315 13.3333 4.16602 15.1988 4.16602 17.5V29.1667C4.16602 31.4679 6.0315 33.3333 8.33268 33.3333H26.666C28.9672 33.3333 30.8327 31.4679 30.8327 29.1667V26.6667" stroke="#912A1D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <rect x="10.834" y="6.66666" width="25" height="20" rx="2.5" stroke="#912A1D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M10.834 13.3333L35.834 13.3333" stroke="#912A1D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M19.9993 20H16.666" stroke="#912A1D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            Payment Cards
                        </div>
                    </div>
                    <div className="flex flex-col gap-[8px] w-full">
                        <div className="py-[16px] px-[12px] flex items-center justify-between border-b border-[#D6D6D5] h-[56px]">
                            <div className="flex items-center gap-[12px] text-[#141511] font-medium text-[14px]" onClick={()=>{
                                    dispatch(setShowAccount(false));
                                    navigate('/addresses');
                                }}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 13V13C10.343 13 9 11.657 9 10V10C9 8.343 10.343 7 12 7V7C13.657 7 15 8.343 15 10V10C15 11.657 13.657 13 12 13Z" stroke="#141511" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 21C12 21 5 15.25 5 10C5 6.134 8.134 3 12 3C15.866 3 19 6.134 19 10C19 15.25 12 21 12 21Z" stroke="#141511" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                Delivery addresses
                            </div>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.5 15L12.5 10L7.5 5" stroke="#141511" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <div className="py-[16px] px-[12px] flex items-center justify-between border-b border-[#D6D6D5] h-[56px]">
                            <div className="flex items-center gap-[12px] text-[#141511] font-medium text-[14px]">
                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.9992 11.1989L11.5006 13.7004L10 12.1998" stroke="#141511" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9998 4.69666C7.02777 4.69666 2.99609 8.05673 2.99609 12.1969C3.07125 14.6952 4.4491 16.9718 6.62761 18.197C6.41121 18.7851 6.11031 19.3385 5.73437 19.8398C5.52688 20.1428 5.53201 20.5434 5.7472 20.8409C5.96238 21.1385 6.34125 21.2688 6.69393 21.1666C7.89676 20.8164 9.02892 20.2581 10.039 19.5171C10.6856 19.6383 11.342 19.6986 11.9998 19.6971C16.9719 19.6971 21.0036 16.337 21.0036 12.1969C21.0036 8.05674 16.9719 4.69666 11.9998 4.69666Z" stroke="#141511" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                Help centre
                            </div>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.5 15L12.5 10L7.5 5" stroke="#141511" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <div className="py-[16px] px-[12px] flex items-center justify-between border-b border-[#D6D6D5] h-[56px]">
                            <div className="flex items-center gap-[12px] text-[#141511] font-medium text-[14px]">
                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.5 4.40002V7.40002" stroke="#141511" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M20.5 20.4L16.5 11.4L12.5 20.4" stroke="#141511" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M13.3906 18.4H19.6106" stroke="#141511" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M3.5 15.4C7.595 15.076 11.176 11.495 11.501 7.40002H3.501" stroke="#141511" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M11.5 15.4C8.941 15.198 6.702 12.959 6.5 10.4" stroke="#141511" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                Change Language
                            </div>
                            <div className="flex items-center gap-[8px] text-[#141511] font-medium text-[14px]">
                                <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_855_31298)">
                                    <path d="M11 21.4C16.5228 21.4 21 16.9229 21 11.4C21 5.87718 16.5228 1.40002 11 1.40002C5.47715 1.40002 1 5.87718 1 11.4C1 16.9229 5.47715 21.4 11 21.4Z" fill="#F0F0F0"/>
                                    <path d="M21.0003 11.4C21.0003 7.10039 18.2865 3.43496 14.4785 2.02203V20.7781C18.2865 19.3651 21.0003 15.6997 21.0003 11.4Z" fill="#D80027"/>
                                    <path d="M1 11.4C1 15.6997 3.71379 19.3651 7.52176 20.778V2.02203C3.71379 3.43496 1 7.10039 1 11.4Z" fill="#0052B4"/>
                                    </g>
                                    <rect x="0.5" y="0.900024" width="21" height="21" rx="10.5" stroke="white"/>
                                    <defs>
                                    <clipPath id="clip0_855_31298">
                                    <rect x="1" y="1.40002" width="20" height="20" rx="10" fill="white"/>
                                    </clipPath>
                                    </defs>
                                </svg>
                                French
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.5 15L12.5 10L7.5 5" stroke="#141511" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                        </div>
                        <div className="py-[16px] px-[12px] flex items-center justify-between border-b border-[#D6D6D5] h-[56px]">
                            <div className="flex items-center gap-[12px] text-[#141511] font-medium text-[14px]">
                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.8496 19.971H16.4786C18.7266 19.971 20.5496 18.148 20.5496 15.9" stroke="#141511" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M16.0706 21.193L14.8496 19.972L16.0706 18.751" stroke="#141511" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M9.14922 4.229H7.52022C5.27222 4.229 3.44922 6.052 3.44922 8.3" stroke="#141511" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M7.92969 3.00696L9.15069 4.22896L7.92969 5.44996" stroke="#141511" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17.2395 12.119C19.8575 12.119 21.9995 9.97698 21.9995 7.35998C21.9995 4.74298 19.8575 2.59998 17.2395 2.59998C14.6215 2.59998 12.4805 4.74198 12.4805 7.35998C12.4805 8.42798 12.8415 9.41298 13.4405 10.209C14.3115 11.365 15.6905 12.119 17.2395 12.119V12.119Z" stroke="#141511" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M17.2402 5.21796V4.50396" stroke="#141511" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M17.2402 9.50097V10.215" stroke="#141511" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M16.0005 8.99098C16.1855 9.29398 16.5015 9.50298 16.8825 9.50298H17.2395H17.6645C18.2185 9.50298 18.6665 9.05398 18.6665 8.50098C18.6665 8.04098 18.3535 7.63998 17.9075 7.52798L16.5695 7.19198C16.1245 7.07998 15.8105 6.67898 15.8105 6.21898C15.8105 5.66498 16.2595 5.21698 16.8125 5.21698H17.2375H17.5945C17.9755 5.21698 18.2905 5.42498 18.4755 5.72698" stroke="#141511" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M10.1093 20.199C8.25425 22.054 5.24625 22.054 3.39125 20.199C1.53625 18.344 1.53625 15.336 3.39125 13.481C5.24625 11.626 8.25425 11.626 10.1093 13.481C11.9643 15.337 11.9643 18.344 10.1093 20.199" stroke="#141511" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M4.14453 16.84H6.99453" stroke="#141511" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M7.92614 19.006C7.06014 19.381 6.02314 19.227 5.31514 18.519C4.38714 17.591 4.38714 16.088 5.31514 15.16C6.02314 14.452 7.06114 14.298 7.92614 14.673" stroke="#141511" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                Currency
                            </div>
                            <div className="flex items-center gap-[8px] text-[#141511] font-medium text-[14px]">
                                EUR (Euro)
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.5 15L12.5 10L7.5 5" stroke="#141511" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                        </div>
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