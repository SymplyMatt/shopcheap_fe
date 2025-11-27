import Layout from "./Layout";

const Contact = () => {
    return (
        <Layout>
            <div className="w-full flex flex-col items-center gap-[24px] mb-[50px] px-[20px] tmd:px-[50px]">
                <div className="w-full flex flex-col gap-[16px] pt-[24px] max-w-[800px]">
                    <h1 className="text-[24px] tmd:text-[32px] font-semibold leading-[130%] tracking-[-0.04em]">
                        Contact Us
                    </h1>
                    <div className="flex flex-col gap-[24px] text-[14px] tmd:text-[16px] text-[#4B5563]">
                        <div className="flex flex-col gap-[8px]">
                            <h2 className="text-[18px] tmd:text-[20px] font-semibold text-[#111827]">
                                Get in Touch
                            </h2>
                            <p>
                                We'd love to hear from you! If you have any questions, concerns, or feedback, 
                                please don't hesitate to reach out to us.
                            </p>
                        </div>
                        
                        <div className="flex flex-col gap-[16px]">
                            <div className="flex flex-col gap-[4px]">
                                <h3 className="text-[16px] font-semibold text-[#111827]">Phone</h3>
                                <p className="text-[#4B5563]">+234 703 135 5990</p>
                            </div>
                            
                            <div className="flex flex-col gap-[4px]">
                                <h3 className="text-[16px] font-semibold text-[#111827]">Email</h3>
                                <p className="text-[#4B5563]">support@shopcheap.com</p>
                            </div>
                            
                            <div className="flex flex-col gap-[4px]">
                                <h3 className="text-[16px] font-semibold text-[#111827]">Business Hours</h3>
                                <p className="text-[#4B5563]">
                                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                                    Saturday: 10:00 AM - 4:00 PM<br />
                                    Sunday: Closed
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Contact;

