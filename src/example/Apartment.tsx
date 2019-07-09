import React, { FC } from 'react';
import Ratings from './Ratings';
import ProfileShorthand from './ProfileShorthand';

const Apartment: FC = () =>  {
    return (
        <div className="apartment">
            <img alt="dummy" src="dummy"/>
            <Ratings/>
            <p>Blabla</p>
            <ProfileShorthand/>>
        </div>
    )
}

export default Apartment;