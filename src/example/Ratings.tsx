import React from 'react';
import RatingsType from '../proptypes/RatingsType';

const Ratings = (props: RatingsType) => {
    return (
        <div>
            {props.rating}
        </div>
    )
}

export default Ratings