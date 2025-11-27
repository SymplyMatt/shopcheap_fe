import { useEffect, useState } from "react";
import Layout from "./Layout";
import CategoriesAndProducts from "../components/home/CategoriesAndProducts";
import { apiRequest, Product, Response } from "../utils/utils";
import Loader from "../components/common/Loader";

const Header = (totalProducts: number) => {
    return (
        <div className="w-full flex flex-col gap-[24px] justify-center px-[20px] tmd:px-[50px]">
            <div className="w-full flex-col gap-[24px] justify-center tmd:flex">
                <div className="w-full flex items-center justify-between h-[48px]">
                    <div className="flex gap-[8px] items-end">
                        <div className="gap-[16px] text-[32px] font-semibold leading-[130%] tracking-[-4%] items-end">
                            In Season{" "}
                            {totalProducts ? (
                                <span className="text-[16px] font-normal capitalize">
                                    ({totalProducts.toLocaleString()} products)
                                </span>
                            ) : (
                                ""
                            )}
                        </div>
                    </div>
                    <div className=""></div>
                </div>
            </div>
        </div>
    );
};

const InSeason = () => {
    const [inSeasonProducts, setInSeasonProducts] = useState<Product[]>([]);
    const [totalProducts, setTotalProducts] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchInSeasonProducts = async () => {
            try {
                setLoading(true);
                const response: Response = await apiRequest("products");
                const products = response.data;
                
                if (products?.results) {
                    // Filter products where inSeason is true
                    const filtered = products.results.filter((product: Product) => product.inSeason === true);
                    setInSeasonProducts(filtered);
                    setTotalProducts(filtered.length);
                }
            } catch (err) {
                console.error("Error fetching in-season products:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchInSeasonProducts();
    }, []);

    if (loading) {
        return (
            <Layout>
                <Loader />
            </Layout>
        );
    }

    return (
        <Layout>
            <CategoriesAndProducts
                productsToDisplay={inSeasonProducts}
                titleComponent={Header(totalProducts)}
                showTitle={false}
            />
        </Layout>
    );
};

export default InSeason;

