import { useState, useRef, useEffect } from "react";
import { Product } from "../../utils/utils";
interface CategoriesAndProductsProps {
  product: Product;
}
const Description : React.FC<CategoriesAndProductsProps> =  ({product}) => {
  const [showDescription, setShowDescription] = useState<boolean>(true);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const [descriptionHeight, setDescriptionHeight] = useState<number>(0);
  
  useEffect(() => {
    if (descriptionRef.current) {
      setDescriptionHeight(showDescription ? descriptionRef.current.scrollHeight : 0);
    }
  }, [showDescription]);
  
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
          {
            product.productContents.map((content, index) => (
              <div dangerouslySetInnerHTML={{ __html: content.content }} key={index}/>
            ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;