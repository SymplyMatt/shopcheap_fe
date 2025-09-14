import { useEffect, useState } from "react";
import { Order as OrderInterface } from "../../utils/utils"

type MenuLinksProps = {
    index: number;
    order: OrderInterface
};

function formatDate(date: Date): string {
  const dateObj = new Date(date);
  if (isNaN(dateObj.getTime())) {
    throw new Error('Invalid date provided');
  }
  const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];
  const day = dateObj.getDate();
  const month = months[dateObj.getMonth()];
  const year = dateObj.getFullYear();
  let hours = dateObj.getHours();
  const minutes = dateObj.getMinutes();

  const ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12;
  const minutesStr = minutes.toString().padStart(2, '0');
  return `${day} ${month} ${year}, ${hours}:${minutesStr} ${ampm}`;
}
const Order: React.FC<MenuLinksProps> = ({order,index}) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleOrderDetails = () => {
      setIsOpen(!isOpen);
    };
    useEffect(()=>{
        if(index === 0) setIsOpen(true);
    },[index])
  return (
        <div className="w-full flex flex-col">
            <div className="w-full p-[20px] border border-[#D6D6D5] flex flex-col justify-between gap-[20px]">
                <div className="w-full flex items-center justify-between">
                    <div className="flex flex-col text-left gap-[4px]">
                        <div className="text-[#141511] text-[18px] leading-[150%] font-semibold">ID : #{order.id.toUpperCase().substring(0,14)}</div>
                        <div className="text-[#4F4F4D] text-[16px] leading-[130%]">Date : { formatDate(order.createdAt)}</div>
                    </div>
                    <div className="hidden tmd:flex items-center justify-center gap-[32px]">
                        <div className="flex flex-col text-left gap-[4px]">
                            <div className="text-[#676764] text-[16px] leading-[130%]">Total products</div>
                            <div className="text-[#141511] text-[18px] leading-[150%] font-medium">{order.orderProducts.length} Products</div>
                        </div>
                        <div className="flex flex-col text-left gap-[4px]">
                            <div className="text-[#676764] text-[16px] leading-[130%]">Total payment</div>
                            <div className="text-[#141511] text-[18px] leading-[150%] font-medium">₦{order.total.toLocaleString()}</div>
                        </div>
                        <div className="flex flex-col text-left gap-[4px]">
                            <div className="text-[#676764] text-[16px] leading-[130%]">Status order</div>
                            <div className="text-[#D58618] text-[18px] leading-[150%] font-medium">On progress</div>
                        </div>
                    </div>
                    <img src={isOpen ? "/images/openorder.svg" : "/images/closeorder.svg"} onClick={toggleOrderDetails} className={`cursor-pointer transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}/>
                </div>
                <div className="grid grid-cols-1 tmd:hidden justify-center gap-[8px]">
                    <div className="flex gap-[4px] col-span-1 justify-between items-center">
                        <div className="text-[#676764] text-[14px] leading-[130%]">Total products</div>
                        <div className="text-[#141511] text-[14px] leading-[150%] font-medium">{order.orderProducts.length}</div>
                    </div>
                    <div className="flex gap-[4px] col-span-1 justify-between items-center">
                        <div className="text-[#676764] text-[14px] leading-[130%]">Total payment</div>
                        <div className="text-[#141511] text-[14px] leading-[150%] font-medium">₦{order.total.toLocaleString()}</div>
                    </div>
                    <div className="flex gap-[4px] col-span-1 justify-between items-center">
                        <div className="text-[#676764] text-[14px] leading-[130%]">Status order</div>
                        <div className="text-[#D58618] text-[14px] leading-[150%] font-medium">On progress</div>
                    </div>
                </div>
            </div>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[9999px]' : 'max-h-0'}`}>
                <div className="w-full p-[10px] tmd:p-[20px] border-r border-l border-b border-[#D6D6D5] flex justify-center bg-[#F3F3F3] transition-all duration-300 ease-in-out">
                    <div className="w-full bg-white flex flex-col items-center">
                        <div className="h-full w-full grid grid-cols-1 tmd:grid-cols-2 border-b border-[#D6D6D5] gap-[30px] tmd:gap-[20px]">
                            <div className="col-span-1 gap-[24px] flex flex-col p-[10px] tmd:p-[20px] border-b border-[#D6D6D5] tmd:border-none">
                                <div className="text-[#141511] text-[16px] tmd:text-[20px] font-medium">Product details</div>
                                {
                                    order.orderProducts.map((product, index)=>(
                                        <div className="w-full flex gap-[16px]" key={index}>
                                            <img src={product.productOption.image} className="h-[100px] w-[100px] tmd:w-auto tmd:h-full object-contain border border-[#F3F3F3]" style={{ width: '100px', height: '100px', objectFit: 'contain' }}/>
                                            <div className="w-full flex flex-col gap-[4px]">
                                                <div className="text-[#141511] text-[14px] tmd:text-lg font-medium leading-[150%]">{product.product.name}</div>
                                                <div className="text-[#4F4F4D] text-[14px] tmd:text-md price mt-[12px]">Selected option: {product.productOption.name}</div>
                                                <div className="text-[#4F4F4D] text-[14px] tmd:text-md price mt-[12px]">Unit price: ₦{product.price.toLocaleString()}</div>
                                                <div className="text-[#4F4F4D] text-[14px] tmd:text-md price mt-[12px]">Quantiy: {product.quantity}</div>
                                                <div className="text-[#4F4F4D] text-[14px] tmd:text-md price mt-[12px]">Total: ₦{(product.quantity * product.price).toLocaleString()}</div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className="w-full pb-[10px] px-[10px] tmd:p-[24px] flex flex-col gap-[12px] tmd:border-l border-[#D6D6D5]">
                                <div className="text-[#141511] text-base tmd:text-[20px] font-medium">Summary</div>
                                <div className="w-full flex items-center justify-between">
                                    <div className="text-[#4F4F4D] text-base tmd:text-[18px] flex items-center gap-[4px]">Total Products</div>
                                    <div className="text-[#4F4F4D] text-base tmd:text-[20px] flex items-center gap-[8px]">{order.orderProducts.length} Products</div>
                                </div>
                                <div className="w-full flex items-center justify-between">
                                    <div className="text-[#4F4F4D] text-base tmd:text-[18px] flex items-center gap-[8px]">Delivery fee</div>
                                    <div className="text-[#4F4F4D] text-base tmd:text-[20px] flex items-center gap-[8px]">₦{order.delivery}</div>
                                </div>
                                <div className="w-full flex items-center justify-between">
                                    <div className="text-[#141511] text-base tmd:text-[18px] flex items-center gap-[4px] font-semibold">Total payment </div>
                                    <div className="text-[#4F4F4D] text-[20px] flex items-center gap-[8px] font-semibold">₦{order.total.toLocaleString()}</div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full grid grid-cols-1 tmd:grid-cols-2 border-b border-[#D6D6D5]">
                            <div className="col-span-1 flex flex-col gap-[12px] p-[10px] tmd:p-[24px] border-b border-[#D6D6D5] tmd:border-none">
                                    <div className="text-[#141511] text-[18px] tmd:text-[24px] font-medium">Delivery details</div>
                                    <div className="border border-[#D6D6D5] flex flex-col tmd:h-[245px] p-[16px] gap-[24px] bg-[#F3F3F3]">
                                        <div className="text-[#676764] text-[18px] font-normal">DELIVERY ADDRESS</div>
                                        <div className="w-full flex-col gap-[8px]">
                                            <div className="text-[141511] text-[20px]">{order.firstname} {order.lastname}</div>
                                            <div className="text-[#676764] text-[16px] tmd:text-[18px]">{order.address}</div>
                                            <div className="text-[#676764] text-[16px] tmd:text-[18px]">{order.state}</div>
                                            <div className="text-[#676764] text-[16px] tmd:text-[18px]">{order.email}</div>
                                            <div className="text-[#676764] text-[16px] tmd:text-[18px]">+{order.phone}</div>
                                        </div>
                                    </div>
                                    {/* <div className="w-full flex tmd:flex-row flex-col tmd:items-center gap-[8px] tmd:gap-[32px]">
                                        <div className="w-full justify-between tmd:justify-start flex tmd:flex-col gap-[8px]">
                                            <div className="text-[#676764] text-[18px] font-normal">Shipping type</div>
                                            <div className="text-[#141511] text-[18px] font-medium">Standard ( Free )</div>
                                        </div>
                                        <div className="w-full justify-between tmd:justify-start flex tmd:flex-col gap-[8px]">
                                            <div className="text-[#676764] text-[18px] font-normal">Estimated arrive</div>
                                            <div className="text-[#141511] text-[18px] font-medium">25 January 2024</div>
                                        </div>
                                    </div> */}
                            </div>
                        </div>
                        {/* <div className="w-full flex tmd:flex-row flex-col items-center p-[24px] justify-between gap-[20px] tmd:gap-[10px]">
                            <div className="flex gap-[8px] max-w-[600px] text-[#676764] text-[14px] tmd:text-base">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.99787 6.66671C9.88287 6.66671 9.78953 6.76004 9.79037 6.87504C9.79037 6.99004 9.8837 7.08337 9.9987 7.08337C10.1137 7.08337 10.207 6.99004 10.207 6.87504C10.207 6.76004 10.1137 6.66671 9.99787 6.66671" stroke="#676764" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10 17.5V17.5C5.8575 17.5 2.5 14.1425 2.5 10V10C2.5 5.8575 5.8575 2.5 10 2.5V2.5C14.1425 2.5 17.5 5.8575 17.5 10V10C17.5 14.1425 14.1425 17.5 10 17.5Z" stroke="#676764" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M9.9987 10V14.1667" stroke="#676764" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                                Order cancellations can only be made during the Review stage. If you cancel at this point, your full payment will be refunded.
                            </div>
                            <div className="h-[48px] bg-[#BD3322] text-white cursor-pointer flex items-center justify-center py-[8px] px-[24px] w-full tmd:w-fit">CANCEL ORDER</div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Order