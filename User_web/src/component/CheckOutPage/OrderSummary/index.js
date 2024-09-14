const OrderSummary = ({ cart, totalAmount }) => {
    return (
        <div className="order-summary">
            <h5>Your Order</h5>
            <ul>
                {cart.map((item, index) => (
                    <li key={index}>
                        <div className="row">
                            <div className="col-sm">{item.product.name}</div>
                            <div className="col-sm">
                                <span className="float-right">
                                    {new Intl.NumberFormat('vi-VN').format(item.product.price * item.quantity)} VND
                                </span>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            <p className="total">TOTAL
                <span className="float-right">
                    {new Intl.NumberFormat('vi-VN').format(totalAmount)} VND
                </span>
            </p>
        </div>
    );
};

export default OrderSummary;
