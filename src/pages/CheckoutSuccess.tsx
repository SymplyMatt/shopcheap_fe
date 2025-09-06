import Layout from "./Layout";

const CheckoutSuccess = () => {
    return (
        <Layout headerGap="">
            <div className="w-full flex flex-col gap-[40px] p-[84px]">
                <div className="flex flex-col max-w-[500px] items-center w-full mx-auto gap-[24px]">
                    <img src="/images/checkout_success.svg"/>
                    <div className="font-medium text-[48px] text-[#141511] leading-[130%] text-center">Thanks Mahmud, your order was placed successfully</div>
                    <div className="text-[#676764] text-[20px] text-center leading-[130%] max-w-[450px]">We will send the latest information and updates about your order to <span className="text-[#912A1D] font-semibold">richarson@gmail.com</span> </div>
                </div>
                <div className="w-full flex flex-col">
                    <div className="w-full flex items-center justify-between border border-[#D6D6D5] h-[64px] px-[24px] py-[12px]">
                        <div className="text-[#676764] leading-[130%] text-[18px]">ORDER NO : #22908808FF0AD2</div>
                        <div className="text-[#141511] leading-[130%] text-[24px] font-semibold">YOUR DETAIL ORDER</div>
                        <div className="text-[#676764] leading-[150%] text-[18px]">ORDER  DATE : 20 JANUARY 2025, 12:30PM</div>
                    </div>
                    <div className="grid grid-cols-2 w-full border-r border-l border-b border-[#D6D6D5]">
                        <div className="col-span-1 flex flex-col gap-[12px] py-[12px] px-[24px]">
                            <div className="text-[#141511] text-[20px] font-medium">Product list</div>
                            <div className="flex w-full flex-col gap-[20px]">
                                {[1,2,3,4,5,6].map((item, index) =>(
                                    <div className="w-full flex items-center gap-3 h-full" key={index}>
                                        <img src={`/images/payment-image${item}.svg`} className="h-full object-contain" />
                                        <div className="w-full flex flex-col h-full justify-between py-1">
                                            <div className="text-[#141511] text-lg font-medium leading-[150%]">Ocean breeze varsity jacket</div>
                                            <div className="text-[#141511] text-xl font-medium price">120.00 TND</div>
                                            <div className="w-full grid grid-cols-10 items-center justify-between gap-2">
                                                <div className="col-span-6 text-[#4F4F4D] text-base leading-[150%]">Color: <span>Solid Blue</span></div>
                                                <div className="col-span-4 text-[#4F4F4D] text-base leading-[150%]">Size: <span>XL</span></div>
                                            </div>
                                            <div className="w-full grid grid-cols-10 items-center justify-between gap-2">
                                                <div className="col-span-6 text-[#4F4F4D] text-base leading-[150%]">Category: <span>{("varsity jacket").substring(0,13)}{("varsity jacket").length > 13 ? '...' : ''}</span></div>
                                                <div className="col-span-4 text-[#4F4F4D] text-base leading-[150%]">Quantity: <span>1 Pcs</span></div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="w-full flex flex-col gap-[16px] border-l border-[#D6D6D5] h-full py-[12px] px-[24px]">
                            <div className="text-[#141511] text-[20px] font-medium w-full flex items-center">SUMMARY</div>
                            <div className="w-full flex flex-col items-center gap-[8px]">
                                <div className="w-full flex items-center justify-between">
                                    <div className="text-[#4F4F4D] text-[18px] flex items-center gap-[4px]">Total Products</div>
                                    <div className="text-[#4F4F4D] text-[20px] flex items-center gap-[8px]">6 Products</div>
                                </div>
                                <div className="w-full flex items-center justify-between">
                                    <div className="text-[#4F4F4D] text-[18px] flex items-center gap-[4px]">Subtotal<img src="/images/question.svg" className="cursor-pointer" /></div>
                                    <div className="text-[#4F4F4D] text-[20px] flex items-center gap-[8px]">754.50 TND</div>
                                </div>
                                <div className="w-full flex items-center justify-between">
                                    <div className="text-[#4F4F4D] text-[20px] flex items-center gap-[8px]">Estimated shipping</div>
                                    <div className="text-[#4F4F4D] text-[20px] flex items-center gap-[8px]">0.00 TND</div>
                                </div>
                                <div className="w-full flex items-center justify-between">
                                    <div className="text-[#4F4F4D] text-[20px] flex items-center gap-[8px]">Estimated tax</div>
                                    <div className="text-[#4F4F4D] text-[20px] flex items-center gap-[8px]">20.00 TND</div>
                                </div>
                                <div className="w-full flex items-center justify-between">
                                    <div className="text-[#4F4F4D] text-[20px] flex items-center gap-[8px]">Discount <span className="text-[#E0523F] font-medium">10% OFF</span></div>
                                    <div className="text-[#4F4F4D] text-[20px] flex items-center gap-[8px]">-75.45 TND</div>
                                </div>
                                <div className="w-full flex items-center justify-between">
                                    <div className="text-[#141511] text-[18px] flex items-center gap-[4px] font-semibold">Total payment </div>
                                    <div className="text-[#4F4F4D] text-[20px] flex items-center gap-[8px] font-semibold">697.05 TND</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full border-r border-l border-b border-[#D6D6D5] grid grid-cols-2">
                        <div className="col-span-1 flex flex-col gap-[12px] p-[24px]">
                            <div className="text-[#141511] text-[24px] font-medium">Shipping details</div>
                            <div className="border boder-[#D6D6D5] flex flex-col h-[245px] p-[16px] gap-[24px] bg-[#F3F3F3]">
                                <div className="text-[#676764] text-[18px] font-normal">SHIPPING ADDRESS</div>
                                <div className="w-full flex-col gap-[8px]">
                                    <div className="text-[141511]">Mahmud Richardson</div>
                                    <div className="text-[#676764] text-[18px]">14 Crystal avenue, Easy-way, Tunisia, 23170</div>
                                    <div className="text-[#676764] text-[18px]">Tunisia</div>
                                    <div className="text-[#676764] text-[18px]">richardson@gmail.com</div>
                                    <div className="text-[#676764] text-[18px]">+231 658 - 845 - 0980</div>
                                </div>
                            </div>
                            <div className="w-full flex items-center gap-[32px]">
                                <div className="flex flex-col gap-[8px]">
                                    <div className="text-[#676764] text-[18px] font-normal">Shipping type</div>
                                    <div className="text-[#141511] text-[18px] font-medium">Standard ( Free )</div>
                                </div>
                                <div className="flex flex-col gap-[8px]">
                                    <div className="text-[#676764] text-[18px] font-normal">Estimated arrive</div>
                                    <div className="text-[#141511] text-[18px] font-medium">25 January 2024</div>
                                </div>
                            </div>
                        </div>
                        <div className=""></div>
                    </div>
                    <div className="w-full flex items-center justify-between mt-[16px]">
                        <div className="border border-[#D6D6D5] cursor-pointer text-[#141511] font-semibold h-[40px] px-[24px] flex items-center justify-center w_content h-[48px] uppercase">Continue shopping</div>
                        <div className="border border-[#D6D6D5] cursor-pointer text-[#FFFFFF] font-semibold h-[40px] px-[24px] flex items-center justify-center w_content h-[48px] uppercase bg-[#141511]">VIEW ORDER HISTORY</div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default CheckoutSuccess;