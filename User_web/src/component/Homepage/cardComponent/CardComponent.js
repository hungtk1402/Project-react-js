import CardRow from "./cardRow";
import Iphone from '../../../img/iphone.png'
import Mac from '../../../img/mac.png'
import Ipad from '../../../img/ipad.png'
import AppleWatch from '../../../img/appleWatch.png'
import Airport from '../../../img/airport.png'
import { useNavigate } from 'react-router-dom';

const CardComponent = () => {
    const navigate = useNavigate();

    const toShopPage = (category) => {
        navigate(`/shop?category=${category}`)
    }
    const cardData = [
        [
            { imageSrc: Iphone, altText: 'iPhone', href: () => toShopPage('iphone') },
            { imageSrc: Mac, altText: 'Mac', href: () => toShopPage('macbook') },
        ],
        [
            { imageSrc: Ipad, altText: 'iPad', href: () => toShopPage('ipad') },
            { imageSrc: AppleWatch, altText: 'Watch', href: () => toShopPage('watch') },
            { imageSrc: Airport, altText: 'AirPods', href: () => toShopPage('airpod') },
        ],
    ];

    return (
        <div>
            {cardData.map((rowItems, index) => (
                <CardRow items={rowItems} key={index} />
            ))}
        </div>
    );
};

export default CardComponent;