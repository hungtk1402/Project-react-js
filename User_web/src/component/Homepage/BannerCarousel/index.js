import { Link } from 'react-router-dom';

const BannerCarousel = ({ banners }) => {
    return (
        <div id="bannerCarousel" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                {banners.map((banner, index) => (
                    <div 
                        key={index} 
                        className={`carousel-item ${index === 0 ? 'active' : ''}`}
                    >
                        <img src={banner.image} className="d-block w-100" alt={`Banner ${index + 1}`} />
                        <div className="carousel-caption banner-text">
                            <h4 className="line line-1">{banner.caption.title}</h4>
                            <h2 className="line line-2">{banner.caption.subtitle}</h2>
                            <div className="line line-3">
                                <Link to={banner.link}>{banner.caption.btn}</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <a className="carousel-control-prev" href="#bannerCarousel" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#bannerCarousel" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    );
};

export default BannerCarousel;
