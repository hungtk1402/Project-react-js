import CardItem from "../cardItem";

const CardRow = ({ items }) => {
    return (
      <div className="row">
        {items.map((item, index) => (
          <div className={`col-md-${12 / items.length} mb-4`} key={index}>
            <CardItem
              imageSrc={item.imageSrc}
              altText={item.altText}
              href={item.href}
            />
          </div>
        ))}
      </div>
    );
  };
  
  export default CardRow;