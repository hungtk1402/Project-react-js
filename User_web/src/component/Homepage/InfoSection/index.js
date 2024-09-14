const InfoSection = () => {
    return (
        <>
            <div className="row text-center bg-light py-4">
                <div className="col-md-4">
                    <h5>FREE SHIPPING</h5>
                    <p>Free shipping worldwide</p>
                </div>
                <div className="col-md-4">
                    <h5>24 X 7 SERVICE</h5>
                    <p>Free shipping worldwide</p>
                </div>
                <div className="col-md-4">
                    <h5>FESTIVAL OFFER</h5>
                    <p>Free shipping worldwide</p>
                </div>
            </div>
            <div className="container">
                <div className="row mt-5 text-center">
                    <div className="col-md-6">
                        <h5>LET'S BE FRIENDS!</h5>
                        <p>Nisi nisi tempor consequat laboris nisi.</p>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                        <input
                            type="email"
                            className="form-control homePageInput"
                            placeholder="Enter your email address"
                        />
                        <button className="btn btn-dark ml-2">Subscribe</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InfoSection