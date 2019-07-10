import React, { Component, ChangeEvent, createRef } from 'react';

const initialState = Object.freeze({ highlightedInput: "" });

type State = typeof initialState;


class SuggestionInput extends Component<{}, State> {
    readonly state = initialState;

    highlightRef = createRef<HTMLDivElement>();

    renderHighlight = (content: string) => {
        return (
            <div ref={this.highlightRef} tabIndex={0} >
                { content.length >= 3 && <b>{content}</b> }
            </div>
        );
    }

    componentDidUpdate() {
        const hightlightDiv = this.highlightRef.current;

        if (hightlightDiv) {
            hightlightDiv.focus();
        }
    }

    handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            highlightedInput: e.currentTarget.value,
        });
    }

    render() {
        return (
            <>
                <input onChange={this.handleChange}/>
                {this.renderHighlight(this.state.highlightedInput)}
            </>
        )
    }
}

export default SuggestionInput;