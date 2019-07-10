import React from 'react';
import SuggestionInput from './SuggestionInput';
import InputBox from './InputBox';

const SearchInput = () => {
    return(
        <div>
            <InputBox title="test">
                <SuggestionInput/>
            </InputBox>
            <InputBox title="test">
                <SuggestionInput/>
            </InputBox>
            <InputBox title="test">
                <SuggestionInput/>
            </InputBox>
        </div>
    )
}

export default SearchInput;