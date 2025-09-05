import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import UserInfo from "./UserInfo";
import MenuLinks from "./MenuLinks";

const Header = () => {
    const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
    const navigate = useNavigate();
    const location = useLocation();
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [location.pathname]);
    return (
        <>
            <div className="w-full flex flex-col">
                <div className="w-full flex h-[42px] bg-[#10583E] items-center justify-center text-textWhite px-[20px] tmd:px-[50px]">
                    <div className="flex justify-center items-center gap-[40px] text-[14px] w-full tmd:w-fit">
                        <div className="cursor-pointer hidden tmd:block "><img src="/images/arrowleft.svg" /></div>
                        <div className="hidden tmd:block font-semibold">We love love - Shop for all the Valentine's Day gifts in our LOVE SALE!!</div>
                        <div className="block tmd:hidden font-semibold text-[12px] flex items-center gap-[4px] w-full justify-between whitespace-nowrap">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-0">
                        <path d="M9.85342 9.14624C9.89987 9.1927 9.93672 9.24785 9.96186 9.30855C9.98701 9.36924 9.99995 9.4343 9.99995 9.49999C9.99995 9.56569 9.98701 9.63075 9.96186 9.69144C9.93672 9.75214 9.89987 9.80729 9.85342 9.85374C9.80696 9.9002 9.75181 9.93705 9.69112 9.96219C9.63042 9.98733 9.56537 10.0003 9.49967 10.0003C9.43397 10.0003 9.36892 9.98733 9.30822 9.96219C9.24752 9.93705 9.19237 9.9002 9.14592 9.85374L4.99967 5.70687L0.853418 9.85374C0.759597 9.94756 0.63235 10.0003 0.499668 10.0003C0.366986 10.0003 0.239738 9.94756 0.145918 9.85374C0.0520973 9.75992 -0.000610349 9.63268 -0.000610352 9.49999C-0.000610354 9.36731 0.0520973 9.24006 0.145918 9.14624L4.29279 4.99999L0.145918 0.853744C0.0520973 0.759923 -0.000610352 0.632676 -0.000610352 0.499994C-0.000610352 0.367312 0.0520973 0.240064 0.145918 0.146244C0.239738 0.0524235 0.366986 -0.000284195 0.499668 -0.000284195C0.63235 -0.000284195 0.759597 0.0524235 0.853418 0.146244L4.99967 4.29312L9.14592 0.146244C9.23974 0.0524235 9.36699 -0.000284198 9.49967 -0.000284195C9.63235 -0.000284192 9.7596 0.0524235 9.85342 0.146244C9.94724 0.240064 9.99995 0.367312 9.99995 0.499994C9.99995 0.632676 9.94724 0.759923 9.85342 0.853744L5.70654 4.99999L9.85342 9.14624Z" fill="white"/>
                        </svg>
                            Special offers : 15% off for first purchase for new users
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.85342 9.14624C9.89987 9.1927 9.93672 9.24785 9.96186 9.30855C9.98701 9.36924 9.99995 9.4343 9.99995 9.49999C9.99995 9.56569 9.98701 9.63075 9.96186 9.69144C9.93672 9.75214 9.89987 9.80729 9.85342 9.85374C9.80696 9.9002 9.75181 9.93705 9.69112 9.96219C9.63042 9.98733 9.56537 10.0003 9.49967 10.0003C9.43397 10.0003 9.36892 9.98733 9.30822 9.96219C9.24752 9.93705 9.19237 9.9002 9.14592 9.85374L4.99967 5.70687L0.853418 9.85374C0.759597 9.94756 0.63235 10.0003 0.499668 10.0003C0.366986 10.0003 0.239738 9.94756 0.145918 9.85374C0.0520973 9.75992 -0.000610349 9.63268 -0.000610352 9.49999C-0.000610354 9.36731 0.0520973 9.24006 0.145918 9.14624L4.29279 4.99999L0.145918 0.853744C0.0520973 0.759923 -0.000610352 0.632676 -0.000610352 0.499994C-0.000610352 0.367312 0.0520973 0.240064 0.145918 0.146244C0.239738 0.0524235 0.366986 -0.000284195 0.499668 -0.000284195C0.63235 -0.000284195 0.759597 0.0524235 0.853418 0.146244L4.99967 4.29312L9.14592 0.146244C9.23974 0.0524235 9.36699 -0.000284198 9.49967 -0.000284195C9.63235 -0.000284192 9.7596 0.0524235 9.85342 0.146244C9.94724 0.240064 9.99995 0.367312 9.99995 0.499994C9.99995 0.632676 9.94724 0.759923 9.85342 0.853744L5.70654 4.99999L9.85342 9.14624Z" fill="white"/>
                            </svg>

                            </div>
                        <div className="hidden tmd:block font-medium underline leading-[14px] cursor-pointer">SHOP NOW</div>
                        <div className="hidden tmd:block cursor-pointer"><img src="/images/arrowright.svg" /></div>
                    </div>
                </div>
                <div className={`w-full h-[92px] border-b border-[#E6E6E6] px-[20px] tmd:px-[50px] justify-between items-center gap-[24px] ${location.pathname.includes('/search') ? 'hidden tmd:flex' : 'flex'}`}>
                    <div className="cursor-pointer" onClick={()=>navigate('/')}><img src="/images/logo.png" className="h-[40px] tmd:h-[60px]"/></div>
                    <UserInfo />
                </div>
                <div className="relative border-b border-[#E6E6E6] h-[48px] w-full px-[20px] tmd:px-[50px] hidden tmd:flex items-center justify-between">
                    <div className="flex items-center gap-[30px] text-[14px]">
                        {["New Arrivals", "Shoes", "Clothing", "Accessories", "Bags", "Sports", "Gifts", "Brands", "SALE"].map((category, index) => (
                            <div className={`group h-full ${category.toLowerCase() !== 'sale' ? 'font-medium cursor-pointer hover:decoration-2 ' : 'font-semibold cursor-pointer text-[#D52B56]'}`} key={index} onMouseEnter={() => setHoveredMenu(category)}>
                                {category}
                                <span className="h-[3px] bg-[#912A1D] absolute bottom-[-1px] hidden group-hover:block" style={{ width: `${category.length * 7}px` }}></span>
                            </div>
                        ))}
                    </div>
                    <div className="flex items-center gap-[8px]"><img src="/images/headphone.svg" /> Need help? <span className="font-bold">+216 50 660006</span></div>
                </div>
                {!location.pathname.includes('/orders') ? <div className="items-center gap-[16px] uppercase flex tmd:hidden w-full px-[20px] py-[10px]">
                        {["women", "men", "kids", "home", "beauty"].map((category, index) => (
                            <div key={index} className="font-semibold cursor-pointer flex items-center opacity-[0.90] hover:text-[#8F0024] open-menu">
                                <img src={`/images/${category}.svg`} alt="" />
                            </div>
                        ))}
                </div> : ''}
            </div>
            <MenuLinks hoveredMenu={hoveredMenu} setHoveredMenu={setHoveredMenu}/>
        </>
    )
}

export default Header