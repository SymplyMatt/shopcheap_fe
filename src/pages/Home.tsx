import HeroSlider from "../components/home/HeroSlider";
import CategoriesAndProducts from "../components/home/CategoriesAndProducts";
import FeaturedBrands from "../components/home/FeaturedBrands";
import NewArrivals from "../components/home/NewArrivals";
import Layout from "./Layout";
import FlashSales from "../components/home/FlashSales";
import RoundCategoriesSlider from "../components/home/RoundCategoriesSlider";
import Ads from "../components/home/Ads";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
const Home = () => {
    const { categories, products, sales, newArrivals } = useSelector((state: RootState) => state.app);

    return (
        <Layout>
            <HeroSlider />
            {/* {categories.length ? <RoundCategoriesSlider categories={categories} /> : <></>} */}
            {/* {sales.length ? <FlashSales /> : <></>} */}
            {products.length ? <CategoriesAndProducts title="Top Selling" productsToDisplay={products}/> : <></>}
            {/* {newArrivals.length ? <NewArrivals /> : <></>} */}
            {products.length ? <CategoriesAndProducts title="New Stock" productsToDisplay={products}/> : <></>}
        </Layout>
    );
}

export default Home;
