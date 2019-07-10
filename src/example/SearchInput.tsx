import React, { createRef} from 'react';
import SuggestionInput from './SuggestionInput';
import InputBox from './InputBox';

const SearchInput = () => {

    const suggestionRefs = {
        first: createRef<HTMLDivElement>(),
        second: createRef<HTMLDivElement>(),
    };

    const handleFocus = (input: 'first'|'second') => {
        if (suggestionRefs.first.current && suggestionRefs.second.current) {
            if (input === 'first') {
                suggestionRefs.second.current.focus();
            } else {
                suggestionRefs.first.current.focus();
            }
        }
    }

    return (
        <div>
            <InputBox title="test">
                <SuggestionInput
                    handleFocus={() => handleFocus('first')}
                    ref={suggestionRefs.first}/>
            </InputBox>
            <InputBox title="test">
                <SuggestionInput
                    handleFocus={() => handleFocus('second')}
                    ref={suggestionRefs.second}/>
            </InputBox>
        </div>
    )
}

export default SearchInput;