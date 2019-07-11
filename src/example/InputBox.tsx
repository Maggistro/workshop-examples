import React, { cloneElement } from 'react';
import InputBoxInterface from '../proptypes/InputBoxType';

const InputBox = (props: InputBoxInterface) => {

    const renderChildren = () => {
        return cloneElement(props.children, {className: "myInput"});
    }

    return (
        <div>
            <span>{props.title}</span>
            {renderChildren()}
        </div>
    );
}

export default InputBox;