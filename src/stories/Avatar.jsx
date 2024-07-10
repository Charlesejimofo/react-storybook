import PropTypes from 'prop-types'
import './Avatar.css'

const Avatar = ({ size, image, alt, name }) => {
    return (
        // size corresponds to class
        <div className={`avatar avatar-${size}`} >
            <img src={image} alt="alt" className='avatar-image' />
            {name && <span className='avatar-name font-sans'>{name}</span>}

        </div>
    )
}
Avatar.propTypes = {
    size: PropTypes.oneOf(['small', 'large']).isRequired,
    image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    name: PropTypes.string,
};


export default Avatar

