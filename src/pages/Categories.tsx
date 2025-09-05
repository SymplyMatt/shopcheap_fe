import CategoriesAndProducts from "../components/home/CategoriesAndProducts";
import Layout from "./Layout";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiRequest, Product } from "../utils/utils";

const Categories = () => {
    const { id } = useParams();
    const [categoryProducts, setCategoryProducts] = useState<Product[]>([]);
    useEffect(() => {
    const fetchProduct = async () => {
        try {
            const fetchedProduct = (await apiRequest(`categories/${id}/products`)).data.products.results;
            setCategoryProducts(fetchedProduct);
        } catch (err) {
            console.error("Error fetching product:", err);
        }
    };
    fetchProduct();
    }, [id]);
    return (
        <Layout>
            <CategoriesAndProducts productsToDisplay={categoryProducts} showTitle={false}/>
        </Layout>
    );
};

export default Categories;