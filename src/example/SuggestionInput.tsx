import React, { Component, ChangeEvent, forwardRef } from 'react';
import SuggestionInputType, {HighlightRefType} from '../proptypes/SuggestionInputType';

const initialState = Object.freeze({ highlightedInput: "" });

type State = typeof initialState;


class SuggestionInput extends Component<SuggestionInputType, State> {
    readonly state = initialState;

    static defaultProps = {
        innerRef: null,
    }

    renderHighlight = (content: string) => {
        return (
            <div ref={this.props.innerRef} tabIndex={0} >
                { content.length >= 3 && <b>{content}</b> }
            </div>
        );
    }

    handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            highlightedInput: e.currentTarget.value,
        });
        this.props.handleFocus();
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

export default forwardRef<HighlightRefType, Omit<SuggestionInputType, 'innerRef'>>(
        (props, ref) => <SuggestionInput innerRef={ref} {...props} />
    );