import React from 'react';

import { IMAGE_URL } from '../shared/consts';

const Destination = ({destination, onClick}) => {
   
    return(
        <div className="destination"
         onClick={() => { onClick(destination.name) }}>
            <div className="overlay"></div>
            <div className="image-holder">
                <img src={`${IMAGE_URL}${destination.id}.jpg`} alt=""/>
            </div>
            <div className="title">
                { destination.name }
            </div>
        </div>
    )
}


export default Destination; 