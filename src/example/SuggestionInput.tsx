import React, { Component, ChangeEvent } from 'react';

const initialState = Object.freeze({ highlightedInput: "" });

type State = typeof initialState;


class SuggestionInput extends Component<{}, State> {
    readonly state = initialState;


    handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            highlightedInput: `<b>${e.currentTarget.value}</b>`
        })
    }

    render() {
        return (
            <>
                <input onChange={this.handleChange}/>
                <div dangerouslySetInnerHTML={{__html: this.state.highlightedInput}}></div>
            </>
        )
    }
}

export default SuggestionInput;