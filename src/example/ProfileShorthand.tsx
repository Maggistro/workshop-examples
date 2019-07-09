import React from 'react';
import ProfileShorthandInterface from '../proptypes/ProfileShorthandType';

const ProfileShorthand = (props: ProfileShorthandInterface) => {
    return (
        <div>
            <img alt="profile" src="profile-image"/>
            <div>
                <span>
                    Name
                </span>
                <span>
                    location
                </span>
            </div>
        </div>
    )
}

export default ProfileShorthand;