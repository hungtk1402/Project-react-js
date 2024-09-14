const ConfirmationModal = ({ showConfirmation, confirmOrder, setShowConfirmation }) => {
    return (
        showConfirmation && (
            <div className="modal fade show d-block" tabIndex="-1" role="dialog" aria-labelledby="confirmModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="confirmModalLabel">Confirm Order</h5>
                            <button type="button" className="close" onClick={() => setShowConfirmation(false)}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            Are you sure you want to place the order?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={() => setShowConfirmation(false)}>Cancel</button>
                            <button type="button" className="btn btn-primary" onClick={confirmOrder}>Confirm</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    );
};

export default ConfirmationModal;
