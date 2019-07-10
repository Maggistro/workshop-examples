import { Ref } from "react";

type HighlightRef = HTMLDivElement;

type SuggestionInputProps = {
    handleFocus: () => void,
    innerRef: Ref<HighlightRef>,
}

export { HighlightRef as HighlightRefType }
export default SuggestionInputProps;