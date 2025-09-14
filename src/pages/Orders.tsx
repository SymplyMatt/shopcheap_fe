import { useEffect, useState } from "react";
import EmptyOrder from "../components/profile/EmptyOrder";
import OrderList from "../components/profile/OrderList";
import ProfileNavigation from "../components/profile/ProfileNavigation";
import Layout from "./Layout";
import { apiRequest } from "../utils/utils";

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        async function getUserOrders() {
            setLoading(true);
            const response = await apiRequest("orders");
            setLoading(false);
            const orders = response?.data?.orders || [];
            setOrders(orders);
        }
        orders.length === 0 && getUserOrders();
    }),[];
    return (
        <Layout headerGap="">
            <div className="w-full grid grid-cols-1 tmd:grid-cols-[360px_1fr] items-center justify-center">
                <ProfileNavigation />
                {(!orders.length && !loading) ? <EmptyOrder /> : <></>}
                {(orders.length && !loading) ? <OrderList orders={orders}/> : <></>}
            </div>
        </Layout>
    );
};

export default Orders;