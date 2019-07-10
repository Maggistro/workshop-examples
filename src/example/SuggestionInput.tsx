import React, { Component, ChangeEvent, forwardRef } from 'react';
import SuggestionInputType, {HighlightRefType} from '../proptypes/SuggestionInputType';
import withTranslation from '../hoc/withTranslation';
import withTranslationType from '../proptypes/WithTranslationType';

const initialState = Object.freeze({ highlightedInput: "" });

type State = typeof initialState;


class SuggestionInput extends Component<SuggestionInputType & withTranslationType, State> {
    readonly state = initialState;

    static defaultProps = {
        innerRef: null,
    }

    renderHighlight = (content: string) => {
        return (
            <div ref={this.props.innerRef} tabIndex={0} >
                { content.length >= 3 && <b>{this.props.t(content)}</b> }
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

export default withTranslation<HighlightRefType, Omit<SuggestionInputType, 'innerRef'>>(
        forwardRef<HighlightRefType, Omit<SuggestionInputType & withTranslationType, 'innerRef'>>(
            (props, ref) => <SuggestionInput innerRef={ref} {...props} />
        )
    );