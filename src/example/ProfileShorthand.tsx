import React, { FC } from 'react';

const ProfileShorthand: FC = () => {
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