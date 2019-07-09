import React, { FC } from 'react';
import Ratings from './Ratings';
import ProfileShorthand from './ProfileShorthand';
import ApartmentInterface from '../proptypes/ApartmentInterface';
import { tsPropertySignature } from '@babel/types';

const Apartment: FC<ApartmentInterface> = (props) =>  {
    return (
        <div className="apartment">
            <img alt="dummy" src={props.image}/>
            <Ratings rating={props.rating} />
            <p>{props.description}</p>
            <ProfileShorthand {...props.profileInformation}/>
        </div>
    )
}

export default Apartment;