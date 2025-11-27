import Layout from "./Layout";
import ScrollReveal from "../components/common/ScrollReveal";

const About = () => {
    return (
        <Layout>
            <ScrollReveal delay={0.2}>
                <div className="w-full flex flex-col items-center gap-[24px] mb-[50px] px-[20px] tmd:px-[50px]">
                    <div className="w-full flex flex-col gap-[16px] pt-[24px] max-w-[800px]">
                        <h1 className="text-[24px] tmd:text-[32px] font-semibold leading-[130%] tracking-[-0.04em]">
                            About Us
                        </h1>
                        <div className="flex flex-col gap-[16px] text-[14px] tmd:text-[16px] text-[#4B5563] leading-relaxed">
                            <p>
                                Welcome to ShopCheap, your trusted destination for fresh groceries and quality food products.
                            </p>
                            <p>
                                We are committed to providing you with the freshest produce, quality meats, and pantry essentials 
                                delivered right to your door. Our mission is to make grocery shopping convenient, affordable, and 
                                accessible for everyone.
                            </p>
                            <p>
                                At ShopCheap, we source our products from trusted suppliers and local farmers to ensure the highest 
                                quality and freshness. We believe that everyone deserves access to quality food at great prices.
                            </p>
                            <p>
                                Thank you for choosing ShopCheap for your grocery needs. We look forward to serving you!
                            </p>
                        </div>
                    </div>
                </div>
            </ScrollReveal>
        </Layout>
    );
};

export default About;

