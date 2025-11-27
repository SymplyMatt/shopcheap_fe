import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { RootState } from "../../redux/store";

const Footer = () => {
    const { showAccount } = useSelector((state: RootState) => state.app);
    const navigate = useNavigate();
    const location = useLocation();

    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About Us' },
        { path: '/contact', label: 'Contact Us' },
        { path: '/store', label: 'Store' },
        { path: '/in-season', label: 'In Season' }
    ];

    return (
        <div className={`w-full flex flex-col justify-center items-center ${!showAccount && "pt-[24px]"} thisisfooter`}>
            <div 
                className="flex w-full flex-col gap-[40px] tmd:gap-[50px] text-white px-[20px] tmd:px-[50px] py-[50px] tmd:py-[70px]"
                style={{ backgroundColor: 'rgb(16, 88, 62)' }}
            >
                <div className="flex flex-col tmd:flex-row items-center tmd:items-start justify-between gap-[40px] tmd:gap-[50px] w-full">
                    {/* Logo */}
                    <div className="flex items-center justify-center tmd:justify-start">
                        <img 
                            src="/images/logo.png" 
                            className="h-[40px] tmd:h-[60px] cursor-pointer transition-transform duration-200 hover:scale-105"
                            alt="ShopCheap logo"
                            onClick={() => navigate('/')}
                        />
                    </div>

                    {/* Navigation Links */}
                    <div className="flex flex-col tmd:flex-row items-center tmd:items-start gap-[24px] tmd:gap-[32px]">
                        {navLinks.map((link) => (
                            <button
                                key={link.path}
                                className={`uppercase tracking-[0.08em] text-[13px] tmd:text-[14px] font-medium transition-all duration-150 ${
                                    location.pathname === link.path 
                                        ? 'text-white border-b-2 border-white pb-[2px]' 
                                        : 'text-white/80 hover:text-white hover:border-b-2 hover:border-white/60 pb-[2px] border-b-2 border-transparent'
                                }`}
                                onClick={() => navigate(link.path)}
                            >
                                {link.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Store Description */}
                <div className="w-full flex flex-col items-center tmd:items-start gap-[16px] max-w-[800px] mx-auto tmd:mx-0">
                    <p className="text-[15px] tmd:text-[16px] leading-[24px] tmd:leading-[28px] text-white/90 text-center tmd:text-left font-light">
                        Your trusted destination for fresh, quality food items at unbeatable prices. 
                        ShopCheap brings you a curated selection of premium groceries, pantry essentials, and fresh produce 
                        delivered straight to your door. From farm-fresh ingredients to everyday staples, we make quality food accessible to everyone.
                    </p>
                </div>

                {/* Copyright */}
                <div className="w-full flex items-center justify-center text-[14px] font-normal leading-[19.12px] tracking-[0%] text-white/80 pt-[20px] border-t border-white/20">
                    © 2025 ShopCheap. All Rights Reserved
                </div>
            </div>
        </div>
    )
}

export default Footer