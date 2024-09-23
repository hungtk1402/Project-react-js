import { useContext, useState, useEffect } from "react"
import { ProductContext } from "../Context/ProductContext"
import SearchBar from "../SearchBar"
import OrderTable from "./OrderTable"
import './OrderManagement.css'
const OrderManagement = () => {
    const { products } = useContext(ProductContext);
    const [orders, setOrders] = useState([]);
    const [filteredOrders, setFilteredOrders] = useState([]);

    // Lấy sản phẩm bằng cách khớp productId trong đơn hàng
    const getProductById = (productId) => {
        return products.find((p) => p._id.$oid === productId) || null;
    }

    // xử lý trạng thái đơn hàng và update delivery date 
    const handleStatusChange = (orderId, newStatus) => {
        const updatedOrders = orders.map(order => {
            if (order.orderId === orderId && order.status !== 'Cancelled' && order.status !== 'Completed') {
                let deliveryDate = order.deliveryDate;

                if (newStatus === 'Completed') {
                    deliveryDate = new Date().toISOString().split('T')[0];
                } else {
                    deliveryDate = newStatus;
                }
                return { ...order, status: newStatus, deliveryDate };
            }
            return order;
        })

        setOrders(updatedOrders);
        setFilteredOrders(updatedOrders);
    }

    useEffect(() => {
        const initialOrders = [
            {
                orderId: 'ORD001',
                customerName: 'Username 1',
                productId: '62ccd4665eefc71539bb6b4c',
                quantity: 2,
                orderDate: '2024-09-01',
                deliveryDate: '',
                shippingAddress: '123 Abc, Hanoi',
                status: 'Pending'
            },
            {
                orderId: 'ORD002',
                customerName: 'Username 2',
                productId: '62ccd8b55eefc71539bb6b52',
                quantity: 1,
                orderDate: '2024-09-03',
                deliveryDate: 'Cancelled',
                shippingAddress: '456 Bca, Ho Chi Minh City',
                status: 'Cancelled'
            },
            {
                orderId: 'ORD003',
                customerName: 'Username 3',
                productId: '62ccdb045eefc71539bb6b56',
                quantity: 3,
                orderDate: '2024-09-05',
                deliveryDate: '2024-09-10',
                shippingAddress: '789 Cab, Da Nang',
                status: 'Completed'
            }
        ];
        setOrders(initialOrders);
        setFilteredOrders(initialOrders);
    }, [products]);


    const handleSearch = (searchTerm) => {
        if (searchTerm === "") {
            setFilteredOrders(orders);
        } else {
            const filtered = orders.filter(order =>
                order.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                getProductById(order.productId)?.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                order.orderId.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredOrders(filtered);
        }
    };

    return (
        <>
            <div className="container">
                <h2 className="text-center mb-4">Order Management</h2>

                <SearchBar onSearch={handleSearch} placeholder="Search by customer, product, or order ID..." />

                <OrderTable
                    orders={filteredOrders}
                    getProductById={getProductById}
                    handleStatusChange={handleStatusChange}
                />
            </div>
        </>
    )
}
export default OrderManagement