import CategoriesAndProducts from "../components/home/CategoriesAndProducts";
import Layout from "./Layout";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiRequest, Product } from "../utils/utils";

const Header = (categoryName: string, totalProducts: number) => {
    return (
        <div className="w-full flex flex-col gap-[24px] justify-center px-[20px] tmd:px-[50px]">
            <div className="w-full flex-col gap-[24px] justify-center tmd:flex">
                <div className="w-full flex items-center justify-between h-[48px]">
                    <div className="flex gap-[8px] items-end">
                        <div className="gap-[16px] text-[32px] font-semibold leading-[130%] tracking-[-4%] items-end">
                            {categoryName}{" "}
                            {totalProducts ? <span className="text-[16px] font-normal capitalize">
                                ({totalProducts.toLocaleString()} products)
                            </span> : ""}
                        </div>
                    </div>
                    <div className=""></div>
                </div>
            </div>
        </div>
    );
};

const Categories = () => {
    const { id } = useParams();
    const [categoryProducts, setCategoryProducts] = useState<Product[]>([]);
    const [categoryName, setCategoryName] = useState("");
    const [totalProducts, setTotalProducts] = useState(0);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const category = (await apiRequest(`categories/${id}/products`)).data;
                setCategoryName(category.category.name);
                if (category.products?.results) {
                    setCategoryProducts(category.products.results);
                    setTotalProducts(category.products.pagination.total);
                }
            } catch (err) {
                console.error("Error fetching product:", err);
            }
        };
        if (id) {
            fetchProduct();
        }
    }, [id]);

    return (
        <Layout>
            <CategoriesAndProducts
                productsToDisplay={categoryProducts}
                titleComponent={Header(categoryName,totalProducts)}
                showTitle={false}
            />
        </Layout>
    );
};

export default Categories;