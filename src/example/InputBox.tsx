import React, { FC } from 'react';
import InputBoxInterface from '../proptypes/InputBoxInterface';

const InputBox: FC<InputBoxInterface> = (props) => {
    return (
        <div>
            <span>{props.title}</span>
            {props.children}
        </div>
    );
}