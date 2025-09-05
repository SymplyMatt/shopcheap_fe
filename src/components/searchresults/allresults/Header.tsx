import { useNavigate, useSearchParams } from "react-router-dom";
import RoundCategoriesSlider from "../../home/RoundCategoriesSlider";
import BrandsSlider from "./BrandsSlider";
import utils from "../../../utils/utils";

const Header = () => {
    const [searchParams] = useSearchParams();
    const searchQuery = searchParams.get("search");
    const link = searchParams.get("link");
    const type = searchParams.get("type");
    const subcategory = searchParams.get("subcategory");
    const menu = searchParams.get("menu");
    const sublink = searchParams.get("sublink");
    const navigate = useNavigate();
    return (
        <div className="w-full flex flex-col gap-[24px] justify-center">
            <div className="hidden tmd:flex px-[50px] pt-[20px] flex-col gap-[20px]">
                {type !== 'all' && <div className="items-center justify-center text-[18px] hidden tmd:flex">
                    {menu ?  utils.capitalizeEachWord(menu) : ''}
                    {subcategory ?  '/' : ''}
                    {subcategory ? utils.capitalizeEachWord(subcategory) : ''}
                </div>}
                <div className="w-full flex-col gap-[24px] justify-center hidden tmd:flex">
                    <div className="w-full flex items-center justify-between h-[48px]">
                        <div className="flex gap-[8px] items-end">
                            {type === 'all' && <div className="gap-[16px] text-[32px] font-semibold leading-[130%] tracking-[-4%] items-end">Search results for “{searchQuery}” <span className="text-[16px] font-normal capitalize">(Showing 2,001 Products)</span></div>}
                            {type !== 'all' && <div className="gap-[16px] text-[32px] font-semibold leading-[130%] tracking-[-4%] items-end uppercase">{sublink ? sublink : link ? link : subcategory} <span className="text-[16px] font-normal capitalize">(Showing 2,001 Products)</span></div>}
                        </div>
                        <div className="flex items-center gap-[18px]">
                            <div className="flex items-center gap-[18px]">
                                <span>Sort:</span>
                                <select className="h-[48px] border border-black py-[8px] px-[12px] cursor-pointer outline-none min-w-[300px] text-[20px]">
                                    <option value="a-z">NEWEST</option>
                                </select>
                            </div>
                            <div className="flex items-center gap-[18px]">
                                <img src="/images/prev_arrivals.svg" className="cursor-pointer" />
                                <span>1/13</span>
                                <img src="/images/next_arrivals.svg" className="cursor-pointer" />
                            </div>
                        </div>
                    </div>
                    <div className="h-[1px] bg-[#E6E6E6] w-full"></div>
                </div>
                {type === 'category' && <RoundCategoriesSlider/>}
                {type === 'subcategory' && <BrandsSlider />}
                {type === 'all' &&<div className="w-full hidden tmd:flex items-center justify-center gap-[18px]">
                    <select className="cursor-pointer border border-[#959694] border-[0.7px] h-[40px] rounded-[38px] py-[8px] px-[16px] text-[#141511]">
                        <option value="Universe">Universe</option>
                    </select>
                    <select className="cursor-pointer border border-[#959694] border-[0.7px] h-[40px] rounded-[38px] py-[8px] px-[16px] text-[#141511]">
                        <option value="Universe">Category</option>
                    </select>
                    <select className="cursor-pointer border border-[#959694] border-[0.7px] h-[40px] rounded-[38px] py-[8px] px-[16px] text-[#141511]">
                        <option value="Universe">Size</option>
                    </select>
                    <select className="cursor-pointer border border-[#959694] border-[0.7px] h-[40px] rounded-[38px] py-[8px] px-[16px] text-[#141511]">
                        <option value="Universe">Color</option>
                    </select>
                    <select className="cursor-pointer border border-[#959694] border-[0.7px] h-[40px] rounded-[38px] py-[8px] px-[16px] text-[#141511]">
                        <option value="Universe">Brand</option>
                    </select>
                    <select className="cursor-pointer border border-[#959694] border-[0.7px] h-[40px] rounded-[38px] py-[8px] px-[16px] text-[#141511]">
                        <option value="Universe">Price</option>
                    </select>
                    <select className="cursor-pointer border border-[#959694] border-[0.7px] h-[40px] rounded-[38px] py-[8px] px-[16px] text-[#141511]">
                        <option value="Universe">Ratings</option>
                    </select>
                    <div className="cursor-pointer flex items-center justify-center gap-[8px] h-[40px] border border-[#959694] border-[0.7px] rounded-[38px] py-[8px] px-[16px] text-[#141511] font-semibold">
                        All Filters <img src="/images/filters.svg"/>
                    </div>
                </div>}
                {type !== 'all' &&<div className="w-full hidden tmd:flex items-center gap-[16px]">
                    <select className="cursor-pointer border border-[#959694] border-[0.7px] h-[40px] rounded-[38px] py-[8px] px-[16px] text-[#141511]">
                        <option value="Universe">Category</option>
                    </select>
                    <select className="cursor-pointer border border-[#959694] border-[0.7px] h-[40px] rounded-[38px] py-[8px] px-[16px] text-[#141511]">
                        <option value="Universe">Size</option>
                    </select>
                    <select className="cursor-pointer border border-[#959694] border-[0.7px] h-[40px] rounded-[38px] py-[8px] px-[16px] text-[#141511]">
                        <option value="Universe">Length</option>
                    </select>
                    <select className="cursor-pointer border border-[#959694] border-[0.7px] h-[40px] rounded-[38px] py-[8px] px-[16px] text-[#141511]">
                        <option value="Universe">Brand</option>
                    </select>
                    <select className="cursor-pointer border border-[#959694] border-[0.7px] h-[40px] rounded-[38px] py-[8px] px-[16px] text-[#141511]">
                        <option value="Universe">Color</option>
                    </select>
                    <select className="cursor-pointer border border-[#959694] border-[0.7px] h-[40px] rounded-[38px] py-[8px] px-[16px] text-[#141511]">
                        <option value="Universe">Price</option>
                    </select>
                    <select className="cursor-pointer border border-[#959694] border-[0.7px] h-[40px] rounded-[38px] py-[8px] px-[16px] text-[#141511]">
                        <option value="Universe">Material</option>
                    </select>
                    <select className="cursor-pointer border border-[#959694] border-[0.7px] h-[40px] rounded-[38px] py-[8px] px-[16px] text-[#141511]">
                        <option value="Universe">Ratings</option>
                    </select>
                    <select className="cursor-pointer border border-[#959694] border-[0.7px] h-[40px] rounded-[38px] py-[8px] px-[16px] text-[#141511]">
                        <option value="Universe">Neck type</option>
                    </select>
                    <select className="cursor-pointer border border-[#959694] border-[0.7px] h-[40px] rounded-[38px] py-[8px] px-[16px] text-[#141511]">
                        <option value="Universe">Sleeve type</option>
                    </select>
                    <div className="cursor-pointer flex items-center justify-center gap-[8px] h-[40px] border border-[#959694] border-[0.7px] rounded-[38px] py-[8px] px-[16px] text-[#141511] font-semibold whitespace-nowrap">
                        All Filters <img src="/images/filters.svg"/>
                    </div>
                </div>}
                {type !== 'all' ? <div className="w-full hidden tmd:flex items-center gap-[8px]">
                    {sublink ? <div className="flex items-center justify-center gap-[4px] h-[40px] border border-[#D6D6D5] py-[8px] px-[12px] text-[#4F4F4D] text-[14px] cursor-pointer bg-[#F3F3F3]"> {utils.capitalizeEachWord(sublink as string)} 
                        <img src="/images/x_sm.svg" onClick={()=>{
                            const params = new URLSearchParams(searchParams);
                            params.delete("sublink");
                            params.set("type", "category");
                            navigate(`/search/allresults?${params.toString()}`);
                        }}/>
                    </div> : ''}
                    {link ? <div className="flex items-center justify-center gap-[4px] h-[40px] border border-[#D6D6D5] py-[8px] px-[12px] text-[#4F4F4D] text-[14px] cursor-pointer bg-[#F3F3F3]">{utils.capitalizeEachWord(link as string)} 
                        <img src="/images/x_sm.svg" onClick={()=>{
                            const params = new URLSearchParams(searchParams);
                            params.set("type", "category");
                            params.delete("sublink");
                            params.delete("link");
                            navigate(`/search/allresults?${params.toString()}`);
                        }}/>
                    </div> : ''}
                    {link || sublink ? <div className="text-[#141511] cursor-pointer underline text-[14px] ml-[10px]" onClick={()=>navigate('/')}>Clear all</div> : ''}
                </div> : ''}
            </div>
            <div className="tmd:hidden flex w-full flex-col">
                <div className="w-full flex border-t border-b border-[#D6D6D5] h-[80px] items-center justify-center px-[16px]">
                        <div className="border border-[#141511] h-[48px] w-full grid grid-cols-[1fr_1.4fr_48px]">
                            <div className="col-span-1 border-r border-[#141511] flex items-center justify-center gap-[12px] font-bold text-[18px]">
                                WOMEN
                                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.6552 2L6.00141 7.65375L0.347656 2L1.40141 0.946247L6.00141 5.54625L10.6014 0.946247L11.6552 2Z" fill="#141511"/>
                                </svg>
                            </div>
                            <div className="col-span-1 flex items-center justify-center px-[16px]">
                                <input type="text" className="border-none outline-none w-full" value={'wo|'}/>
                            </div>
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="48" height="48" fill="#141511"/>
                                <mask id="mask0_855_33610" maskUnits="userSpaceOnUse" x="12" y="12" width="24" height="24">
                                <rect x="12" y="12" width="24" height="24" fill="#D9D9D9"/>
                                </mask>
                                <g mask="url(#mask0_855_33610)">
                                <path d="M31.5406 32.577L25.2598 26.296C24.7598 26.7088 24.1848 27.0319 23.5348 27.2653C22.8848 27.4986 22.2124 27.6153 21.5176 27.6153C19.8084 27.6153 18.3619 27.0235 17.1781 25.84C15.9943 24.6565 15.4023 23.2103 15.4023 21.5015C15.4023 19.7928 15.9941 18.3462 17.1776 17.1615C18.3611 15.977 19.8073 15.3848 21.5161 15.3848C23.2248 15.3848 24.6714 15.9767 25.8561 17.1605C27.0406 18.3443 27.6328 19.7908 27.6328 21.5C27.6328 22.2142 27.513 22.8963 27.2733 23.5463C27.0335 24.1963 26.7136 24.7616 26.3136 25.2423L32.5943 31.523L31.5406 32.577ZM21.5176 26.1155C22.8061 26.1155 23.8974 25.6683 24.7916 24.774C25.6859 23.8798 26.1331 22.7885 26.1331 21.5C26.1331 20.2115 25.6859 19.1202 24.7916 18.226C23.8974 17.3317 22.8061 16.8845 21.5176 16.8845C20.2291 16.8845 19.1378 17.3317 18.2436 18.226C17.3493 19.1202 16.9021 20.2115 16.9021 21.5C16.9021 22.7885 17.3493 23.8798 18.2436 24.774C19.1378 25.6683 20.2291 26.1155 21.5176 26.1155Z" fill="white"/>
                                </g>
                            </svg>
                        </div>
                </div>
                <div className="w-full flex items-center justify-start gap-[18px] overflow-x-auto py-[16px] px-[20px] scrollbar-hide">
                    <div className="whitespace-nowrap w-fit cursor-pointer flex items-center justify-center gap-[8px] h-[40px] border border-[#959694] border-[0.7px] rounded-[38px] py-[8px] px-[16px] text-[#141511] font-semibold">
                        All Filters <img src="/images/filters.svg" />
                    </div>
                    <select className="whitespace-nowrap cursor-pointer border border-[#959694] border-[0.7px] h-[40px] rounded-[38px] py-[8px] px-[16px] text-[#141511] whitespace-nowrap">
                        <option value="Universe">Universe</option>
                    </select>
                    <select className="whitespace-nowrap cursor-pointer border border-[#959694] border-[0.7px] h-[40px] rounded-[38px] py-[8px] px-[16px] text-[#141511] whitespace-nowrap">
                        <option value="Universe">Category</option>
                    </select>
                    <select className="whitespace-nowrap cursor-pointer border border-[#959694] border-[0.7px] h-[40px] rounded-[38px] py-[8px] px-[16px] text-[#141511] whitespace-nowrap">
                        <option value="Universe">Size</option>
                    </select>
                    <select className="whitespace-nowrap cursor-pointer border border-[#959694] border-[0.7px] h-[40px] rounded-[38px] py-[8px] px-[16px] text-[#141511] whitespace-nowrap">
                        <option value="Universe">Universe</option>
                    </select>
                </div>
                <div className="flex items-center px-[20px]">
                    <div className="flex items-center justify-center gap-[12px] h-[40px] border border-[#D6D6D5] py-[8px] px-[12px] text-[#4F4F4D] text-[14px] cursor-pointer bg-[#F3F3F3]">Women 
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.85403 9.14624C9.90048 9.19269 9.93733 9.24784 9.96247 9.30854C9.98762 9.36924 10.0006 9.43429 10.0006 9.49999C10.0006 9.56569 9.98762 9.63074 9.96247 9.69144C9.93733 9.75213 9.90048 9.80728 9.85403 9.85374C9.80757 9.90019 9.75242 9.93704 9.69173 9.96218C9.63103 9.98733 9.56598 10.0003 9.50028 10.0003C9.43458 10.0003 9.36953 9.98733 9.30883 9.96218C9.24813 9.93704 9.19298 9.90019 9.14653 9.85374L5.00028 5.70686L0.854028 9.85374C0.760208 9.94756 0.63296 10.0003 0.500278 10.0003C0.367596 10.0003 0.240348 9.94756 0.146528 9.85374C0.0527077 9.75992 2.61548e-09 9.63267 0 9.49999C-2.61548e-09 9.36731 0.0527077 9.24006 0.146528 9.14624L4.2934 4.99999L0.146528 0.853738C0.0527077 0.759918 0 0.63267 0 0.499988C0 0.367306 0.0527077 0.240058 0.146528 0.146238C0.240348 0.0524178 0.367596 -0.000289917 0.500278 -0.000289917C0.63296 -0.000289917 0.760208 0.0524178 0.854028 0.146238L5.00028 4.29311L9.14653 0.146238C9.24035 0.0524178 9.3676 -0.00028992 9.50028 -0.000289917C9.63296 -0.000289914 9.76021 0.0524178 9.85403 0.146238C9.94785 0.240058 10.0006 0.367306 10.0006 0.499988C10.0006 0.63267 9.94785 0.759918 9.85403 0.853738L5.70715 4.99999L9.85403 9.14624Z" fill="#4F4F4D"/>
                        </svg>
                    </div>
                    <div className="text-[#141511] cursor-pointer underline text-[14px] ml-[10px]" onClick={()=>navigate('/')}>Clear all</div>
                </div>
                <div className="w-full flex items-center justify-between gap-[16px] text-[16px] font-semibold leading-[130%] tracking-[-4%] px-[20px] pt-[20px]">Search results for “{searchQuery}” <span className="text-[16px] font-normal capitalize">Showing 2,001 Products</span></div>
            </div>
        </div>
    );
}
export default Header;