import React, { Component, ChangeEvent } from 'react';

class SuggestionInput extends Component <{}> {
    state = {
        highlightedInput: "",
    }

    handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            highlightedInput: `<b>${e.currentTarget.value}</b>`
        })
    }

    render() {
        return (
            <>
                <input value={this.state.highlightedInput} onChange={this.handleChange}/>
            </>
        )
    }
}

export default SuggestionInput;