import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { setShowLogout } from "../../redux/states/app";
import { apiRequest } from "../../utils/utils";
import { Order } from "../../utils/utils";

const ProfileOverview = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { loggedInUser } = useSelector((state: RootState) => state.app);
    const [totalProductsPurchased, setTotalProductsPurchased] = useState<number>(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                setLoading(true);
                const response = await apiRequest("orders/user");
                if (response.status === 200) {
                    const orders: Order[] = response.data?.orders || [];
                    // Calculate total products purchased (sum of all quantities across all orders)
                    const total = orders.reduce((sum, order) => {
                        return sum + order.orderProducts.reduce((orderSum, product) => {
                            return orderSum + product.quantity;
                        }, 0);
                    }, 0);
                    setTotalProductsPurchased(total);
                }
            } catch (error) {
                console.error("Error fetching orders:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchOrders();
    }, []);

    const formatJoinDate = (dateString: string | undefined): string => {
        if (!dateString) return "N/A";
        try {
            const date = new Date(dateString);
            if (isNaN(date.getTime())) return "N/A";
            const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            const day = date.getDate();
            const month = months[date.getMonth()];
            const year = date.getFullYear();
            return `${day.toString().padStart(2, '0')} ${month} ${year}`;
        } catch {
            return "N/A";
        }
    };

    return (
    <div className="tmd:col-span-2 tmd:border-l tmd:border-[#D6D6D5] h-full p-[20px] tmd:p-[24px] gap-[20px] flex flex-col">
        <div className="flex flex-col gap-[20px] border-b border-[#D6D6D5] pb-[20px]">
            <div className="text-[#141511] font-medium text-[24px]">Overview</div>
            <div className="flex items-center justify-between w-full">
                <div className="flex flex-col text-left gap-[4px]">
                    <div className="text-[#676764] text-[16px] leading-[130%]">Joined Drest on</div>
                    <div className="text-[#141511] text-[18px] leading-[150%] font-medium">{formatJoinDate(loggedInUser?.createdAt)}</div>
                </div>
                <div className="flex flex-col text-left gap-[4px]">
                    <div className="text-[#676764] text-[16px] leading-[130%]">Purchase till date</div>
                    <div className="text-[#141511] text-[18px] leading-[150%] font-medium">
                        {loading ? "Loading..." : `${totalProductsPurchased} Products`}
                    </div>
                </div>
            </div>
        </div>
        <div className="h-[48px] cursor-pointer text-[#141511] flex items-center justify-center text-[#BD3322] font-semibold mt-[50px] gap-[8px]"
            onClick={()=>{
                dispatch(setShowLogout(true));
            }}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.2168 9.99998H16.6668" stroke="#BD3322" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9.0526 16.6508L5.57927 16.6666C4.58344 16.6716 3.77344 15.8733 3.77344 14.8875V5.11248C3.77344 4.12998 4.5776 3.33331 5.57094 3.33331H9.16594" stroke="#BD3322" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M13.334 13.3334L16.6673 10L13.334 6.66669" stroke="#BD3322" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            LOGOUT
        </div>
    </div>
  )
}

export default ProfileOverview