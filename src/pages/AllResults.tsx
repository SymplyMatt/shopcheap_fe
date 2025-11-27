import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import CategoriesAndProducts from "../components/home/CategoriesAndProducts";
import Header from "../components/searchresults/allresults/Header";
import Pagination from "../components/searchresults/allresults/Pagination";
import Layout from "./Layout";
import { RootState, AppDispatch } from "../redux/store";
import { setProducts, setTotalPages, setCurrentPage } from "../redux/states/app";
import { apiRequest, Response } from "../utils/utils";
import ScrollReveal from "../components/common/ScrollReveal";

const AllResults = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { products } = useSelector((state: RootState) => state.app);
    const [searchParams] = useSearchParams();
    const searchQuery = searchParams.get("search");
    const pageParam = searchParams.get("page");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchSearchResults = async () => {
            if (!searchQuery) return;
            
            setLoading(true);
            try {
                const page = pageParam || "1";
                const response: Response = await apiRequest(
                    `products/search?q=${encodeURIComponent(searchQuery)}&page=${page}&limit=10`
                );
                if (response.status === 200) {
                    dispatch(setProducts(response.data?.results || []));
                    dispatch(setTotalPages(response.data?.pagination?.totalPages || 0));
                    dispatch(setCurrentPage(Number(page)));
                }
            } catch (error) {
                console.error("Error fetching search results:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchSearchResults();
    }, [searchQuery, pageParam, dispatch]);

    if (loading) {
        return (
            <Layout>
                <div className="flex justify-center items-center h-[400px]">
                    <div className="text-[#141511]">Loading search results...</div>
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            <ScrollReveal delay={0.2}>
                <CategoriesAndProducts showTitle={false} titleComponent={<Header />} productsToDisplay={products}/>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
                <Pagination />
            </ScrollReveal>
        </Layout>
    );
};

export default AllResults;