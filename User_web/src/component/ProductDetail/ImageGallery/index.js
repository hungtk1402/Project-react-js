import { useState, useEffect } from 'react';
import './ImageGallery.css';

const ImageGallery = ({ img1, img2, img3, img4 }) => {
    const [mainImage, setMainImage] = useState(img1);

    const handleImageClick = (image) => {
        setMainImage(image);
    };
    
    // Mỗi khi img1 thay đổi, cập nhật lại ảnh chính
    useEffect(() => {
        setMainImage(img1);
    }, [img1]);


    return (
        <div className="image-gallery">
            {/* Hiển thị ảnh chính */}
            <div className="main-image-container">
                <img src={mainImage} alt="Main Product" className="main-image" />
            </div>

            {/* Hiển thị các ảnh nhỏ bên dưới */}
            <div className="thumbnail-container">
                {img1 && (
                    <img
                        src={img1}
                        alt="Product Thumbnail 1"
                        className="thumbnail"
                        onClick={() => handleImageClick(img1)}
                    />
                )}
                {img2 && (
                    <img
                        src={img2}
                        alt="Product Thumbnail 2"
                        className="thumbnail"
                        onClick={() => handleImageClick(img2)}
                    />
                )}
                {img3 && (
                    <img
                        src={img3}
                        alt="Product Thumbnail 3"
                        className="thumbnail"
                        onClick={() => handleImageClick(img3)}
                    />
                )}
                {img4 && (
                    <img
                        src={img4}
                        alt="Product Thumbnail 4"
                        className="thumbnail"
                        onClick={() => handleImageClick(img4)}
                    />
                )}
            </div>
        </div>
    );
};

export default ImageGallery;
