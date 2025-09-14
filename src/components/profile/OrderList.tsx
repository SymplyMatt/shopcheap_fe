import { Order as OrderInterface } from "../../utils/utils"
import Order from "./Order"
interface ComponentProps {
  orders: OrderInterface[]
}
const OrderList = ({ orders }: ComponentProps) => {
  return (
    <div className="flex flex-col w-full tmd:border-b tmd:border-l border-[#D6D6D5] h-full p-[20px] tmd:p-[24px] gap-[16px]">
        <div className="w-full flex items-center justify-between">
            <div className="text-[#141511] text-[24px] leading-[130%] font-bold">Your orders</div>
            <div className="text-[#676764] text-[18px]">{orders.length} Total orders</div>
        </div>
        {orders.map((order, index) => (
            <Order key={index} index={index} order={order}/>
        ))}
    </div>
  )
}

export default OrderList