import { ReactNode, useEffect } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Auth from "../components/common/Auth";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
// import Search from "../components/common/Search";
import MobileFooter from "../components/common/MobileFooter";
import AccountMobile from "../components/common/AccountMobile";
import { apiRequest, Response } from "../utils/utils";
import { setCategories, setNewArrivals, setProducts, setTotalPages } from "../redux/states/app";
import Loader from "../components/common/Loader";
import Logout from "../components/common/Logout";
interface LayoutProps {
  children?: ReactNode;
  headerGap?: string;
}

const Layout = ({ children = <></>, headerGap = "tmd:gap-[24px]" }: LayoutProps) => {
    const dispatch = useDispatch();
    const { authPage } = useSelector((state: RootState) => state.auth);
    const { searchMode, showAccount, products, showLogout, loading } = useSelector((state: RootState) => state.app);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const productRes: Response = (await apiRequest("products"));
                const products = productRes.data;
                dispatch(setProducts(products?.results));
                dispatch(setTotalPages(products?.pagination?.totalPages));
            } catch (error) {
                console.error("Error in useEffect:", error);
            }
        };
        products.length < 1 && fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res: Response = (await apiRequest("categories"));
                const categories = res.data;
                dispatch(setCategories(categories?.results));
            } catch (error) {
                console.error("Error in useEffect:", error);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
            const res: Response = await apiRequest("categories/withproducts");
            const categories = res.data.results;
            const formatted = categories.map((category: any) => ({
                category: category,
                products: category.productCategories.map((pc: any) => pc.product)
            }));
            dispatch(setNewArrivals(formatted));
            } catch (error) {
                console.error("Error in useEffect:", error);
            }
        };
        fetchData();
    }, []);

    if (products?.length === 0 || !products || loading) {
        return (
            <Loader />
        );
    }

    return (
        <>
            <div className={`w-full flex flex-col items-center ${(authPage || searchMode) ? "tmd:blur-sm" : ""}`}>
                <div className={`flex flex-col w-full items-center ${headerGap}`}>
                    <Header />
                    {children}
                </div>
                <Footer />
            </div>
            {authPage && <Auth />}
            {showAccount && <AccountMobile />}
            {/* {searchMode && <Search />} */}
            <MobileFooter />
            <div className="flex flex-col absolute top-[100px] right-[10px] tmd:right-[30px] notification-container gap-20"></div>
            {showLogout && <Logout />}
        </>
    );
};

export default Layout;