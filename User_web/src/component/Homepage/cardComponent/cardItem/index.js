const CardItem = ({ imageSrc, altText, href }) => {
    return (
      <div className="card category-card">
        <img src={imageSrc} onClick={href} alt={altText} />
      </div>
    );
  };
  
  export default CardItem;