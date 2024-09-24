import { Pie } from 'react-chartjs-2';

const PieChart = ({ data }) => {
    return (
        <div className="col-md-4">
            <div className="card">
                <div className="card-header">Order Status Distribution</div>
                <div className="card-body">
                    <Pie data={data} />
                </div>
            </div>
        </div>
    );
};

export default PieChart;