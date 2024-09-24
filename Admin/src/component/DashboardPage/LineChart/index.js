import { Line } from 'react-chartjs-2';
const LineChart = ({ data }) => {
    return (
        <div className="col-md-8">
            <div className="card">
                <div className="card-header">Income Overview</div>
                <div className="card-body">
                    <Line data={data} />
                </div>
            </div>
        </div>
    );
};

export default LineChart;