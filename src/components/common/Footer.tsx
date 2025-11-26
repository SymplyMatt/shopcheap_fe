import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const Footer = () => {
    const { showAccount } = useSelector((state: RootState) => state.app);
    return (
        <div className={`w-full flex flex-col justify-center items-center ${!showAccount && "pt-[24px]"} thisisfooter`}>
            <div className="flex w-full bg-black flex-col gap-[50px] tmd:gap-[100px] text-[#E6E6E6] px-[20px] tmd:px-[50px] py-[70px]">
                <div className="grid grid-cols-1 tmd:grid-cols-5 w-full gap-[50px]">
                    <div className="flex flex-col w-full gap-[50px] col-span-1 tmd:col-span-3 tmd:pr-[50px] order-2 tmd:order-1">
                        <div className="w-full grid grid-cols-1 tmd:grid-cols-3 gap-[20px] tmd:gap-[100px] items-center justify-between">
                            <div className="flex flex-col text-white gap-[12px] tmd:gap-[36px] col-span-1">
                                <div className="uppercase text-[24px] font-semibold leading-[32.78px] tracking-[0%] text-white">TOP BRANDS</div>
                                <div className="flex flex-col justify-center gap-[16px] text-[#E6E6E6]">
                                    <div className="text-[16px] font-normal leading-[21.86px] tracking-[0%] cursor-pointer">New Balance</div>
                                    <div className="text-[16px] font-normal leading-[21.86px] tracking-[0%] cursor-pointer">Adidas</div>
                                    <div className="text-[16px] font-normal leading-[21.86px] tracking-[0%] cursor-pointer">Birkenstock</div>
                                    <div className="text-[16px] font-normal leading-[21.86px] tracking-[0%] cursor-pointer">Nike</div>
                                    <div className="text-[16px] font-normal leading-[21.86px] tracking-[0%] cursor-pointer">All Brands</div>
                                </div>
                            </div>
                            <div className="flex flex-col text-white gap-[12px] tmd:gap-[36px] col-span-1">
                                <div className="uppercase text-[24px] font-semibold leading-[32.78px] tracking-[0%]">HELP</div>
                                <div className="flex flex-col justify-center gap-[16px] text-[#E6E6E6]">
                                    <div className="text-[16px] font-normal leading-[21.86px] tracking-[0%] cursor-pointer">Track Order</div>
                                    <div className="text-[16px] font-normal leading-[21.86px] tracking-[0%] cursor-pointer">Returns & Exchanges</div>
                                    <div className="text-[16px] font-normal leading-[21.86px] tracking-[0%] cursor-pointer">FAQ</div>
                                    <div className="text-[16px] font-normal leading-[21.86px] tracking-[0%] cursor-pointer">Contact Us</div>
                                    <div className="text-[16px] font-normal leading-[21.86px] tracking-[0%] cursor-pointer">Site Map</div>
                                </div>
                            </div>
                            <div className="flex flex-col text-white gap-[12px] tmd:gap-[36px] col-span-1">
                                <div className="uppercase text-[24px] font-semibold leading-[32.78px] tracking-[0%]">LEGAL</div>
                                <div className="flex flex-col justify-center gap-[16px] text-[#E6E6E6]">
                                    <div className="text-[16px] font-normal leading-[21.86px] tracking-[0%] cursor-pointer">Confidentiality Policy</div>
                                    <div className="text-[16px] font-normal leading-[21.86px] tracking-[0%] cursor-pointer">Terms & Conditions</div>
                                    <div className="text-[16px] font-normal leading-[21.86px] tracking-[0%] cursor-pointer">Cookie Policy</div>
                                    <div className="text-[16px] font-normal leading-[21.86px] tracking-[0%] cursor-pointer">Accessibility</div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-[0.5px] bg-[#969696]"></div>
                    </div>
                    <div className="col-span-1 tmd:col-span-2 flex flex-col gap-[36px] order-1 tmd:order-2">
                        <div className="flex flex-col gap-[36px]">
                            <img src="/images/logowhite.svg" className="h-[46px] w-[186px]"/>
                            <div className="w-full text-[16px] font-normal leading-[28px] tracking-[0%] text-[#E6E6E6]">From Tunisian Vision 🇹🇳✨ to Global Fashion Fusion. Drest  is home to 20+ local and global brands  redefining Tunisian e-commerce since 2020. Born from the  adventure of two trailblazers, we sparked a style revolution, uniting  New Look UK, Havaianas, Timberland, and more under one roof. Discover a world where borders fade and trends unite. <span className="italic font-semibold">#FashionWithoutBorders #StyleRedefined</span></div>
                        </div>
                        <div className="tmd:hidden flex flex-col gap-[36px] col-span-2 text-[#E6E6E6]">
                            <div className="text-[16px] font-normal leading-[21.86px] tracking-[0%]">Stay connected with us:</div>
                            <div className="flex items-center gap-[36px]">
                                <div className="h-[36px] w-[36px]"><img src="/images/pinterest.svg" alt="" /></div>
                                <div className="h-[36px] w-[36px]"><img src="/images/instagram.svg" alt="" /></div>
                                <div className="h-[36px] w-[36px]"><img src="/images/x.svg" alt="" /></div>
                                <div className="h-[36px] w-[36px]"><img src="/images/facebook.svg" alt="" /></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full grid grid-cols-5 items-center gap-[50px]">
                    <div className="flex flex-col gap-[36px]  col-span-3 text-[#E6E6E6]">
                        <div className="text-[16px] font-normal leading-[21.86px] tracking-[0%]">Accepted Payment methods</div>
                        <div className="flex items-center gap-[36px]">
                            <img src="/images/visa.svg" alt="" className="tmd:h-full h-[18px]"/>
                            <img src="/images/mastercard.svg" alt="" className="tmd:h-full h-[18px]" />
                            <img src="/images/americanexpress.svg" alt="" className="tmd:h-full h-[18px]" />
                            <img src="/images/paypal.svg" alt="" className="tmd:h-full h-[18px]" />
                        </div>
                    </div>
                    <div className="hidden tmd:flex flex-col gap-[36px] col-span-2 text-[#E6E6E6]">
                        <div className="text-[16px] font-normal leading-[21.86px] tracking-[0%]">Stay connected with us:</div>
                        <div className="flex items-center gap-[36px]">
                            <div className="h-[36px] w-[36px]"><img src="/images/pinterest.svg" alt="" /></div>
                            <div className="h-[36px] w-[36px]"><img src="/images/instagram.svg" alt="" /></div>
                            <div className="h-[36px] w-[36px]"><img src="/images/x.svg" alt="" /></div>
                            <div className="h-[36px] w-[36px]"><img src="/images/facebook.svg" alt="" /></div>
                        </div>
                    </div>
                </div>
                <div className="w-full flex items-center justify-center text-[14px] font-normal leading-[19.12px] tracking-[0%] text-[#E6E6E6] py-[20px]">© 2024 Drest. All Rights Reserved</div>
            </div>
        </div>
    )
}

export default Footer