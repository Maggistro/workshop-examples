import React, { Component } from 'react';

const initialState = Object.freeze({ highlightedInput: "" });

type State = typeof initialState;


class SuggestionInput extends Component<{}, State> {
    readonly state = initialState;

    render() {
        return (
            <>
                <input value={this.state.highlightedInput}/>
            </>
        )
    }
}

export default SuggestionInput;