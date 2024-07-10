import PropTypes from 'prop-types'
import './Card.css'

const Card = ({ imageUrl, title, text, buttonText }) => {
    return (
        <div className="card">
            {imageUrl && <img src={imageUrl} alt={title} className="card-image" />}
            <div className="card-content">
                <h3 className="card-title">{title}</h3>
                <p className="card-text">{text}</p>
                {/* Make the button optional */}
                <button className="card-button">{buttonText}</button>
            </div>
        </div>
    )
}

export default Card

Card.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    imageUrl: PropTypes.string,
    buttonText: PropTypes.string,
}