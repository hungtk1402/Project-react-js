import './DashboardPage.css'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
} from 'chart.js';
import WidgetCard from './WidgetCard';
import LineChart from './LineChart';
import PieChart from './PieChart';


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
);

const DashboardPage = () => {
    const revenueThisMonth = 32640000;
    const yearlyIncome = 600000000;
    const completedOrders = 120;
    const pendingOrders = 30;

    // Line chart data 
    const incomeData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [{
            label: 'Income Overview',
            data: [40000000, 45000000, 50000000, 55000000, 60000000, 55000000, 53000000, 58000000, 62000000, 64000000, 67000000, 70000000],
            fill: true,
            borderColor: 'rgba(75,192,192,1)',
            backgroundColor: 'rgba(75,192,192,0.2)',
        }]
    };

    // Pie chart data
    const orderStatusData = {
        labels: ['Completed', 'Cancelled', 'Processing'],
        datasets: [{
            data: [completedOrders, 10, pendingOrders],
            backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56'],
            hoverBackgroundColor: ['#36A2EB', '#FF6384', '#FFCE56']
        }]
    };

    return (
        <div className="container mb-5">
            <h2 className="text-center mb-4">Dashboard</h2>
            <div className="row widget_card">
                <WidgetCard
                    title="This month's income"
                    amount={`${revenueThisMonth.toLocaleString('vi-VN')} VNĐ`}
                    percentage="8% increase"
                    icon="bi bi-currency-dollar"
                    textClass="text-success"
                    iconColor="#28a745"
                />
                <WidgetCard
                    title="Yearly Income"
                    amount={`${yearlyIncome.toLocaleString('vi-VN')} VNĐ`}
                    percentage="12% increase"
                    icon="bi bi-bar-chart"
                    textClass="text-success"
                    iconColor="#28a745"
                />
                <WidgetCard
                    title="Completed Orders"
                    amount={completedOrders}
                    percentage="10% increase"
                    icon="bi bi-check-circle"
                    textClass="text-info"
                    iconColor="#17a2b8"
                />
                <WidgetCard
                    title="Pending Orders"
                    amount={pendingOrders}
                    percentage="5% pending"
                    icon="bi bi-clock"
                    textClass="text-warning"
                    iconColor="#ffc107"
                />
            </div>
            <div className="row chart_row">
                <LineChart data={incomeData} />
                <PieChart data={orderStatusData} />
            </div>
        </div>
    );
}

export default DashboardPage;
