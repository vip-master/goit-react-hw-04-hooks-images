import React, { useEffect } from 'react'
import PropTypes from 'prop-types'


const Modal=({onClose, image})=>{   

    useEffect(()=>{        
        const _handleEscKey=({keyCode})=>{
            if(keyCode === 27) onClose()
        }

        document.addEventListener("keydown", _handleEscKey, false);

        return document.removeEventListener("keydown", _handleEscKey, false);
    },[])

    const handleClick=(e)=>{
        if(e.target.attributes.class) onClose()
    }

    return (
            <div className="Overlay" onClick={handleClick}>
              <div className="Modal">
                <img src={image.bigImage} alt={image.alt} />
              </div>
            </div>
    )
}

Modal.propTypes={
    image: PropTypes.shape({
    bigImage: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
}).isRequired,
onClose: PropTypes.func.isRequired,
}

export default Modal
