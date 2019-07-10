import { Ref } from "react";

type HighlightRef = HTMLDivElement;

type SuggestionInputProps = {
    className: string,
    handleFocus: () => void,
    innerRef: Ref<HighlightRef>,
}

export { HighlightRef as HighlightRefType }
export default SuggestionInputProps;