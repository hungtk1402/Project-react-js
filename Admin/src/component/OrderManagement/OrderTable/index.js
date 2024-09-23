import OrderRow from "../OrderRow"

const OrderTable = ({ orders, getProductById, handleStatusChange }) => {
    return (
        <table className="table table-hover table-bordered ">
            <thead className="thead-dark">
                <tr className="text-center">
                    <th>Order ID</th>
                    <th>Customer Name</th>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Total Price (VND)</th>
                    <th>Order Date</th>
                    <th>Delivery Date</th>
                    <th>Shipping Address</th>
                    <th>Status</th> {/* Only the status column remains */}
                </tr>
            </thead>
            <tbody>
                {orders.length > 0 ? (
                    orders.map(order => (
                        <OrderRow
                            key={order.orderId}
                            order={order}
                            getProductById={getProductById}
                            handleStatusChange={handleStatusChange}
                        />
                    ))
                ) : (
                    <tr>
                        <td colSpan="9" className="text-center">No orders found</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}

export default OrderTable