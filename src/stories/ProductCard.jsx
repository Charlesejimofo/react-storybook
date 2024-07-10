import PropTypes from 'prop-types';
import './ProductCard.css';

const ProductCard = ({ imageUrl, title, text, price, button, addToCart, sale }) => {
    return (
        <div className='card'>
            {imageUrl && <img src={imageUrl} alt={title} className='card-image' />}
            <div className='card-content'>
                <h3 className='card-title'>{title}</h3>
                {sale && <span className='sale'>Sale</span>}
                <p className='card-text'>{text}</p>
                <p className='card-price'>{price}</p>
                {button && (
                    <button className='card-button' onClick={addToCart}>
                        ADD
                    </button>
                )}
            </div>
        </div>
    )
}

export default ProductCard;

ProductCard.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    title: PropTypes.string,
    text: PropTypes.string,
    button: PropTypes.bool,
    addToCart: PropTypes.func,
    sale: PropTypes.bool,
}