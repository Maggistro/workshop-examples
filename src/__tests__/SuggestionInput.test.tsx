import React from 'react';
import {shallow} from 'enzyme';
import {SuggestionInput} from '../example/SuggestionInput';


const getDummyEvent = (value: string) => {
  return {currentTarget: {value: value}};
}

describe('Test for SuggestionInput', () => {
  it('renders correctly', () => {
    const suggestion = shallow(<SuggestionInput handleFocus={jest.fn} innerRef={null} t={jest.fn()}/>).html();
    expect(suggestion).toMatchSnapshot();
  });

  it('Should call focus handler', () => {
    const handleFocus = jest.fn();
    const suggestion = shallow(<SuggestionInput handleFocus={handleFocus} innerRef={null} t={jest.fn()}/>);
    suggestion.find('input').simulate('change', getDummyEvent('test'));

    expect(handleFocus).toBeCalledTimes(1);
  })

  it('Listens to input changes', () => {
    const handleFocus = jest.fn();
    const suggestion = shallow(<SuggestionInput handleFocus={handleFocus} innerRef={null} t={(t:string) => t}/>);
    suggestion.find('input').simulate('change', getDummyEvent('t'));
    expect(suggestion.find('b').exists()).toBe(false);

    suggestion.find('input').simulate('change', getDummyEvent('test'));
    expect(suggestion.find('b').exists()).toBe(true);
    expect(suggestion.find('b').text()).toBe('test');
  })
})

