import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import RoundCategoriesSlider from "../../home/RoundCategoriesSlider";
import BrandsSlider from "./BrandsSlider";
import utils from "../../../utils/utils";

const Header = () => {
    const [searchParams] = useSearchParams();
    const searchQuery = searchParams.get("search");
    const type = searchParams.get("type");
    const subcategory = searchParams.get("subcategory");
    const menu = searchParams.get("menu");
    const { products, totalProducts } = useSelector((state: RootState) => state.app);
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
                            {type === 'all' && <div className="gap-[16px] text-[32px] font-semibold leading-[130%] tracking-[-4%] items-end">Search results for “{searchQuery}” <span className="text-[16px] font-normal capitalize">(Showing {totalProducts || products.length} Products)</span></div>}
                            {type !== 'all' && <div className="gap-[16px] text-[32px] font-semibold leading-[130%] tracking-[-4%] items-end uppercase">{subcategory ? utils.capitalizeEachWord(subcategory) : ''} <span className="text-[16px] font-normal capitalize">(Showing {totalProducts || products.length} Products)</span></div>}
                        </div>
                    </div>
                    <div className="h-[1px] bg-[#E6E6E6] w-full"></div>
                </div>
                {type === 'category' && <RoundCategoriesSlider/>}
                {type === 'subcategory' && <BrandsSlider />}
            </div>
            <div className="tmd:hidden flex w-full flex-col">
                <div className="w-full flex items-center justify-between gap-[16px] text-[16px] font-semibold leading-[130%] tracking-[-4%] px-[20px] pt-[20px]">Search results for “{searchQuery}” <span className="text-[16px] font-normal capitalize">Showing {totalProducts || products.length} Products</span></div>
            </div>
        </div>
    );
}
export default Header;