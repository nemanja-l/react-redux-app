import React from 'react';

import { IMAGE_URL } from '../shared/consts';

const Activity = ({activity, onClick}) => {
   
    return(
        <div className="activity">
            <div className="image-holder">
                <img src={`${IMAGE_URL}${activity.attributes.media.banner.url}.jpg`} alt=""/>
            </div>
            <div className="title"
                onClick={() => { onClick(activity.id) }}>
                { activity.attributes.title }
            </div>
        </div>
    )
}


export default Activity; 