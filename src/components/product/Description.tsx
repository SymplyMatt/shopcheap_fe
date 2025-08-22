import { useState, useRef, useEffect } from "react";
import { Product } from "../../utils/utils";
interface CategoriesAndProductsProps {
  product: Product;
  reviews: any[];
}
const Description : React.FC<CategoriesAndProductsProps> =  ({product, reviews}) => {
  const [showDescription, setShowDescription] = useState<boolean>(false);
  const [showFeatures, setShowFeatures] = useState<boolean>(false);
  const [showShipping, setShowShipping] = useState<boolean>(false);
  const [showReviews, setShowReviews] = useState<boolean>(false);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const shippingRef = useRef<HTMLDivElement>(null);
  const reviewsRef = useRef<HTMLDivElement>(null);
  const [descriptionHeight, setDescriptionHeight] = useState<number>(0);
  const [featuresHeight, setFeaturesHeight] = useState<number>(0);
  const [shippingHeight, setShippingHeight] = useState<number>(0);
  const [reviewsHeight, setReviewsHeight] = useState<number>(0);
  
  useEffect(() => {
    if (descriptionRef.current) {
      setDescriptionHeight(showDescription ? descriptionRef.current.scrollHeight : 0);
    }
  }, [showDescription]);
  
  useEffect(() => {
    if (featuresRef.current) {
      setFeaturesHeight(showFeatures ? featuresRef.current.scrollHeight : 0);
    }
  }, [showFeatures]);
  
  useEffect(() => {
    if (shippingRef.current) {
      setShippingHeight(showShipping ? shippingRef.current.scrollHeight : 0);
    }
  }, [showShipping]);

  useEffect(() => {
    if (reviewsRef.current) {
      setReviewsHeight(showReviews ? reviewsRef.current.scrollHeight : 0);
    }
  }, [showReviews]);
  
  return (
    <div className="w-full flex flex-col border border-[#D6D6D5] px-[20px] tmd:px-[50px] py-[24px] gap-[24px]">
      <div className="w-full flex flex-col items-center justify-center">
        <div className="w-full flex items-center justify-between font-semibold text-[24px] tmd:text-[31.2px] leading-[24px] tracking-[0%] w-full flex items-center gap-[8px] p-[16px] tmd:p-[20px] border border-[#D6D6D5]">
          Description 
          <img 
            src={`/images/${showDescription ? 'minus' : 'plusbox'}.svg`} 
            onClick={() => setShowDescription(!showDescription)}
            className="transition-transform duration-300 cursor-pointer "
            style={{ transform: showDescription ? 'rotate(0deg)' : 'rotate(0deg)' }}
            alt={showDescription ? "hide" : "show"}
          />
        </div>
        <div 
          className="w-full overflow-hidden transition-all duration-300 ease-in-out border-r border-l border-[#D6D6D5]"
          style={{ 
            height: `${descriptionHeight}px`,
            borderBottom: descriptionHeight > 0 ? '1px solid #D6D6D5' : 'none',
            opacity: showDescription ? 1 : 0
          }}
        >
          <div ref={descriptionRef} className="p-[16px] tmd:p-[20px] gap-[8px] flex justify-center flex-col">
            <div dangerouslySetInnerHTML={{ __html: product.description }} />
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center">
        <div className="w-full flex items-center justify-between font-semibold text-[24px] tmd:text-[31.2px] leading-[24px] tracking-[0%] w-full flex items-center gap-[8px] p-[16px] tmd:p-[20px] border border-[#D6D6D5]">
          Features 
          <img 
            src={`/images/${showFeatures ? 'minus' : 'plusbox'}.svg`} 
            onClick={() => setShowFeatures(!showFeatures)}
            className="transition-transform duration-300 cursor-pointer "
            style={{ transform: showFeatures ? 'rotate(0deg)' : 'rotate(0deg)' }}
            alt={showFeatures ? "hide" : "show"}
          />
        </div>
        <div 
          className="w-full overflow-hidden transition-all duration-300 ease-in-out border-r border-l border-[#D6D6D5]"
          style={{ 
            height: `${featuresHeight}px`,
            borderBottom: featuresHeight > 0 ? '1px solid #D6D6D5' : 'none',
            opacity: showFeatures ? 1 : 0
          }}
        >
          <div ref={featuresRef} className="p-[16px] tmd:p-[20px] gap-[8px] flex justify-center flex-col">
            {
              product.productContents.map((content, index) => (
                <div dangerouslySetInnerHTML={{ __html: content.content }} key={index}/>
              ))
            }
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center">
        <div className="w-full flex items-center justify-between font-semibold text-[24px] tmd:text-[31.2px] leading-[24px] tracking-[0%] w-full flex items-center gap-[8px] p-[16px] tmd:p-[20px] border border-[#D6D6D5]">
          Shipping and returns info 
          <img 
            src={`/images/${showShipping ? 'minus' : 'plusbox'}.svg`} 
            onClick={() => setShowShipping(!showShipping)}
            className="transition-transform duration-300 cursor-pointer "
            style={{ transform: showShipping ? 'rotate(0deg)' : 'rotate(0deg)' }}
            alt={showShipping ? "hide" : "show"}
          />
        </div>
        <div className="w-full overflow-hidden transition-all duration-300 ease-in-out border-r border-l border-[#D6D6D5]"
            style={{ 
            height: `${shippingHeight}px`,
            borderBottom: shippingHeight > 0 ? '1px solid #D6D6D5' : 'none',
            opacity: showShipping ? 1 : 0
          }}
        >
          <div ref={shippingRef} className="p-[16px] tmd:p-[20px] gap-[12px] flex justify-center flex-col">
            <div className="w-full flex flex-col justify-center gap-[8px]">
              <div className="font-normal text-[18px] leading-[27px] tracking-[-4%] text-[#676764] uppercase">Shipping</div>
              <div className="font-normal text-[18px] leading-[27px] tracking-[-4%]">At DREST a signature will be required upon delivery to ensure your package arrives securely.</div>
              <div className="font-normal text-[18px] leading-[27px] tracking-[-4%]">For Pre-order and Made to Order items, we will ship these on the estimated date provided on the product description page. Once ready, these items will be shipped via Premium Express, ensuring prompt delivery to your doorstep.</div>
            </div>
            <div className="w-full flex flex-col justify-center gap-[8px]">
              <div className="font-normal text-[18px] leading-[27px] tracking-[-4%] text-[#676764] uppercase">Returns</div>
              <div className="font-normal text-[18px] leading-[27px] tracking-[-4%]">To provide more flexibility during the holiday season, we offer extended returns. Orders placed from November 1 to January 1 will benefit from complimentary returns until January 31.</div>
              <div className="font-normal text-[18px] leading-[27px] tracking-[-4%]">You can return items via mail or in-store. To process a return, log into your MY DREST account and select "Return this Item" from the order details, or use the link in your delivery confirmation email. You may also contact Customer Support for help. Once the request is approved, a prepaid shipping label will be emailed to you or made available for download in your MY DREST account.</div>
              <div className="font-normal text-[18px] leading-[27px] tracking-[-4%]">All returned items must be in their original condition, with all labels attached and intact. Please note that Made to Order and personalised items are non-returnable.</div>
              <div className="font-normal text-[18px] leading-[27px] tracking-[-4%]">Additional information is available during the checkout process or in the FAQs section.</div>
            </div>
            <table className="w-full border-collapse text-[14px] tmd:text-base">
              <thead className="bg-[#F3F3F3]">
                <tr className="text-[#141511] font-medium text-[18px] leading-[27px] tracking-[0%] h-[60px]">
                  <th className="text-[#141511] font-medium text-[14px] tmd:text-[18px] leading-[27px] tracking-[150%] border border-[#D6D6D5] p-[8px] text-center">Shipping service</th>
                  <th className="text-[#141511] font-medium text-[14px] tmd:text-[18px] leading-[27px] tracking-[150%] border border-[#D6D6D5] p-[8px] text-center">Shipping fee</th>
                  <th className="text-[#141511] font-medium text-[14px] tmd:text-[18px] leading-[27px] tracking-[150%] border border-[#D6D6D5] p-[8px] text-center">Delivery estimate</th>
                </tr>
              </thead>
              <tbody>
                <tr className="h-[72px]">
                  <td className="border border-[#D6D6D5] p-[8px] text-center text-[#4F4F4D]">Premium Express (Within Tunisia)</td>
                  <td className="border border-[#D6D6D5] p-[8px] text-center text-[#4F4F4D]">Free (for items over 1040 TND)</td>
                  <td className="border border-[#D6D6D5] p-[8px] text-center text-[#4F4F4D]">2-3 business days.</td>
                </tr>
                <tr className="h-[72px]">
                  <td className="border border-[#D6D6D5] p-[8px] text-center text-[#4F4F4D]">Premium Express (Alaska, Hawaii, Puerto Rico)</td>
                  <td className="border border-[#D6D6D5] p-[8px] text-center text-[#4F4F4D]">10 TND</td>
                  <td className="border border-[#D6D6D5] p-[8px] text-center text-[#4F4F4D]">4-5 business days.</td>
                </tr>
                <tr className="h-[72px]">
                  <td className="border border-[#D6D6D5] p-[8px] text-center text-[#4F4F4D]">Premium Express International (Europe & Asia)</td>
                  <td className="border border-[#D6D6D5] p-[8px] text-center text-[#4F4F4D]">25 TND</td>
                  <td className="border border-[#D6D6D5] p-[8px] text-center text-[#4F4F4D]">7-10 business days.</td>
                </tr>
                <tr className="h-[72px]">
                  <td className="border border-[#D6D6D5] p-[8px] text-center text-[#4F4F4D]">Premium Express International (Other Regions)</td>
                  <td className="border border-[#D6D6D5] p-[8px] text-center text-[#4F4F4D]">35 TND</td>
                  <td className="border border-[#D6D6D5] p-[8px] text-center text-[#4F4F4D]">10-14 business days.</td>
                </tr>
                <tr className="h-[72px]">
                  <td className="border border-[#D6D6D5] p-[8px] text-center text-[#4F4F4D]">Next Business Day (U.S.)</td>
                  <td className="border border-[#D6D6D5] p-[8px] text-center text-[#4F4F4D]">30 TND</td>
                  <td className="border border-[#D6D6D5] p-[8px] text-center text-[#4F4F4D]">Order by 4 pm EST for next-day delivery between 9 am - 8 pm.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {reviews.length ? <div className="w-full flex flex-col items-center justify-center">
        <div className="w-full flex items-center justify-between font-semibold text-[31.2px] leading-[24px] tracking-[0%] w-full flex items-center gap-[8px] p-[20px] border border-[#D6D6D5]">
          Reviews (103) 
          <div className="flex items-center gap-[24px]">
            <div className="flex items-center gap-[4px] font-semibold text-[24px] leading-[31px] tracking-[0%]">
              4.5 
              <img src="/images/staractive.svg" className="h-[20px] w-[20px]"/>
              <img src="/images/staractive.svg" className="h-[20px] w-[20px]" />
              <img src="/images/staractive.svg" className="h-[20px] w-[20px]" />
              <img src="/images/staractive.svg" className="h-[20px] w-[20px]" />
              <img src="/images/starinactive.svg" className="h-[20px] w-[20px]" />
            </div>
            <img 
              src={`/images/${showReviews ? 'minus' : 'plusbox'}.svg`} 
              onClick={() => setShowReviews(!showReviews)}
              className="transition-transform duration-300 cursor-pointer"
              style={{ transform: showShipping ? 'rotate(0deg)' : 'rotate(0deg)' }}
              alt={showShipping ? "hide" : "show"}
            />
          </div>
        </div>
        <div className="w-full overflow-hidden transition-all duration-300 ease-in-out border-r border-l border-[#D6D6D5]"
            style={{ 
            height: `${reviewsHeight}px`,
            borderBottom: reviewsHeight > 0 ? '1px solid #D6D6D5' : 'none',
            opacity: showReviews ? 1 : 0
          }}
        >
          <div ref={reviewsRef} className="p-[20px] gap-[12px] flex justify-center flex-col w-full">
            <div className="text-[#141511] font-semibold">Reviews</div>
            <div className="flex gap-[8px] items-center">
              <svg width="96" height="16" viewBox="0 0 96 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_832_40341)">
                <path d="M9.32536 1.80183C8.9084 0.466123 7.09316 0.466119 6.6762 1.80183L5.61851 5.19011L2.19616 5.19025C0.847014 5.1903 0.286072 6.98748 1.37752 7.81305L4.14619 9.90726L3.08875 13.2956C2.67189 14.6314 4.14045 15.7421 5.23196 14.9166L8.00078 12.8226L10.7696 14.9166C11.8611 15.7421 13.3297 14.6314 12.9128 13.2956L11.8554 9.90726L14.624 7.81305C15.7155 6.98749 15.1546 5.1903 13.8054 5.19025L10.383 5.19011L9.32536 1.80183Z" fill="#D58618"/>
                </g>
                <g clip-path="url(#clip1_832_40341)">
                <path d="M29.3254 1.80183C28.9084 0.466123 27.0932 0.466119 26.6762 1.80183L25.6185 5.19011L22.1962 5.19025C20.847 5.1903 20.2861 6.98748 21.3775 7.81305L24.1462 9.90726L23.0888 13.2956C22.6719 14.6314 24.1404 15.7421 25.232 14.9166L28.0008 12.8226L30.7696 14.9166C31.8611 15.7421 33.3297 14.6314 32.9128 13.2956L31.8554 9.90726L34.624 7.81305C35.7155 6.98749 35.1546 5.1903 33.8054 5.19025L30.383 5.19011L29.3254 1.80183Z" fill="#D58618"/>
                </g>
                <g clip-path="url(#clip2_832_40341)">
                <path d="M49.3254 1.80183C48.9084 0.466123 47.0932 0.466119 46.6762 1.80183L45.6185 5.19011L42.1962 5.19025C40.847 5.1903 40.2861 6.98748 41.3775 7.81305L44.1462 9.90726L43.0888 13.2956C42.6719 14.6314 44.1404 15.7421 45.232 14.9166L48.0008 12.8226L50.7696 14.9166C51.8611 15.7421 53.3297 14.6314 52.9128 13.2956L51.8554 9.90726L54.624 7.81305C55.7155 6.98749 55.1546 5.1903 53.8054 5.19025L50.383 5.19011L49.3254 1.80183Z" fill="#D58618"/>
                </g>
                <g clip-path="url(#clip3_832_40341)">
                <path d="M69.3254 1.80183C68.9084 0.466123 67.0932 0.466119 66.6762 1.80183L65.6185 5.19011L62.1962 5.19025C60.847 5.1903 60.2861 6.98748 61.3775 7.81305L64.1462 9.90726L63.0888 13.2956C62.6719 14.6314 64.1404 15.7421 65.232 14.9166L68.0008 12.8226L70.7696 14.9166C71.8611 15.7421 73.3297 14.6314 72.9128 13.2956L71.8554 9.90726L74.624 7.81305C75.7155 6.98749 75.1546 5.1903 73.8054 5.19025L70.383 5.19011L69.3254 1.80183Z" fill="#D58618"/>
                </g>
                <g clip-path="url(#clip4_832_40341)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M86.6762 1.80183C87.0932 0.466119 88.9084 0.466123 89.3254 1.80183L90.383 5.19011L93.8054 5.19025C95.1546 5.1903 95.7155 6.98749 94.624 7.81305L91.8554 9.90726L92.9128 13.2956C93.3297 14.6314 91.8611 15.7421 90.7696 14.9166L88.0008 12.8226L85.232 14.9166C84.1404 15.7421 82.6719 14.6314 83.0888 13.2956L84.1462 9.90726L81.3775 7.81305C80.2861 6.98748 80.847 5.1903 82.1962 5.19025L85.6185 5.19011L86.6762 1.80183ZM88.0008 2.24992L86.9431 5.6382C86.7566 6.23553 86.2219 6.63996 85.6186 6.63998L82.1962 6.64012L84.9649 8.73432C85.453 9.10352 85.6572 9.7579 85.4708 10.3552L84.4134 13.7436L87.1822 11.6496C87.6703 11.2805 88.3313 11.2805 88.8194 11.6496L91.5882 13.7436L90.5308 10.3552C90.3443 9.75789 90.5486 9.10352 91.0367 8.73432L93.8054 6.64012L90.383 6.63998C89.7797 6.63996 89.2449 6.23553 89.0585 5.6382L88.0008 2.24992Z" fill="#D58618"/>
                <path d="M88.002 12.2241C87.8243 12.224 87.6461 12.2815 87.4951 12.396L85.085 14.2241C84.4104 14.7359 83.5031 14.0473 83.7608 13.2192L84.6817 10.2603C84.7967 9.89004 84.6698 9.48416 84.3682 9.25537L81.958 7.42725C81.2834 6.91548 81.6301 5.80141 82.4639 5.80127H85.4434C85.8162 5.80127 86.1464 5.55035 86.2618 5.18018L87.1826 2.22119C87.3115 1.80698 87.6569 1.59994 88.002 1.6001V12.2241Z" fill="#D58618"/>
                </g>
                <defs>
                <clipPath id="clip0_832_40341">
                <rect width="16" height="16" fill="white"/>
                </clipPath>
                <clipPath id="clip1_832_40341">
                <rect width="16" height="16" fill="white" transform="translate(20)"/>
                </clipPath>
                <clipPath id="clip2_832_40341">
                <rect width="16" height="16" fill="white" transform="translate(40)"/>
                </clipPath>
                <clipPath id="clip3_832_40341">
                <rect width="16" height="16" fill="white" transform="translate(60)"/>
                </clipPath>
                <clipPath id="clip4_832_40341">
                <rect width="16" height="16" fill="white" transform="translate(80)"/>
                </clipPath>
                </defs>
              </svg>
              <div className="text-[#141511] font-semibold text-base">4.5</div>
              <div className="text-[#676764] text-base">24 reviews</div>
            </div>
            <div className="text-[14px] leading-[20px] text-[#676764]">Only customers who have purchased this item can leave a review </div>
            <div className="text-[#141511] font-semibold">16 customer photos</div>
            <div className="flex gap-[8px] items-center flex-wrap w-full">
              <img src="/images/prod-desc1.svg" />
              <img src="/images/prod-desc2.svg" />
              <img src="/images/prod-desc3.svg" />
              <img src="/images/prod-desc1.svg" />
              <img src="/images/prod-desc2.svg" />
              <img src="/images/prod-desc3.svg" />
              <div className="relative">
                <img src="/images/prod-desc3.svg" />
                <div className="absolute bg-[#141511d9] top-0 right-0 h-full w-full font-semibold text-[18px] flex items-center justify-center text-white">View More</div>
              </div>
            </div>
            <div className="flex flex-col gap-[8px] w-full my-[30px]">
              <div className="text-[#141511] font-semibold">Most recent reviews</div>
              <hr className="w-full h-[1px] bg-[#C4C4C4]"/>
              <div className="w-full flex justify-between my-[10px]">
                <div className="flex gap-[8px]">
                  <img src="/images/reviewer.svg" className="h-[42px] w-[42px]"/>
                  <div className="flex flex-col gap-[8px]">
                    <svg width="96" height="16" viewBox="0 0 96 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_832_40341)">
                      <path d="M9.32536 1.80183C8.9084 0.466123 7.09316 0.466119 6.6762 1.80183L5.61851 5.19011L2.19616 5.19025C0.847014 5.1903 0.286072 6.98748 1.37752 7.81305L4.14619 9.90726L3.08875 13.2956C2.67189 14.6314 4.14045 15.7421 5.23196 14.9166L8.00078 12.8226L10.7696 14.9166C11.8611 15.7421 13.3297 14.6314 12.9128 13.2956L11.8554 9.90726L14.624 7.81305C15.7155 6.98749 15.1546 5.1903 13.8054 5.19025L10.383 5.19011L9.32536 1.80183Z" fill="#D58618"/>
                      </g>
                      <g clip-path="url(#clip1_832_40341)">
                      <path d="M29.3254 1.80183C28.9084 0.466123 27.0932 0.466119 26.6762 1.80183L25.6185 5.19011L22.1962 5.19025C20.847 5.1903 20.2861 6.98748 21.3775 7.81305L24.1462 9.90726L23.0888 13.2956C22.6719 14.6314 24.1404 15.7421 25.232 14.9166L28.0008 12.8226L30.7696 14.9166C31.8611 15.7421 33.3297 14.6314 32.9128 13.2956L31.8554 9.90726L34.624 7.81305C35.7155 6.98749 35.1546 5.1903 33.8054 5.19025L30.383 5.19011L29.3254 1.80183Z" fill="#D58618"/>
                      </g>
                      <g clip-path="url(#clip2_832_40341)">
                      <path d="M49.3254 1.80183C48.9084 0.466123 47.0932 0.466119 46.6762 1.80183L45.6185 5.19011L42.1962 5.19025C40.847 5.1903 40.2861 6.98748 41.3775 7.81305L44.1462 9.90726L43.0888 13.2956C42.6719 14.6314 44.1404 15.7421 45.232 14.9166L48.0008 12.8226L50.7696 14.9166C51.8611 15.7421 53.3297 14.6314 52.9128 13.2956L51.8554 9.90726L54.624 7.81305C55.7155 6.98749 55.1546 5.1903 53.8054 5.19025L50.383 5.19011L49.3254 1.80183Z" fill="#D58618"/>
                      </g>
                      <g clip-path="url(#clip3_832_40341)">
                      <path d="M69.3254 1.80183C68.9084 0.466123 67.0932 0.466119 66.6762 1.80183L65.6185 5.19011L62.1962 5.19025C60.847 5.1903 60.2861 6.98748 61.3775 7.81305L64.1462 9.90726L63.0888 13.2956C62.6719 14.6314 64.1404 15.7421 65.232 14.9166L68.0008 12.8226L70.7696 14.9166C71.8611 15.7421 73.3297 14.6314 72.9128 13.2956L71.8554 9.90726L74.624 7.81305C75.7155 6.98749 75.1546 5.1903 73.8054 5.19025L70.383 5.19011L69.3254 1.80183Z" fill="#D58618"/>
                      </g>
                      <g clip-path="url(#clip4_832_40341)">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M86.6762 1.80183C87.0932 0.466119 88.9084 0.466123 89.3254 1.80183L90.383 5.19011L93.8054 5.19025C95.1546 5.1903 95.7155 6.98749 94.624 7.81305L91.8554 9.90726L92.9128 13.2956C93.3297 14.6314 91.8611 15.7421 90.7696 14.9166L88.0008 12.8226L85.232 14.9166C84.1404 15.7421 82.6719 14.6314 83.0888 13.2956L84.1462 9.90726L81.3775 7.81305C80.2861 6.98748 80.847 5.1903 82.1962 5.19025L85.6185 5.19011L86.6762 1.80183ZM88.0008 2.24992L86.9431 5.6382C86.7566 6.23553 86.2219 6.63996 85.6186 6.63998L82.1962 6.64012L84.9649 8.73432C85.453 9.10352 85.6572 9.7579 85.4708 10.3552L84.4134 13.7436L87.1822 11.6496C87.6703 11.2805 88.3313 11.2805 88.8194 11.6496L91.5882 13.7436L90.5308 10.3552C90.3443 9.75789 90.5486 9.10352 91.0367 8.73432L93.8054 6.64012L90.383 6.63998C89.7797 6.63996 89.2449 6.23553 89.0585 5.6382L88.0008 2.24992Z" fill="#D58618"/>
                      <path d="M88.002 12.2241C87.8243 12.224 87.6461 12.2815 87.4951 12.396L85.085 14.2241C84.4104 14.7359 83.5031 14.0473 83.7608 13.2192L84.6817 10.2603C84.7967 9.89004 84.6698 9.48416 84.3682 9.25537L81.958 7.42725C81.2834 6.91548 81.6301 5.80141 82.4639 5.80127H85.4434C85.8162 5.80127 86.1464 5.55035 86.2618 5.18018L87.1826 2.22119C87.3115 1.80698 87.6569 1.59994 88.002 1.6001V12.2241Z" fill="#D58618"/>
                      </g>
                      <defs>
                      <clipPath id="clip0_832_40341">
                      <rect width="16" height="16" fill="white"/>
                      </clipPath>
                      <clipPath id="clip1_832_40341">
                      <rect width="16" height="16" fill="white" transform="translate(20)"/>
                      </clipPath>
                      <clipPath id="clip2_832_40341">
                      <rect width="16" height="16" fill="white" transform="translate(40)"/>
                      </clipPath>
                      <clipPath id="clip3_832_40341">
                      <rect width="16" height="16" fill="white" transform="translate(60)"/>
                      </clipPath>
                      <clipPath id="clip4_832_40341">
                      <rect width="16" height="16" fill="white" transform="translate(80)"/>
                      </clipPath>
                      </defs>
                    </svg>
                    <div className="text-[#141511] font-semibold">Good Basic</div>
                    <div className="text-[#141511]">I'm very happy with the cut and fabric quality of this shirt.</div>
                  </div>
                </div>
                <div className="text-[#676764] text-[12px] flex flex-col justify-between gap-[8px]">
                  <div className="text-right">17 days ago</div>
                  <div className="flex items-center gap-[8px]">
                  </div>
                </div>
              </div>
              <hr className="w-full h-[1px] bg-[#C4C4C4]"/>
              <div className="w-full flex justify-between my-[10px]">
                <div className="flex gap-[8px]">
                  <img src="/images/reviewer.svg" className="h-[42px] w-[42px]"/>
                  <div className="flex flex-col gap-[8px]">
                    <svg width="96" height="16" viewBox="0 0 96 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_832_40341)">
                      <path d="M9.32536 1.80183C8.9084 0.466123 7.09316 0.466119 6.6762 1.80183L5.61851 5.19011L2.19616 5.19025C0.847014 5.1903 0.286072 6.98748 1.37752 7.81305L4.14619 9.90726L3.08875 13.2956C2.67189 14.6314 4.14045 15.7421 5.23196 14.9166L8.00078 12.8226L10.7696 14.9166C11.8611 15.7421 13.3297 14.6314 12.9128 13.2956L11.8554 9.90726L14.624 7.81305C15.7155 6.98749 15.1546 5.1903 13.8054 5.19025L10.383 5.19011L9.32536 1.80183Z" fill="#D58618"/>
                      </g>
                      <g clip-path="url(#clip1_832_40341)">
                      <path d="M29.3254 1.80183C28.9084 0.466123 27.0932 0.466119 26.6762 1.80183L25.6185 5.19011L22.1962 5.19025C20.847 5.1903 20.2861 6.98748 21.3775 7.81305L24.1462 9.90726L23.0888 13.2956C22.6719 14.6314 24.1404 15.7421 25.232 14.9166L28.0008 12.8226L30.7696 14.9166C31.8611 15.7421 33.3297 14.6314 32.9128 13.2956L31.8554 9.90726L34.624 7.81305C35.7155 6.98749 35.1546 5.1903 33.8054 5.19025L30.383 5.19011L29.3254 1.80183Z" fill="#D58618"/>
                      </g>
                      <g clip-path="url(#clip2_832_40341)">
                      <path d="M49.3254 1.80183C48.9084 0.466123 47.0932 0.466119 46.6762 1.80183L45.6185 5.19011L42.1962 5.19025C40.847 5.1903 40.2861 6.98748 41.3775 7.81305L44.1462 9.90726L43.0888 13.2956C42.6719 14.6314 44.1404 15.7421 45.232 14.9166L48.0008 12.8226L50.7696 14.9166C51.8611 15.7421 53.3297 14.6314 52.9128 13.2956L51.8554 9.90726L54.624 7.81305C55.7155 6.98749 55.1546 5.1903 53.8054 5.19025L50.383 5.19011L49.3254 1.80183Z" fill="#D58618"/>
                      </g>
                      <g clip-path="url(#clip3_832_40341)">
                      <path d="M69.3254 1.80183C68.9084 0.466123 67.0932 0.466119 66.6762 1.80183L65.6185 5.19011L62.1962 5.19025C60.847 5.1903 60.2861 6.98748 61.3775 7.81305L64.1462 9.90726L63.0888 13.2956C62.6719 14.6314 64.1404 15.7421 65.232 14.9166L68.0008 12.8226L70.7696 14.9166C71.8611 15.7421 73.3297 14.6314 72.9128 13.2956L71.8554 9.90726L74.624 7.81305C75.7155 6.98749 75.1546 5.1903 73.8054 5.19025L70.383 5.19011L69.3254 1.80183Z" fill="#D58618"/>
                      </g>
                      <g clip-path="url(#clip4_832_40341)">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M86.6762 1.80183C87.0932 0.466119 88.9084 0.466123 89.3254 1.80183L90.383 5.19011L93.8054 5.19025C95.1546 5.1903 95.7155 6.98749 94.624 7.81305L91.8554 9.90726L92.9128 13.2956C93.3297 14.6314 91.8611 15.7421 90.7696 14.9166L88.0008 12.8226L85.232 14.9166C84.1404 15.7421 82.6719 14.6314 83.0888 13.2956L84.1462 9.90726L81.3775 7.81305C80.2861 6.98748 80.847 5.1903 82.1962 5.19025L85.6185 5.19011L86.6762 1.80183ZM88.0008 2.24992L86.9431 5.6382C86.7566 6.23553 86.2219 6.63996 85.6186 6.63998L82.1962 6.64012L84.9649 8.73432C85.453 9.10352 85.6572 9.7579 85.4708 10.3552L84.4134 13.7436L87.1822 11.6496C87.6703 11.2805 88.3313 11.2805 88.8194 11.6496L91.5882 13.7436L90.5308 10.3552C90.3443 9.75789 90.5486 9.10352 91.0367 8.73432L93.8054 6.64012L90.383 6.63998C89.7797 6.63996 89.2449 6.23553 89.0585 5.6382L88.0008 2.24992Z" fill="#D58618"/>
                      <path d="M88.002 12.2241C87.8243 12.224 87.6461 12.2815 87.4951 12.396L85.085 14.2241C84.4104 14.7359 83.5031 14.0473 83.7608 13.2192L84.6817 10.2603C84.7967 9.89004 84.6698 9.48416 84.3682 9.25537L81.958 7.42725C81.2834 6.91548 81.6301 5.80141 82.4639 5.80127H85.4434C85.8162 5.80127 86.1464 5.55035 86.2618 5.18018L87.1826 2.22119C87.3115 1.80698 87.6569 1.59994 88.002 1.6001V12.2241Z" fill="#D58618"/>
                      </g>
                      <defs>
                      <clipPath id="clip0_832_40341">
                      <rect width="16" height="16" fill="white"/>
                      </clipPath>
                      <clipPath id="clip1_832_40341">
                      <rect width="16" height="16" fill="white" transform="translate(20)"/>
                      </clipPath>
                      <clipPath id="clip2_832_40341">
                      <rect width="16" height="16" fill="white" transform="translate(40)"/>
                      </clipPath>
                      <clipPath id="clip3_832_40341">
                      <rect width="16" height="16" fill="white" transform="translate(60)"/>
                      </clipPath>
                      <clipPath id="clip4_832_40341">
                      <rect width="16" height="16" fill="white" transform="translate(80)"/>
                      </clipPath>
                      </defs>
                    </svg>
                    <div className="text-[#141511] font-semibold">All Sooo Soft</div>
                    <div className="text-[#141511] max-w-[600px]">When I first tried this shirt on I was impressed with how soft it feels as a button down. Most of my other brand button downs are stiff and crisp. I like how it lays light weight on my body too.</div>
                  </div>
                </div>
                <div className="text-[#676764] text-[12px] flex flex-col justify-between gap-[8px]">
                  <div className="text-right">2 month ago</div>
                  <div className="flex items-center gap-[8px]">
                    <img src="/images/reviewimg.svg" />
                    <img src="/images/reviewimg.svg" />
                  </div>
                </div>
              </div>
              <hr className="w-full h-[1px] bg-[#C4C4C4]"/>
              <div className="w-full flex justify-between my-[10px]">
                <div className="flex gap-[8px]">
                  <img src="/images/reviewer.svg" className="h-[42px] w-[42px]"/>
                  <div className="flex flex-col gap-[8px]">
                    <svg width="96" height="16" viewBox="0 0 96 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_832_40341)">
                      <path d="M9.32536 1.80183C8.9084 0.466123 7.09316 0.466119 6.6762 1.80183L5.61851 5.19011L2.19616 5.19025C0.847014 5.1903 0.286072 6.98748 1.37752 7.81305L4.14619 9.90726L3.08875 13.2956C2.67189 14.6314 4.14045 15.7421 5.23196 14.9166L8.00078 12.8226L10.7696 14.9166C11.8611 15.7421 13.3297 14.6314 12.9128 13.2956L11.8554 9.90726L14.624 7.81305C15.7155 6.98749 15.1546 5.1903 13.8054 5.19025L10.383 5.19011L9.32536 1.80183Z" fill="#D58618"/>
                      </g>
                      <g clip-path="url(#clip1_832_40341)">
                      <path d="M29.3254 1.80183C28.9084 0.466123 27.0932 0.466119 26.6762 1.80183L25.6185 5.19011L22.1962 5.19025C20.847 5.1903 20.2861 6.98748 21.3775 7.81305L24.1462 9.90726L23.0888 13.2956C22.6719 14.6314 24.1404 15.7421 25.232 14.9166L28.0008 12.8226L30.7696 14.9166C31.8611 15.7421 33.3297 14.6314 32.9128 13.2956L31.8554 9.90726L34.624 7.81305C35.7155 6.98749 35.1546 5.1903 33.8054 5.19025L30.383 5.19011L29.3254 1.80183Z" fill="#D58618"/>
                      </g>
                      <g clip-path="url(#clip2_832_40341)">
                      <path d="M49.3254 1.80183C48.9084 0.466123 47.0932 0.466119 46.6762 1.80183L45.6185 5.19011L42.1962 5.19025C40.847 5.1903 40.2861 6.98748 41.3775 7.81305L44.1462 9.90726L43.0888 13.2956C42.6719 14.6314 44.1404 15.7421 45.232 14.9166L48.0008 12.8226L50.7696 14.9166C51.8611 15.7421 53.3297 14.6314 52.9128 13.2956L51.8554 9.90726L54.624 7.81305C55.7155 6.98749 55.1546 5.1903 53.8054 5.19025L50.383 5.19011L49.3254 1.80183Z" fill="#D58618"/>
                      </g>
                      <g clip-path="url(#clip3_832_40341)">
                      <path d="M69.3254 1.80183C68.9084 0.466123 67.0932 0.466119 66.6762 1.80183L65.6185 5.19011L62.1962 5.19025C60.847 5.1903 60.2861 6.98748 61.3775 7.81305L64.1462 9.90726L63.0888 13.2956C62.6719 14.6314 64.1404 15.7421 65.232 14.9166L68.0008 12.8226L70.7696 14.9166C71.8611 15.7421 73.3297 14.6314 72.9128 13.2956L71.8554 9.90726L74.624 7.81305C75.7155 6.98749 75.1546 5.1903 73.8054 5.19025L70.383 5.19011L69.3254 1.80183Z" fill="#D58618"/>
                      </g>
                      <g clip-path="url(#clip4_832_40341)">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M86.6762 1.80183C87.0932 0.466119 88.9084 0.466123 89.3254 1.80183L90.383 5.19011L93.8054 5.19025C95.1546 5.1903 95.7155 6.98749 94.624 7.81305L91.8554 9.90726L92.9128 13.2956C93.3297 14.6314 91.8611 15.7421 90.7696 14.9166L88.0008 12.8226L85.232 14.9166C84.1404 15.7421 82.6719 14.6314 83.0888 13.2956L84.1462 9.90726L81.3775 7.81305C80.2861 6.98748 80.847 5.1903 82.1962 5.19025L85.6185 5.19011L86.6762 1.80183ZM88.0008 2.24992L86.9431 5.6382C86.7566 6.23553 86.2219 6.63996 85.6186 6.63998L82.1962 6.64012L84.9649 8.73432C85.453 9.10352 85.6572 9.7579 85.4708 10.3552L84.4134 13.7436L87.1822 11.6496C87.6703 11.2805 88.3313 11.2805 88.8194 11.6496L91.5882 13.7436L90.5308 10.3552C90.3443 9.75789 90.5486 9.10352 91.0367 8.73432L93.8054 6.64012L90.383 6.63998C89.7797 6.63996 89.2449 6.23553 89.0585 5.6382L88.0008 2.24992Z" fill="#D58618"/>
                      <path d="M88.002 12.2241C87.8243 12.224 87.6461 12.2815 87.4951 12.396L85.085 14.2241C84.4104 14.7359 83.5031 14.0473 83.7608 13.2192L84.6817 10.2603C84.7967 9.89004 84.6698 9.48416 84.3682 9.25537L81.958 7.42725C81.2834 6.91548 81.6301 5.80141 82.4639 5.80127H85.4434C85.8162 5.80127 86.1464 5.55035 86.2618 5.18018L87.1826 2.22119C87.3115 1.80698 87.6569 1.59994 88.002 1.6001V12.2241Z" fill="#D58618"/>
                      </g>
                      <defs>
                      <clipPath id="clip0_832_40341">
                      <rect width="16" height="16" fill="white"/>
                      </clipPath>
                      <clipPath id="clip1_832_40341">
                      <rect width="16" height="16" fill="white" transform="translate(20)"/>
                      </clipPath>
                      <clipPath id="clip2_832_40341">
                      <rect width="16" height="16" fill="white" transform="translate(40)"/>
                      </clipPath>
                      <clipPath id="clip3_832_40341">
                      <rect width="16" height="16" fill="white" transform="translate(60)"/>
                      </clipPath>
                      <clipPath id="clip4_832_40341">
                      <rect width="16" height="16" fill="white" transform="translate(80)"/>
                      </clipPath>
                      </defs>
                    </svg>
                    <div className="text-[#141511] font-semibold">Fabulous Fabric</div>
                    <div className="text-[#141511] max-w-[600px]">This shirt was exactly what I needed for my sensitive skin. The softness of the fabric is delightful.</div>
                  </div>
                </div>
                <div className="text-[#676764] text-[12px] flex flex-col justify-between gap-[8px]">
                  <div className="text-right">1 year ago</div>
                  <div className="flex items-center gap-[8px]">
                    <img src="/images/reviewimg.svg" />
                    <img src="/images/reviewimg.svg" />
                  </div>
                </div>
              </div>
              <hr className="w-full h-[1px] bg-[#C4C4C4]"/>
              <div className="h-[44px] cursor-pointer bg-[#141511] mx-auto py-[10px] px-[16px] text-white font-medium uppercase min-w-[210px] mt-[30px]">See all 24 reviews</div>
            </div>
          </div>
        </div>
      </div>: ''}
    </div>
  );
};

export default Description;