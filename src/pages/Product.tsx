import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import Description from "../components/product/Description";
import ProductHero from "../components/product/ProductHero";
import UpsellSlider from "../components/product/UpsellSlider";
import Layout from "./Layout";
import Loader from "../components/common/Loader";
import { RootState } from "../redux/store";
import { apiRequest, Product as ProductInterface } from "../utils/utils";

const Product = () => {
  const { products } = useSelector((state: RootState) => state.app);
  const { id } = useParams();
  const location = useLocation();
  const productFromRoute = location.state?.product as ProductInterface | undefined;
  const [product, setProduct] = useState<ProductInterface | null>(productFromRoute || null);
  const [upsells, setUpsells] = useState<ProductInterface[]>([]);
  const [loading, setLoading] = useState(!productFromRoute);
  useEffect(() => {
    const fetchProduct = async () => {
        if (!product && id) {
        try {
            const fetchedProduct = (await apiRequest(`products/${id}`)).data;
            setProduct(fetchedProduct);
        } catch (err) {
            console.error("Error fetching product:", err);
        } finally {
            setLoading(false);
        }
        }
    };
    fetchProduct();
  }, [product, id]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const fetchedProduct = (await apiRequest(`products`));
        const products = fetchedProduct.data;
        setUpsells(products.results);
      } catch (err) {
        console.error("Error fetching product:", err);
      }
    };
    fetchProduct();
  }, [product]);
  useEffect(()=>{
    setProduct(productFromRoute || null);
  },[id])

  if (loading || !product) return <Loader />;

  return (
    <Layout>
      <ProductHero product={product}/>
      <Description product={product}/>
      {products.length > 0 && <UpsellSlider products={upsells} />}
    </Layout>
  );
};

export default Product;