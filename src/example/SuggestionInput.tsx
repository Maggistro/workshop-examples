import React, { Component } from 'react';

class SuggestionInput extends Component <{}> {
    state = {
        highlightedInput: "",
    }

    render() {
        return (
            <>
                <input value={this.state.highlightedInput}/>
            </>
        )
    }
}

export default SuggestionInput;