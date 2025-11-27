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
import ScrollReveal from "../components/common/ScrollReveal";

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
        const relatedProducts = (await apiRequest(`products/${product?.id}/related?limit=10`)).data;
        setUpsells(relatedProducts.products.results);
      } catch (err) {
        console.error("Error fetching product:", err);
      }
    };
    if (product && product.id) fetchProduct();
  }, [product]);

  useEffect(()=>{
    setProduct(productFromRoute || null);
  },[id])

  if (loading || !product) return <Loader />;

  return (
    <Layout>
      <ScrollReveal delay={0.1}>
        <ProductHero product={product}/>
      </ScrollReveal>
      <ScrollReveal delay={0.2}>
        <Description product={product}/>
      </ScrollReveal>
      {products.length > 0 && (
        <ScrollReveal delay={0.3}>
          <UpsellSlider products={upsells} />
        </ScrollReveal>
      )}
    </Layout>
  );
};

export default Product;