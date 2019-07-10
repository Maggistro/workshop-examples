import React, { Component } from 'react';
import Ratings from './Ratings';
import ProfileShorthand from './ProfileShorthand';
import ApartmentType from '../proptypes/ApartmentType';
import WithTranslationType from '../proptypes/WithTranslationType';
import withTranslation from '../hoc/withTranslation';

class Apartment extends Component<ApartmentType & WithTranslationType, {}> {
    static defaultProps = {
        rating: 0,
    }

    render() {
        return (
            <div className="apartment">
                <img alt="dummy" src={this.props.image}/>
                <Ratings rating={this.props.rating} />
                <p>{this.props.t(this.props.description)}</p>
                <ProfileShorthand {...this.props.profileInformation}/>
            </div>
        )
    }
}

export default withTranslation<Apartment, ApartmentType>(Apartment);