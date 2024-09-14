import HeaderComponent from "../HeaderAndFooter/HeaderComponent";
import FooterComponent from "../HeaderAndFooter/FooterComponent";
import NavbarComponent from "../NavbarComponent";

const DashboardPage = () => {
    return (
        <>
            <HeaderComponent></HeaderComponent>
            <div className="row">
                <div className="col-sm-2">
                    <NavbarComponent></NavbarComponent>
                </div>
                <div className="col-sm-10">
                    <div className="container">
                        DashboardPage
                    </div>
                </div>
            </div>
            <FooterComponent></FooterComponent>
        </>
    )
}

export default DashboardPage