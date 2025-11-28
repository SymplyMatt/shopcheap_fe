import { useEffect, useState } from "react";
import EmptyOrder from "../components/profile/EmptyOrder";
import OrderList from "../components/profile/OrderList";
import ProfileNavigation from "../components/profile/ProfileNavigation";
import Layout from "./Layout";
import { apiRequest } from "../utils/utils";

interface PaginationInfo {
    currentPage: number;
    totalPages: number;
    total: number;
    hasNext: boolean;
    hasPrev: boolean;
}

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [pagination, setPagination] = useState<PaginationInfo | null>(null);

    useEffect(()=>{
        async function getUserOrders() {
            setLoading(true);
            const response = await apiRequest(`orders/user?page=${currentPage}&limit=10`);
            setLoading(false);
            const orders = response?.data?.orders || [];
            const paginationInfo = response?.data?.pagination || null;
            setOrders(orders);
            setPagination(paginationInfo);
        }
        getUserOrders();
    },[currentPage]);

    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= (pagination?.totalPages || 1)) {
            setCurrentPage(page);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <Layout headerGap="">
            <div className="w-full grid grid-cols-1 tmd:grid-cols-[360px_1fr] items-center justify-center">
                <ProfileNavigation />
                {(!orders.length && !loading) ? <EmptyOrder /> : <></>}
                {(orders.length && !loading) ? (
                    <>
                        <OrderList orders={orders} pagination={pagination}/>
                        {pagination && pagination.totalPages > 1 && (
                            <div className="w-full flex items-center justify-center gap-[20px] mt-[24px] pb-[24px] tmd:col-start-2">
                                {/* Previous Button */}
                                <div
                                    className={`hidden tmd:flex items-center justify-center gap-[4px] ${
                                        !pagination.hasPrev
                                            ? "opacity-50 cursor-not-allowed"
                                            : "cursor-pointer"
                                    }`}
                                    onClick={() => pagination.hasPrev && handlePageChange(currentPage - 1)}
                                >
                                    <svg
                                        width="8"
                                        height="12"
                                        viewBox="0 0 8 12"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M5.99994 11.6537L0.346191 6L5.99994 0.346249L7.05369 1.4L2.45369 6L7.05369 10.6L5.99994 11.6537Z"
                                            fill="#2B2B2B"
                                        />
                                    </svg>
                                    Prev
                                </div>

                                {/* Pages */}
                                <div className="flex w-full items-center justify-center gap-[20px]">
                                    {Array.from({
                                        length: pagination.totalPages,
                                    }).reduce((acc: React.ReactNode[], _, index) => {
                                        const page = index + 1;
                                        const isInFirstThree = page <= 3;
                                        const isLast = page > pagination.totalPages - 1;
                                        const isNearCurrent =
                                            page >= currentPage - 1 && page <= currentPage + 1;
                                        const shouldShow = isInFirstThree || isLast || isNearCurrent;

                                        const lastKey = acc.length
                                            ? (acc[acc.length - 1] as any)?.key
                                            : null;
                                        const lastPage =
                                            typeof lastKey === "string" &&
                                            lastKey.startsWith("ellipsis")
                                                ? Number(lastKey.split("-")[1])
                                                : Number(lastKey);

                                        if (shouldShow) {
                                            if (acc.length && lastPage && page - lastPage > 1) {
                                                acc.push(
                                                    <div key={`ellipsis-${page}`} className="hidden tmd:flex">
                                                        ...
                                                    </div>
                                                );
                                            }
                                            acc.push(
                                                <div
                                                    key={page}
                                                    className={`text-[12px] h-[32px] border border-[#2B2B2B] flex items-center justify-center cursor-pointer p-[4px] rounded-[4px] ${
                                                        currentPage === page
                                                            ? "bg-[#2B2B2B] text-white"
                                                            : "opacity-50"
                                                    } ${page < 10 ? "w-[26px]" : "w-[40px]"}`}
                                                    onClick={() => handlePageChange(page)}
                                                >
                                                    {page}
                                                </div>
                                            );
                                        }
                                        return acc;
                                    }, [])}
                                </div>

                                {/* Next Button */}
                                <div
                                    className={`hidden tmd:flex items-center justify-center gap-[4px] ${
                                        !pagination.hasNext
                                            ? "opacity-50 cursor-not-allowed"
                                            : "cursor-pointer"
                                    }`}
                                    onClick={() => pagination.hasNext && handlePageChange(currentPage + 1)}
                                >
                                    Next
                                    <svg
                                        width="8"
                                        height="12"
                                        viewBox="0 0 8 12"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M4.94625 6L0.346252 1.4L1.4 0.346249L7.05375 6L1.4 11.6537L0.346252 10.6L4.94625 6Z"
                                            fill="#2B2B2B"
                                        />
                                    </svg>
                                </div>

                                {/* Mobile Previous/Next */}
                                <div className="flex tmd:hidden items-center gap-[12px]">
                                    <div
                                        className={`flex items-center justify-center gap-[4px] ${
                                            !pagination.hasPrev
                                                ? "opacity-50 cursor-not-allowed"
                                                : "cursor-pointer"
                                        }`}
                                        onClick={() => pagination.hasPrev && handlePageChange(currentPage - 1)}
                                    >
                                        <svg
                                            width="8"
                                            height="12"
                                            viewBox="0 0 8 12"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M5.99994 11.6537L0.346191 6L5.99994 0.346249L7.05369 1.4L2.45369 6L7.05369 10.6L5.99994 11.6537Z"
                                                fill="#2B2B2B"
                                            />
                                        </svg>
                                    </div>
                                    <span className="text-[#141511] text-[14px]">{currentPage}/{pagination.totalPages}</span>
                                    <div
                                        className={`flex items-center justify-center gap-[4px] ${
                                            !pagination.hasNext
                                                ? "opacity-50 cursor-not-allowed"
                                                : "cursor-pointer"
                                        }`}
                                        onClick={() => pagination.hasNext && handlePageChange(currentPage + 1)}
                                    >
                                        <svg
                                            width="8"
                                            height="12"
                                            viewBox="0 0 8 12"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M4.94625 6L0.346252 1.4L1.4 0.346249L7.05375 6L1.4 11.6537L0.346252 10.6L4.94625 6Z"
                                                fill="#2B2B2B"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        )}
                    </>
                ) : <></>}
            </div>
        </Layout>
    );
};

export default Orders;