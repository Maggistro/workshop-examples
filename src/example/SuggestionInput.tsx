import React, { useState, ChangeEvent, forwardRef } from 'react';
import SuggestionInputType, {HighlightRefType} from '../proptypes/SuggestionInputType';
import withTranslation from '../hoc/withTranslation';
import withTranslationType from '../proptypes/WithTranslationType';


const SuggestionInput = (props: SuggestionInputType & withTranslationType) => {

    const [highlightedInput, setHighlightedInput] = useState('');

    const renderHighlight = function(content: string) {
        return (
            <div ref={props.innerRef} tabIndex={0} >
                { content.length >= 3 && <b>{props.t(content)}</b> }
            </div>
        );
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setHighlightedInput(e.currentTarget.value);
        props.handleFocus();
    }

    return (
        <>
            <input onChange={handleChange}/>
            {renderHighlight(highlightedInput)}
        </>
    )
}

export default withTranslation<HighlightRefType, Omit<SuggestionInputType, 'innerRef'>>(
        forwardRef<HighlightRefType, Omit<SuggestionInputType & withTranslationType, 'innerRef'>>(
            (props, ref) => <SuggestionInput innerRef={ref} {...props} />
        )
    );