import React from 'react';
import InputBoxInterface from '../proptypes/InputBoxInterface';

const InputBox = (props: InputBoxInterface) => {
    return (
        <div>
            <span>{props.title}</span>
            {props.children}
        </div>
    );
}

export default InputBox;