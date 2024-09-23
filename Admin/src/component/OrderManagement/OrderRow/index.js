import StatusDropdown from "../StatusDropdown";

const OrderRow = ({ order, getProductById, handleStatusChange }) => {
    const product = getProductById(order.productId);
    const totalPrice = product ? product.price * order.quantity : 0;

    return (
        <tr className="text-center">
            <td>{order.orderId}</td>
            <td>{order.customerName}</td>
            <td>{product ? product.name : 'Unknown Product'}</td>
            <td>{order.quantity}</td>
            <td>{new Intl.NumberFormat('vi-VN').format(totalPrice)}</td>
            <td>{order.orderDate}</td>
            <td>{order.deliveryDate || 'Pending'}</td>
            <td>{order.shippingAddress}</td>
            <td>
                <StatusDropdown order={order} handleStatusChange={handleStatusChange} />
            </td>
        </tr>
    )
}

export default OrderRow