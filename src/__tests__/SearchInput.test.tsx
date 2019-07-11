import React, { RefObject } from 'react';
import {render, mount} from 'enzyme';
import SearchInput from '../example/SearchInput';
import { SuggestionInput } from '../example/SuggestionInput';


const getDummyEvent = (value: string) => {
  return {currentTarget: {value: value}, target: {value: value}};
}

describe('Test for SearchInput', () => {
    it('should render the complete tree', () => {
        const searchInput = render(<SearchInput/>);
        expect(searchInput.html()).toMatchSnapshot();
    })

    it('should focus child components', () => {
        const searchInput = mount(<SearchInput/>)
        searchInput.find('input').at(0).simulate('change', getDummyEvent('test'));
        searchInput.find('input').at(1).simulate('change', getDummyEvent('test'));

        const ref0 = searchInput.find(SuggestionInput).at(0).props().innerRef as RefObject<HTMLDivElement>;
        const ref1 = searchInput.find(SuggestionInput).at(1).props().innerRef as RefObject<HTMLDivElement>;

        if (ref0 && ref1) {
            expect(ref0.current).toBe(document.activeElement);
            expect(ref1.current).not.toBe(document.activeElement);
        } else {
            expect(false).toBe(true);
        }
    })
})
