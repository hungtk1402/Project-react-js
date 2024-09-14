const CheckoutForm = ({ form, handleInputChange, handlePlaceOrder, isFormValid }) => {
    return (
        <form onSubmit={handlePlaceOrder}>
            <div className="form-group">
                <label htmlFor="fullName">Full Name:</label>
                <input
                    type="text"
                    className="form-control"
                    id="fullName"
                    placeholder="Enter Your Full Name"
                    value={form.fullName}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter Your Email"
                    value={form.email}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="phone">Phone Number:</label>
                <input
                    type="text"
                    className="form-control"
                    id="phone"
                    placeholder="Enter Your Phone Number"
                    value={form.phone}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="address">Address:</label>
                <input
                    type="text"
                    className="form-control"
                    id="address"
                    placeholder="Enter Your Address"
                    value={form.address}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <button
                type="submit"
                className="btn btn-dark"
                disabled={!isFormValid}
            >
                Place Order
            </button>
        </form>
    );
};

export default CheckoutForm;
