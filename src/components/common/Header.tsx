import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import UserInfo from "./UserInfo";

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [location.pathname]);
    return (
        <>
            <div className="w-full flex flex-col bg-white/95 backdrop-blur border-b border-[#E6E6E6] relative z-50">
                <div
                    className={`w-full h-[70px] tmd:h-[92px] px-[20px] tmd:px-[50px] flex justify-between items-center gap-[24px]`}
                >
                    <div
                        className="flex items-center gap-[10px] cursor-pointer group"
                        onClick={() => navigate('/')}
                    >
                        <img
                            src="/images/logo.png"
                            className="h-[40px] tmd:h-[60px] transition-transform duration-200 group-hover:scale-105"
                            alt="ShopCheap logo"
                        />
                    </div>
                    <UserInfo />
                </div>
                
                <div className="relative h-[52px] w-full px-[20px] tmd:px-[50px] hidden tmd:flex items-center justify-between bg-[#F9FAFB] border-t border-[#E6E6E6]">
                    <div className="flex items-center gap-[28px] text-[13px] font-medium text-[#374151]">
                        <button
                            className={`uppercase tracking-[0.08em] pb-[2px] border-b-2 transition-all duration-150 ${
                                location.pathname === '/' 
                                    ? 'border-[#8F0024] text-[#8F0024]' 
                                    : 'border-transparent hover:border-[#8F0024]/60 hover:text-[#8F0024]'
                            }`}
                            onClick={() => navigate('/')}
                        >
                            Home
                        </button>
                        <button
                            className={`uppercase tracking-[0.08em] pb-[2px] border-b-2 transition-all duration-150 ${
                                location.pathname === '/about' 
                                    ? 'border-[#8F0024] text-[#8F0024]' 
                                    : 'border-transparent hover:border-[#8F0024]/60 hover:text-[#8F0024]'
                            }`}
                            onClick={() => navigate('/about')}
                        >
                            About Us
                        </button>
                        <button
                            className={`uppercase tracking-[0.08em] pb-[2px] border-b-2 transition-all duration-150 ${
                                location.pathname === '/contact' 
                                    ? 'border-[#8F0024] text-[#8F0024]' 
                                    : 'border-transparent hover:border-[#8F0024]/60 hover:text-[#8F0024]'
                            }`}
                            onClick={() => navigate('/contact')}
                        >
                            Contact Us
                        </button>
                        <button
                            className={`uppercase tracking-[0.08em] pb-[2px] border-b-2 transition-all duration-150 ${
                                location.pathname === '/store' 
                                    ? 'border-[#8F0024] text-[#8F0024]' 
                                    : 'border-transparent hover:border-[#8F0024]/60 hover:text-[#8F0024]'
                            }`}
                            onClick={() => navigate('/store')}
                        >
                            Store
                        </button>
                        <button
                            className={`uppercase tracking-[0.08em] pb-[2px] border-b-2 transition-all duration-150 ${
                                location.pathname === '/in-season' 
                                    ? 'border-[#8F0024] text-[#8F0024]' 
                                    : 'border-transparent hover:border-[#8F0024]/60 hover:text-[#8F0024]'
                            }`}
                            onClick={() => navigate('/in-season')}
                        >
                            In Season
                        </button>
                    </div>
                    <div className="flex items-center gap-[10px] text-[13px] text-[#4B5563]">
                        <img src="/images/headphone.svg" alt="Support" className="h-[18px] w-[18px]" />
                        <span className="hidden xl:inline">Need help?</span>
                        <span className="font-semibold text-[#111827] tracking-wide">
                            +234 703 135 5990
                        </span>
                    </div>
                </div>

                {!location.pathname.includes('/orders') && (
                    <div className="items-center gap-[14px] flex tmd:hidden w-full px-[16px] py-[10px] overflow-x-auto bg-[#F9FAFB]">
                        <button
                            className={`uppercase font-semibold cursor-pointer text-[12px] whitespace-nowrap transition-colors ${
                                location.pathname === '/' ? 'text-[#8F0024]' : 'opacity-[0.90] text-[#111827] hover:text-[#8F0024]'
                            }`}
                            onClick={() => navigate('/')}
                        >
                            Home
                        </button>
                        <button
                            className={`uppercase font-semibold cursor-pointer text-[12px] whitespace-nowrap transition-colors ${
                                location.pathname === '/about' ? 'text-[#8F0024]' : 'opacity-[0.90] text-[#111827] hover:text-[#8F0024]'
                            }`}
                            onClick={() => navigate('/about')}
                        >
                            About Us
                        </button>
                        <button
                            className={`uppercase font-semibold cursor-pointer text-[12px] whitespace-nowrap transition-colors ${
                                location.pathname === '/contact' ? 'text-[#8F0024]' : 'opacity-[0.90] text-[#111827] hover:text-[#8F0024]'
                            }`}
                            onClick={() => navigate('/contact')}
                        >
                            Contact Us
                        </button>
                        <button
                            className={`uppercase font-semibold cursor-pointer text-[12px] whitespace-nowrap transition-colors ${
                                location.pathname === '/store' ? 'text-[#8F0024]' : 'opacity-[0.90] text-[#111827] hover:text-[#8F0024]'
                            }`}
                            onClick={() => navigate('/store')}
                        >
                            Store
                        </button>
                        <button
                            className={`uppercase font-semibold cursor-pointer text-[12px] whitespace-nowrap transition-colors ${
                                location.pathname === '/in-season' ? 'text-[#8F0024]' : 'opacity-[0.90] text-[#111827] hover:text-[#8F0024]'
                            }`}
                            onClick={() => navigate('/in-season')}
                        >
                            In Season
                        </button>
                    </div>
                )}
            </div>
        </>
    )
}

export default Header