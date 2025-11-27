import { useEffect, useState } from "react";
import HeroSlider from "../components/home/HeroSlider";
import CategoriesAndProducts from "../components/home/CategoriesAndProducts";
import NewArrivals from "../components/home/NewArrivals";
import Layout from "./Layout";
import FlashSales from "../components/home/FlashSales";
import RoundCategoriesSlider from "../components/home/RoundCategoriesSlider";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { apiRequest, Product, Response } from "../utils/utils";
import ScrollReveal from "../components/common/ScrollReveal";

const Home = () => {
    const { categories, products, newArrivals } = useSelector((state: RootState) => state.app);
    const [topSellingProducts, setTopSellingProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchTopSelling = async () => {
            try {
                const response: Response = await apiRequest("products/top-selling?limit=20");
                if (response.data?.results) {
                    setTopSellingProducts(response.data.results);
                }
            } catch (error) {
                console.error("Error fetching top selling products:", error);
            }
        };
        fetchTopSelling();
    }, []);

    return (
        <Layout>
            <HeroSlider />
            {categories.length ? (
                <ScrollReveal delay={0.2}>
                    <RoundCategoriesSlider categories={categories} />
                </ScrollReveal>
            ) : <></>}
            <ScrollReveal delay={0.3}>
                <FlashSales />
            </ScrollReveal>
            {topSellingProducts.length ? (
                <ScrollReveal delay={0.2}>
                    <CategoriesAndProducts title="Top Selling" productsToDisplay={topSellingProducts}/>
                </ScrollReveal>
            ) : <></>}
            {newArrivals.length ? (
                <ScrollReveal delay={0.2}>
                    <NewArrivals />
                </ScrollReveal>
            ) : <></>}
            {products.length ? (
                <ScrollReveal delay={0.2}>
                    <CategoriesAndProducts title="New Stock" productsToDisplay={[...products].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())}/>
                </ScrollReveal>
            ) : <></>}
        </Layout>
    );
}

export default Home;
