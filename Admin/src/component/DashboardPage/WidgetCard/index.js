const WidgetCard = ({ title, amount, icon, percentage, textClass, iconColor }) => {
    return (
        <div className="col-md-6">
            <div className="card shadow-sm mb-3 bg-white rounded">
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <h5>{title}</h5>
                        <h2>{amount}</h2>
                        <span className={textClass}>{percentage}</span>
                    </div>
                    <div className="icon">
                        <i className={icon} style={{ fontSize: '2rem', color: iconColor }}></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WidgetCard;