import Banner1 from '../../img/banner1.jpg'
import Banner2 from '../../img/banner2.jpg'
import Banner3 from '../../img/banner3.jpg'
import HeaderComponent from '../HeaderAndFooter/HeaderComponent'
import FooterComponent from '../HeaderAndFooter/FooterComponent'
import CardComponent from './cardComponent/CardComponent'
import ProductList from './ProductList/ProductList'
import BannerCarousel from './BannerCarousel'
import InfoSection from './InfoSection'
import './homePage.css'

const HomePage = () => {

    const banners = [
        {
            image: Banner1,
            caption: {
                title: "New Inspiration 2020",
                subtitle: "20% OFF ON NEW SEASON",
                btn: "Browse collections"
            },
            link: "/shop"
        },
        {
            image: Banner2,
            caption: {
                title: "Explore the Latest Gadgets",
                subtitle: "Up to 15% OFF on All Devices",
                btn: "Shop Now"
            },
            link: "/shop"
        },
        {
            image: Banner3,
            caption: {
                title: "Innovation Awaits",
                subtitle: "Discover the Future with Our Tech",
                btn: "See More"
            },
            link: "/shop"
        }
    ];

    return (
        <div className="container-fluid">
            <HeaderComponent></HeaderComponent>
            <BannerCarousel banners={banners} />
            <div className="container mt-2 mb-4">
                <h6 className="text-center mt-5">Carefully Created Collections</h6>
                <h3 className="text-center mb-4">Browse Our Categories</h3>
                <CardComponent></CardComponent>
                <ProductList />
                <InfoSection></InfoSection>
            </div>
            <FooterComponent></FooterComponent>
        </div>
    )
}
export default HomePage