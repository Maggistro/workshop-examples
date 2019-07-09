import React, { FC } from 'react';
import ProfileShorthandInterface from '../proptypes/ProfileShorthandInterface';

const ProfileShorthand: FC<ProfileShorthandInterface> = () => {
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